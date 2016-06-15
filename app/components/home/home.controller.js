(function(){
	angular.module('blog.home', [])

	.controller('homeCtrl', ['$log', '$scope', 'homeService', function($log, $scope, homeService){
		homeService.getPosts().then(function(data){
			$log.log(data);
			$scope.posts = data;
		});
	}]);
})();
