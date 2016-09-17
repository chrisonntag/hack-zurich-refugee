var algoliasearch = require('algoliasearch');
var client = algoliasearch('LSDVSKQFDY', '493727bd884c9bf189b300df681b0d15');
var index = client.initIndex('refugee_questions');

// index.search('Missal', function(err, results) {
//   if (err) {
//     throw err;
//   }

//   console.log('We got `' + results.nbHits + '` results');
//   console.log('Here is the first one: ', results.hits[0]);

//   // call client.destroy() this when you need to stop the node.js client
//   // it will release any keepalived connection
//   client.destroy();
// });

module.exports = function(Question) {
	
	Question.ask = function(data, cb) {
		var question = data.question;

		index.search(question, function(err, results) {
			if (results.hits[0]) {
				console.log(results.hits[0].solution)
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
					console.log(content);
					console.log(err);

					if (err) {
						cb(null, {"result": "err adding object"})
					} else {
						data[0].algoliaId = content.objectIDs[0];
						
						Question.create(data[0], function(err, q) {
							console.log(err);
							console.log(q);
							cb(null, {"result": "question added"})	
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
};
