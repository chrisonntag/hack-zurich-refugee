angular
	.module('app')
	.factory('api', ['$rootScope', '$http', '$q', '$state', function($rootScope, $http, $q, state) {

		var baseUrl = "http://localhost:3000/api";

		var accessToken = '';
		var accountId;

		function login(username, password, cb) {
			var data = {password: password, username: username}

			$http.post(baseUrl + '/Accounts/login?include=user', data).
			success(function(data_login, status, headers, config) {


				if(data_login.verified === false) cb(data_login, status, headers, config);
				else {

					accessToken = "access_token=" + data_login.id;
					localStorage.setItem("secrAT", data_login.id);
					accountId = data_login.userId;
					localStorage.setItem("secrAC", data_login.userId);

					$rootScope.account = data = data_login.user;

					cb(data, status, headers, config);
				}
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function getCampAndUnansweredQuestions() {
			var filter = 
			$http.post(baseUrl + '/Accounts?filter="' + filter, data).
			success(function(data_login, status, headers, config) {

			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function asQuestion(question) {
			data = {question: question};

			$http.post(baseUrl + '/Questions/ask/lang', data).
			success(function(data, status, headers, config) {
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		return {
			login: login,
			asQuestion:asQuestion
		};
	}]);
