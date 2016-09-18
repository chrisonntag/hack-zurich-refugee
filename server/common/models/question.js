var googleTranslate = require('google-translate')('AIzaSyDweKpI9r-hptoy4HWa7Rci3fYrrqLvcD4');

var algoliasearch = require('algoliasearch');
var client = algoliasearch('LSDVSKQFDY', '493727bd884c9bf189b300df681b0d15');
var index = client.initIndex('refugee_questions');

module.exports = function(Question) {

	Question.askInDifferentLanguage = function(data, cb) {
		var original_question = data.question;

		googleTranslate.translate(data.question, 'en', function(err, translation) {
			var sourceLanguage = translation.detectedSourceLanguage;
			var input = {"question": translation.translatedText, "groupId": data.groupId}
			
			Question.ask(input, function(err, result) {
				if (result.solution) {
					googleTranslate.translate(result.solution, sourceLanguage, function(err, translation) {
						result.translated_solution = translation.translatedText;
						result.original_question = original_question;
						cb(null, result);
					})
				} else {
					cb(null, {"result": "question asked no reply"})
				}
			});
		});
	};

	Question.remoteMethod(
		'askInDifferentLanguage',
		{
			accepts: [
				{ arg: 'data', type: 'object', http: { source: 'body' } }
      		],
			http: {path: '/ask/lang', verb: 'post'},
			returns: [{arg: 'data', type: 'object'}]
		}
	);
	
	Question.ask = function(data, cb) {
		var question = data.question;
		var groupId = data.groupId;

		console.log("group id sent " + groupId)

		if (!question || !groupId) {
			cb(null, {"result": "missing fields"})
			return
		}
		

		index.search(question, function(err, results) {
			console.log("- - - -")
			console.log(results);
			results = returnSearchesWithCorrectGroupId(groupId, results);
			console.log(results);
			console.log("- - - -")

			if (results.hits.length > 0) {
				if (results.hits[0].solution) {
					// solution available
					cb(null, results.hits[0])
				} else {
					// asked before and no solution
					cb(null, {"result": "question asked no reply"})
				}
				
			} else {
				// create in algo and create question
				var data = [
					{
						"question": question,
						"groupId": groupId
					}
				];

				index.addObjects(data, function(err, content) {

					if (err) {
						cb(null, {"result": "err adding object"})
					} else {
						data[0].algoliaId = content.objectIDs[0];
						data[0].groupId = groupId
						
						Question.create(data[0], function(err, q) {
							cb(null, {"result": "question added"});
						})
					}
				});
			}
		})
	};

	function returnSearchesWithCorrectGroupId(groupId, searchResults) {
		console.log("in search" +  searchResults.hits.length)
		console.log(searchResults.hits)
		var hits = searchResults.hits
		console.log(hits);

		var newSearchResults = searchResults;
		newSearchResults.hits = [];

		for (var i in hits) {
			if (groupId == hits[i].groupId) {newSearchResults.hits.push(hits[i]);}
		}
		
		console.log("exit in search")
		return newSearchResults;
	}

	Question.remoteMethod(
		'ask',
		{
			accepts: [
				{ arg: 'data', type: 'object', http: { source: 'body' } }
      		],
			http: {path: '/ask', verb: 'post'},
			returns: [{arg: 'data', type: 'object'}]
		}
	);

	Question.answer = function(id, data, cb) {
		if (!data.solution) {
			cb(null, {"result": "please provide solution"});
		} else {
			Question.findById(id, function(err, question) {
				console.log(question)
				index.saveObject({
					solution: data.solution,
					question: question.question,
					objectID: question.algoliaId,
					groupId: question.groupId
				}, function(err, content) {
					if (err) {
						cb(null, {"result": "Error updating Algolia model."});
					} else {
						question.solution = data.solution;
						question.save(function(err, q) {
							if (err) {
								cb(null, {"result": "Error updating api model."});
							} else {
								cb(null, {"result": "question answered."});
							}
							
							
						})
					}
				});
				
			})
		}	
	};

	Question.remoteMethod(
		'answer',
		{
			accepts: [
				{ arg: 'id', type: 'string', http: { source: 'path' } },
				{ arg: 'data', type: 'object', http: { source: 'body' } }
      		],
			http: {path: '/:id/answer', verb: 'post'},
			returns: [{arg: 'data', type: 'object'}]
		}
	);
};
