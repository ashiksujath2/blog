from rest_framework import generics

from .serializers import (
    ArticleListSerializer, RandomArticleListSerializer, ArticleSerializer)
from blog.models import Article


class ArticleListView(generics.ListAPIView):
    """List Articles View"""
    serializer_class = ArticleListSerializer

    def get_queryset(self):
        search = self.request.query_params.get('q', None)
        return Article.objects.get_published(search=search)


class RandomArticleListView(generics.ListAPIView):
    serializer_class = RandomArticleListSerializer
    pagination_class = None

    def get_queryset(self):
        return Article.objects.get_random()


class ArticleDetailView(generics.RetrieveAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.get_published()
