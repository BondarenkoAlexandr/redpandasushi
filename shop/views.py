from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Category, Product, Articles
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from cart.forms import CartAddProductForm

# Create your views here.

def index(request):
    return render(request, 'shop/product/index.html')

def product_list(request,category_slug=None,filtering=None):
    category = None
    categories= Category.objects.all()
    products = Product.objects.filter(available=True)
    cart_product_form = CartAddProductForm()
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    if filtering:
        products = products.order_by('-'+filtering)
    paginator = Paginator(products, 2)
    page = request.GET.get('page')
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)


    return render(request,'shop/product/index.html',{'category': category,'categories': categories,'products': products, 'page': page,'posts': posts,'cart_product_form': cart_product_form})

def menu(request):
    categories= Category.objects.all()
    return render(request,'shop/product/menu.html',{'categories': categories})

def delivery(request):
    categories= Category.objects.all()
    return render(request,'shop/product/delivery.html',{'categories': categories})

def news(request):
    categories= Category.objects.all()
    articles= Articles.objects.all()
    return render(request,'shop/product/news.html',{'articles': articles,'categories': categories})

def news_detail(request,id,slug):
    categories= Category.objects.all()
    news = get_object_or_404(Articles,id=id,slug=slug)
    return render(request, 'shop/product/news_detail.html', {'article': news,'categories': categories})


def product_detail(request,id,slug):
    categories= Category.objects.all()
    product = get_object_or_404(Product,id=id,slug=slug,available=True)
    drink = Product.objects.filter(drink=True)
    eat = Product.objects.filter(drink=False)
    cart_product_form = CartAddProductForm()
    return render(request, 'shop/product/detail.html', {'product': product,'categories': categories,'cart_product_form': cart_product_form, 'napitki':drink, 'eat': eat})

def cart_gen(request):
    categories= Category.objects.all()
    products = Product.objects.filter(available=True)
    cart_product_form = CartAddProductForm()
    return render(request, 'shop/product/cart.html', {'product': products,'categories': categories,'cart_product_form': cart_product_form})