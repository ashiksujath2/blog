(function() {
    angular.module('blog')
    .controller('BlogListController', BlogListController);

    BlogListController.$inject = ['data'];
    function BlogListController(data) {
        var self = this;
        self.articles = data.results;
        self.preview = data.results[0];
    }

})();





