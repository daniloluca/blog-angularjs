(function(){
	angular.module('blog.header', [])

	.directive('uiHeader', function(){
		return {
			restrict: 'A',
			templateUrl: 'app/shared/header/header.view.html'
		}
	});
})();
