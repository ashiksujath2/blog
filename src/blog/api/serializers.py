from rest_framework import serializers
from blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    publication_date = serializers.DateTimeField(format='%A, %B %d, %Y')
    category = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name')

    class Meta:
        model = Article
        fields = (
            'title', 'author', 'category', 'publication_date',
            'hero_img', 'image', 'body_text')

    def get_author(self, obj):
        return obj.author.get_full_name()


class ArticleListSerializer(ArticleSerializer):

    class Meta(ArticleSerializer.Meta):
        fields = ('id', 'title', 'author', 'body_text', 'hero_img', 'publication_date')


class RandomArticleListSerializer(ArticleSerializer):

    class Meta(ArticleSerializer.Meta):
        fields = ('id', 'title', 'hero_img')
