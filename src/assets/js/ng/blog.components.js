(function() {
    angular.module('blog')
    .component('readNext', {
        templateUrl: ['blogConfig', function(blogConfig) {
            return blogConfig.staticUrl + "js/ng/blog.template.readnext.html";
        }],
        controller: 'ReadComponentController',
    })
    .component('navBar', {
        templateUrl: ['blogConfig', function(blogConfig) {
            return blogConfig.staticUrl + "js/ng/blog.template.navbar.html";
        }],
    });
})();
