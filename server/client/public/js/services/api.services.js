angular
	.module('app')
	.factory('api', ['$rootScope', '$http', '$q', '$state', function($rootScope, $http, $q, state) {

		var baseUrl = "http://139.59.183.242:3000/api";

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

		function getCampAndUnansweredQuestions(cb) {
			var filter = '{"include":{"groups":"questions"}}';

			// $http.get('http://test-api.pi-top.com/api/Classrooms?filter=' + filter + '&access_token=' + accessToken)
			// .success(function(data, status) {
			// 	cb(data, status);
			// }).
			// error(function(data, status) {
			// 	cb(data, status);
			// });
			console.log(baseUrl + '/Accounts/' + accountId + '?filter=' + filter + '&' + accessToken)
			$http.get(baseUrl + '/Accounts/' + accountId + '?filter=' + filter + '&' + accessToken)
			.success(function(data, status, headers, config) {
				console.log(data)
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function askQuestion(question, cb) {
			groupId = JSON.parse(localStorage.getItem("refufaq_user_details")).group
			data = {question: question, groupId: groupId};

			$http.post(baseUrl + '/Questions/ask/lang', data).
			success(function(data, status, headers, config) {
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function answerQuestion(questionId, solution, cb) {
			var data = {"solution": solution};
			$http.post(baseUrl + '/Questions/' + questionId + '/answer', data).
			success(function(data, status, headers, config) {
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function latestQuestions(cb) {
			groupId = JSON.parse(localStorage.getItem("refufaq_user_details")).group
			var filter = '{"limit": "10", "where":{"groupId": "' + groupId.toString() + '"}}';
			console.log(filter)

			$http.get(baseUrl + '/Questions' + '?filter=' + filter)
			.success(function(data, status, headers, config) {
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		function allGroups(cb) {
			$http.get(baseUrl + '/Groups')
			.success(function(data, status, headers, config) {
				cb(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				cb(data, status, headers, config);
			});
		}

		return {
			login: login,
			askQuestion:askQuestion,
			getCampAndUnansweredQuestions:getCampAndUnansweredQuestions,
			answerQuestion:answerQuestion,
			latestQuestions: latestQuestions,
			allGroups: allGroups
		};
	}]);
