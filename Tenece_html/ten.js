new Swiper("#swipe-serv", {
    speed: 1000,
    spaceBetween: 25,
    effect: 'slide',
    slidesPerView: 3,
    slidesPerGroup: 1,
    //loop: false,
    autoplay: true,
    keyboard: {
        enabled: true
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableInInteraction: false
            },
            //autoplayResume: true,
        },
        770: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableInInteraction: false
            },
            //autoplayResume: true,
        },
        771: {
            //autoplayPause: false,
        }
    }
});

new Swiper("#swipe", {
    speed: 500,
    centeredSlides: true,
    spaceBetween: 35,
    effect: 'slide',
    slidesPerView: 4,
    slidesPerGroup: 4,
    lazyLoading: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableInInteraction: false
    },
    keyboard: {
        enabled: true
    },
    pagination: {
        el: "#swipe .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '#nav-right',
        prevEl: '#nav-left'
    }
});

new Swiper("#swipe-me", {
    speed: 500,
    spaceBetween: 40,
    centeredSlides: true,
    effect: 'slide',
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: false,
    autoplay: {
        delay: 5000,
        disableInInteraction: false
    },
    keyboard: {
        enabled: true
    },
    pagination: {
        el: "#swipe-me .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '#naviright',
        prevEl: '#navileft'
    }
});


const brands = document.querySelector('ul.brands'),     
        partners_brands= document.querySelector('ul.partners_brands'),
        news_brands = document.querySelector('ul.news_brands')

        total_brand = brands.children.length,
        total_partners = partners_brands.children.length;
        total_news = news_brands.children.length;

        document.documentElement.style.setProperty('--total-clients', total_brand);
        document.documentElement.style.setProperty('--total-partners', total_partners);
        document.documentElement.style.setProperty('--total-news', total_news);

        for (let i = 0; i < total_brand; i++){
            brands.appendChild(brands.children[i].cloneNode(true));
        }

        for (let i = 0; i < total_partners; i++){
            partners_brands.appendChild(partners_brands.children[i].cloneNode(true));
        }

        for (let i = 0; i < total_news; i++){
            news_brands.appendChild(news_brands.children[i].cloneNode(true));
        }
