(function() {
    angular.module('blog', ['ngRoute'])
    .constant("blogConfig", {
        "staticUrl": '/static/',
        "blogListUrl": '/api/articles'
    });
})();
