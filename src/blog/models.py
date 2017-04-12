from datetime import date
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ArticleManager(models.Manager):
    pass


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
