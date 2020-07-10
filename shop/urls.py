from django.urls import path, include
from . import views

app_name='shop'

urlpatterns=[
    path('',views.product_list, name='product_list'),
    path('menu/',views.menu, name='menu'),
    path('delivery/',views.delivery, name='delivery'),
    path('news/',views.news, name='news'),
    path('cart/', include('cart.urls')),
    path('<int:id>/<slug:slug>/',views.product_detail,name='product_detail'),
    path('news/<int:id>/<slug:slug>/',views.news_detail, name='news_detail'),
    path('<str:category_slug>/',views.product_list, name='product_list_by_category'),
    path('<str:category_slug>/<str:filtering>/',views.product_list, name='product_list_by_category'),
]