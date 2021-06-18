$(document).ready(function(){
    const promo_screen_slider = new Swiper('.promo_screen_slider', {
        loop : true,
        pagination :{
            el: '.promo_screen_slider_pagination'
        }
    })


    $('.main_slider').each(function(){
        var swiper = new Swiper(this, {
        slidesPerView: 1.7,
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: this.parentElement.querySelector('.main_slider_next'),
            prevEl: this.parentElement.querySelector('.main_slider_prev')
        },    
        breakpoints :{
            765 :{
                slidesPerView: 2.5
            },
            1440 :{
                slidesPerView: 4.5

            }
        }
    });

    $('.footer_toggle').unbind().on('touch, click', function(){
        if($(this).find('img').attr('src') === 'img/footerplus.svg'){
           setTimeout(() => {
            $(this).find('img').attr('src', 'img/footerminus.svg')
           }, 100);
            $(this).find('img').css({transform : 'rotate(180deg)'})
            $(this).parent().parent().find('.footer_links_body').css({display : 'flex'}).animate({height : 'auto'}, 350)
        } else {
            $(this).parent().parent().find('.footer_links_body').css({display : 'none'}).animate({height : 'auto'}, 350)
            setTimeout(() => {
                $(this).find('img').attr('src', 'img/footerplus.svg')
            }, 100);
            $(this).find('img').css({transform : 'rotate(0)'})

        }
        
    });
});

});