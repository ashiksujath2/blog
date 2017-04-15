(function() {
    angular.module('blog')
    .controller('BlogListController', BlogListController)
    .controller('BlogDetailController', BlogDetailController)
    .controller('ReadComponentController', ReadComponentController);

    BlogListController.$inject = ['data'];
    function BlogListController(data) {
        var self = this;
        self.articles = data.results.slice(1);
        self.preview = data.results[0];
    }

    BlogDetailController.$inject = ['data'];
    function BlogDetailController(data) {
        var self = this;
        self.article = data;
    }

    ReadComponentController.$inject = ['blogServices'];
    function ReadComponentController(blogServices) {
        var self = this;
        var pageSize = 4;
        var pages = 0;
        var randomArticles = null;

        self.dispArticles = [];
        self.currentPage = 1;


        function setDispArticles() {
            var n = pageSize*self.currentPage;
            self.dispArticles = randomArticles.slice(n-pageSize, n);
        }

        self.$onInit = function() {
            blogServices.getRandomArticles().then(function (response) {
                randomArticles = response.data;
                pages = Math.ceil(randomArticles.length/pageSize);
                setDispArticles();
            });
        };

        self.onNext = function() {
            if (self.currentPage >= pages) return;
            self.currentPage += 1;
            setDispArticles();
        };

        self.onPrev = function() {
            if (self.currentPage <= 1) return;
            self.currentPage -= 1;
            setDispArticles();
        };
    }

})();





