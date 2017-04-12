from django.conf.urls import url

from blog.api.views import ArticleListView, RandomArticleListView, ArticleDetailView

urlpatterns = [
    url(r'^api/articles$', ArticleListView.as_view()),
    url(r'^api/random/articles$', RandomArticleListView.as_view()),
    url(r'^api/article/(?P<pk>\d+)$', ArticleDetailView.as_view()),
]
