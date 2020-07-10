from django.db import models
from django.urls import reverse

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200, db_index=True,verbose_name='Название категории')
    slug = models.SlugField(max_length=200, db_index=True, unique=True,verbose_name='Название страницы')
    image = models.FileField(upload_to='category/', blank=True,verbose_name='Маленькая картинка для бокового меню(svg)')
    image_big = models.FileField(upload_to='category/', blank=True,verbose_name='Большая картинка для меню')
    order_id = models.IntegerField(verbose_name='Порядок в меню',unique=True, null=True)

    class Meta:
        ordering = ('order_id',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def get_absolute_url(self):
        return reverse('shop:product_list_by_category',args=[self.slug])
            
    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products' , on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=200, db_index=True, verbose_name='Сcылка в поисковой строке транслитом')
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True, verbose_name='Картинка')
    description = models.TextField(blank=True, verbose_name='Описание')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
    available = models.BooleanField(default=True, verbose_name='Наличие')
    drink = models.BooleanField(default=False, verbose_name='Напиток')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Добавлено')
    updated = models.DateTimeField(auto_now=True, verbose_name='Обновлено')

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def get_absolute_url(self):
        return reverse('shop:product_detail',args=[self.id, self.slug])

    def __str__(self):
        return self.name

class Articles(models.Model):
    title = models.CharField(max_length=200, db_index=True)
    subtitle = models.CharField(max_length=200,verbose_name='Подзаголовок статьи',null=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='articles/', blank=True)
    text = models.TextField(verbose_name='Текст статьи')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    
    class Meta:
        ordering = ('id',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
    
    def get_absolute_url(self):
        return reverse('shop:news_detail',args=[self.id, self.slug])

    def __str__(self):
        return self.title