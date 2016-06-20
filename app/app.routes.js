(function(){
	angular.module('blog.routes', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/components/home/home.view.html',
			controller: 'homeCtrl'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'app/components/about/about.view.html'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'app/components/contact/contact.view.html'
		})

		.state('post', {
			url: '/post/:id',
			templateUrl: 'app/components/post/post.view.html'
		})

		.state('new', {
			url: '/new',
			templateUrl: 'app/components/new/new.view.html',
			controller: 'newCtrl'
		});
	});
})();
