(function() {
    angular.module('blog')
    .factory('blogServices', BlogServices);

    BlogServices.$inject = ['$http', 'blogConfig'];
    function BlogServices($http, blogConfig) {
        var obj = {};

        obj.getBlogList = function(query) {
            var url = blogConfig.blogListUrl;
            url = query ? url+'?q='+query : url;
            return $http.get(url);
        };

        obj.getBlogDetail = function(id) {
            var url = blogConfig.blogDetailUrl+id;
            return $http.get(url);
        };

        obj.getRandomArticles = function() {
            var url = blogConfig.blogRandomListUrl;
            return $http.get(url);
        };

        return obj;
    }


})();
