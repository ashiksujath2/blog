(function() {
    angular.module('blog')
    .config(RouteConfig);

    RouteConfig.$inject = ['$routeProvider', '$locationProvider', 'blogConfig'];
    function RouteConfig($routeProvider, $locationProvider, blogConfig) {
        $routeProvider
        .when('/',
            {
                templateUrl: blogConfig.staticUrl + "js/ng/blog.template.list.html",
                controller: "BlogListController",
                controllerAs: "$ctrl",
                resolve: {
                    data: function(blogServices) {
                        return blogServices.getBlogList().then(function(response) {
                            return response.data;
                        });
                    }
                }
            }
        )
        .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }



})();
