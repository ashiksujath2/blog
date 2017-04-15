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
                    data: function(blogServices, $route) {
                        return blogServices.getBlogList($route.current.params.q).then(function(response) {
                            return response.data;
                        });
                    }
                }
            }
        )
        .when('/article/:id', {
            templateUrl: blogConfig.staticUrl + "js/ng/blog.template.detail.html",
            controller: "BlogDetailController",
            controllerAs: "$ctrl",
            resolve: {
                data: function(blogServices, $route) {
                    return blogServices.getBlogDetail($route.current.params.id).then(function(response) {
                        return response.data;
                    });
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    }



})();
