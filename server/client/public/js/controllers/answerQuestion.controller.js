angular
	.module('app')
		.controller('answerQuestionsController', ['$scope', '$rootScope', '$stateParams', 'api', 'questionService',function($scope, $rootScope, $stateParams, api, questionService) {
			var question = questionService.getQuestion();
			$scope.question = question;

			$scope.submit = function() {
				api.answerQuestion(question.id, $scope.solution, function(data, status, headers, config) {
					console.log(data);
					$state.go("unanswered-questions")
				});
			}
		}])
