angular
	.module('app')
		.controller('unansweredQuestionsController', ['$scope', '$rootScope', '$state', 'api', 'questionService',function($scope, $rootScope, $state, api, questionService) {
			api.getCampAndUnansweredQuestions(function(data, status, headers, config) {
				$scope.group = data.groups
				$scope.requestCompleted = true
			})

			$scope.answerQuestion = function(question) {
				questionService.setQuestion(question);
				$state.go("answer-question")
			}
		}])
