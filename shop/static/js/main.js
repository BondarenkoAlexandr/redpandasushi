document.addEventListener('DOMContentLoaded', function(event) {
    // LazyLoad загрузка
    
    window.addEventListener("load", function(e) {
        $preloader = $('.preloader'),
        $loader = $preloader.find('.wrapper');
        $loader.delay(2050).fadeOut('slow');
        $preloader.delay(950).fadeOut('slow');
        $('body').delay(2050).css('overflow','auto');

        var lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });

        $('img.img-svg').each(function(){
            var $img = $(this);
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
            }, 'xml');
        });

        $(document).ready(function(){
            $('.main-content_card-recomendation_drink-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                arrow: true,
                autoplaySpeed: 10000,
                prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                responsive: [
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                            nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                            speed: 400,
                            autoplay: true,
                            autoplaySpeed: 10000
                        },
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                            nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                            speed: 400,
                            autoplay: true,
                            autoplaySpeed: 10000
                        }
                    }
                ]
            });
        });

        $(document).ready(function(){
            $('.main-content_card-recomendation_snacks-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                arrow: true,
                autoplaySpeed: 10000,
                prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                responsive: [
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                            nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                            speed: 400,
                            autoplay: true,
                            autoplaySpeed: 10000
                        },
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '<img class="img-svg prev" src="/static/img/back.svg"></img>',
                            nextArrow: '<img class="img-svg next" src="/static/img/next.svg"></img>',
                            speed: 400,
                            autoplay: true,
                            autoplaySpeed: 10000
                        }
                    }
                ]
            });
        });

        function paymentCheckBox() {
            document.querySelectorAll('.main-form_payment-check input').forEach(event => {
                event.addEventListener('click', () => {
                    if (document.getElementById('card').checked === true) {
                        document.querySelector('.main-form_payment-back').style.display = 'none'
                    } else {
                        document.querySelector('.main-form_payment-back').style.display = 'block'
                    }
                })
            })
        }
        paymentCheckBox();

        function basketOpen() {
            if (document.documentElement.clientWidth > 1800) {
                document.querySelector('.main-basket').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '0'
                    if (document.querySelector('.main-content_block')) {
                        document.querySelector('.main-content_block').style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
                        document.querySelector('.main-content').style.padding = '70px 420px 50px 200px'
                    }
                    if (document.querySelector('.main-content_menu')) {
                        document.querySelector('.main-content').style.padding = '70px 400px 50px 200px';
                        document.querySelectorAll('.main-content_menu-item_title').forEach(event => {
                            event.style.fontSize = '38px'
                        })
                    }
                })
                document.querySelector('.main-offer_ttl-item').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '-380px'
                    if (document.querySelector('.main-content_block')) {
                        document.querySelector('.main-content').style.padding = '70px 116px 50px 200px';
                        document.querySelector('.main-content_block').style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
                    }
                    if (document.querySelector('.main-content_menu')) {
                        document.querySelector('.main-content').style.padding = '70px 116px 50px 200px';
                        document.querySelectorAll('.main-content_menu-item_title').forEach(event => {
                            event.style.fontSize = '44px'
                        })
                    }
                })
            } else if (document.documentElement.clientWidth > 1199 & document.documentElement.clientWidth < 1799) {
                document.querySelector('.main-basket').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '0'
                    if (document.querySelector('.main-content_block')) {
                        document.querySelector('.main-content_block').style.gridTemplateColumns = '1fr 1fr 1fr'
                        document.querySelector('.main-content').style.padding = '30px 300px 50px 150px'
                    }
                    if (document.querySelector('.main-content_menu')) {
                        document.querySelector('.main-content').style.padding = '30px 300px 50px 150px';
                        document.querySelectorAll('.main-content_menu-item').forEach(e => {
                            e.style.width = '70%'
                        })
                        document.querySelectorAll('.main-content_menu-item_title').forEach(event => {
                            event.style.fontSize = '30px'
                        })
                    }
                })
                document.querySelector('.main-offer_ttl-item').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '-320px'
                    if (document.querySelector('.main-content_block')) {
                        document.querySelector('.main-content').style.padding = '30px 100px 50px 150px';
                        document.querySelector('.main-content_block').style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
                    }
                    if (document.querySelector('.main-content_menu')) {
                        document.querySelector('.main-content').style.padding = '30px 100px 50px 150px';
                        document.querySelectorAll('.main-content_menu-item').forEach(e => {
                            e.style.width = '60%'
                        })
                        document.querySelectorAll('.main-content_menu-item_title').forEach(event => {
                            event.style.fontSize = '30px'
                        })
                    }
                })
            } else {
                document.querySelector('.main-basket').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '0';
                    document.body.style.overflow = 'hidden';
                });
                document.querySelector('.main-offer_ttl-item').addEventListener('click', () => {
                    document.querySelector('.main-offer').style.right = '-100%';
                    document.body.style.overflow = 'auto';
                });
            }
            
        }
        basketOpen();

        function menuShowing() {
            
            document.querySelector('.header-navigation_menu-close').addEventListener('click', () => {
                document.querySelector('.header-navigation_menu').style.left = '100%'
            });
            document.querySelector('.header-navigation_mobile-humburger').addEventListener('click', () => {
                document.querySelector('.header-navigation_menu').style.left = '0';
            });
        }
        menuShowing();

        function mobilePhoneShowing() {
            document.querySelector('.header-navigation_mobile-phone').addEventListener('click', function () {
                if (this.classList.contains('mobile-show')) {
                    document.querySelector('.header-navigation_mobile-phone').classList.remove('mobile-show')
                    document.querySelector('.header-navigation_mobile-phone_block').style.display = 'flex'
                } else {
                    document.querySelector('.header-navigation_mobile-phone').classList.add('mobile-show')
                    document.querySelector('.header-navigation_mobile-phone_block').style.display = 'none'
                }
            })
        }
        mobilePhoneShowing();

        function getLocation() {
            console.log(window.location.pathname);
            document.querySelectorAll('.main-menu_item a').forEach(function (e) {
                if (window.location.pathname === e.pathname) {
                    console.log(e.nextSibling);
                    e.classList.add('orange')
                    console.log(e.pathname);
                }
            })
        }
        getLocation();
    });
})