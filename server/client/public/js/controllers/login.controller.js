angular
	.module('app')
		.controller('loginController', ['$scope', '$rootScope', '$state', 'api',function($scope, $rootScope, $state, api) {
			$scope.user = {};

			$scope.login = function() {
				api.login($scope.user.username, $scope.user.password, function(data, status) {
					$state.go('unanswered-questions')
				});
			}
			
		}])