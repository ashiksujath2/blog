from django.conf.urls import url

from blog.api.views import ArticleListView

urlpatterns = [
    url(r'^api/articles$', ArticleListView.as_view()),
]
