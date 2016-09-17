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

			.state('question', {
				url: '/question',
				templateUrl: '/partials/refugee/question.jade'
				// controller: 'homeController as homeCtrl',
			});

		$urlRouterProvider.otherwise('home');
		
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {

	}]);
