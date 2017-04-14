(function() {
    angular.module('blog')
    .factory('blogServices', BlogServices);

    BlogServices.$inject = ['$http', 'blogConfig'];
    function BlogServices($http, blogConfig) {
        var obj = {};

        obj.getBlogList = function() {
            var url = blogConfig.blogListUrl;
            return $http.get(url);
        };

        obj.getBlogDetail = function(id) {
            var url = blogConfig.blogDetailUrl+id;
            return $http.get(url);
        };

        return obj;
    }


})();
