from rest_framework import generics

from .serializers import ArticleListSerializer
from blog.models import Article


class ArticleListView(generics.ListCreateAPIView):
    """List Articles View"""
    serializer_class = ArticleListSerializer

    def get_queryset(self):
        return Article.objects.all()
