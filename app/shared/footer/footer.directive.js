(function(){
	angular.module('blog.footer', [])

	.directive('uiFooter', function(){
		return {
			restrict: 'A',
			templateUrl: 'app/shared/footer/footer.view.html'
		};
	});
})();
