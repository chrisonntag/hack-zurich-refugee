angular
	.module('app')
	.factory('surveyService', ['$rootScope', '$http', '$q', '$state', function($rootScope, $http, $q, state) {

		var survey = {};

		function setSurvey(q) {
			survey = q
		}

		function getSurvey() {
			return survey
		}

		return {
			setSurvey: setSurvey,
			getSurvey: getSurvey,
		};
	}]);
