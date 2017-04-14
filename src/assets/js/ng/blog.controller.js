(function() {
    angular.module('blog')
    .controller('BlogListController', BlogListController)
    .controller('BlogDetailController', BlogDetailController);

    BlogListController.$inject = ['data'];
    function BlogListController(data) {
        var self = this;
        self.articles = data.results;
        self.preview = data.results[0];
    }

    BlogDetailController.$inject = ['data'];
    function BlogDetailController(data) {
        var self = this;
        self.article = data;
    }

})();





