from datetime import date
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ArticleManager(models.Manager):

    def get_published(self, search=None):
        qry = self.filter(publication_date__lte=date.today())
        if search:
            qry = qry.filter(title__icontains=search)
        return qry.order_by('-publication_date')

    def get_random(self, limit=100):
        return self.get_published().order_by('?')[:limit]


class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User)
    publication_date = models.DateField(default=date.today)
    category = models.ForeignKey(Category)
    hero_img = models.ImageField(upload_to="images/hero/%Y/%m")
    image = models.ImageField(null=True, blank=True, upload_to="images/%Y/%m")
    body_text = models.TextField(blank=True)

    objects = ArticleManager()

    def __str__(self):
        return self.title
