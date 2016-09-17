angular
	.module('app', [
		'ui.router'
		// 'lbServices'

	])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
			$urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/partials/home.jade',
				controller: 'homeController as homeCtrl',
			})

			.state('login', {
				url: '/login',
				templateUrl: '/partials/volenteer/login.jade',
				controller: 'loginController as loginCtrl'
			})
			.state('unanswered-questions', {
				url: '/group/unanswered-questions',
				templateUrl: '/partials/volenteer/unanswered-questions.jade',
				controller: 'unansweredQuestionsController as unansQuestCtrl'
			})
			.state('answer-question', {
				url: '/group/answer-question',
				templateUrl: '/partials/volenteer/answer-question.jade',
				controller: 'answerQuestionsController as ansQuestCtrl'
			})

      .state('refugee', {
        url: '/refugee',
				abstract: true,
        templateUrl: '/partials/refugee/refugee.jade',
        controller: 'refugeeController',
      })
			.state('refugee.survey', {
				url: '/survey',
				templateUrl: '/partials/refugee/refugee.survey.jade',
				controller: 'surveyController',
			})
      .state('refugee.portal', {
        url: '/portal',
        templateUrl: '/partials/refugee/refugee.portal.jade',
      })
			.state('refugee.portal.ask', {
				url: '/ask',
				templateUrl: '/partials/refugee/refugee.portal.ask.jade',
				controller: 'askController',
			})
			.state('refugee.portal.list', {
				url: '/list',
				templateUrl: '/partials/refugee/refugee.portal.list.jade',
				controller: 'listController',
			})
      ;

		$urlRouterProvider.otherwise('home');

	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {

	}]);
