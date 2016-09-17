var algoliasearch = require('algoliasearch');
var client = algoliasearch('LSDVSKQFDY', '493727bd884c9bf189b300df681b0d15');
var index = client.initIndex('refugee_questions');

module.exports = function(Question) {
	
	Question.ask = function(data, cb) {
		var question = data.question;

		index.search(question, function(err, results) {
			if (results.hits[0]) {
				if (results.hits[0].solution == "\n") {
					// solution available
					cb(null, results.hits[0])	
				} else {
					// asked before and no solution
					cb(null, {"result": "question asked no reply"})
				}
				
			} else {
				// create in algo and create question
				var data = [{"question": question}];

				index.addObjects(data, function(err, content) {

					if (err) {
						cb(null, {"result": "err adding object"})
					} else {
						data[0].algoliaId = content.objectIDs[0];
						
						Question.create(data[0], function(err, q) {
							cb(null, {"result": "question added"});
						})
					}
				});
			}
		})
	};

	Question.remoteMethod(
		'ask',
		{
			accepts: [
				{ arg: 'data', type: 'object', http: { source: 'body' } }
      		],
			http: {path: '/ask', verb: 'post'},
			returns: [{arg: 'msg', type: 'object'}]
		}
	);

	Question.answer = function(id, data, cb) {
		if (!data.solution) {
			cb(null, {"result": "please provide solution"});
		} else {
			Question.findById(id, function(err, question) {
				index.saveObject({
					solution: data.solution,
					question: question.question,
					objectID: question.algoliaId
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
			returns: [{arg: 'msg', type: 'object'}]
		}
	);
};
