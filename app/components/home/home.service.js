(function(){
	angular.module('blog.home')

	.factory('homeService', function($http){

		return {
			getPosts: function(){
				var promise;

				promise = $http.get('mock/posts.json').then(function(response){
					return response.data;
				});

				return promise;
			}
		};
	});
})();
