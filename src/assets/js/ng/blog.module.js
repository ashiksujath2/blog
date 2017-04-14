(function() {
    angular.module('blog', ['ngRoute'])
    .constant("blogConfig", {
        "staticUrl": '/static/',
        "blogListUrl": '/api/articles',
        "blogDetailUrl": '/api/article/',
        "blogRandomListUrl": '/api/random/articles'
    });
})();
