angular
	.module('app')
	.factory('questionService', ['$rootScope', '$http', '$q', '$state', function($rootScope, $http, $q, state) {

		var question = {};
		
		function setQuestion(q) {
			question = q
		}

		function getQuestion() {
			return question
		}

		return {
			setQuestion:setQuestion,
			getQuestion:getQuestion
		};
	}]);
