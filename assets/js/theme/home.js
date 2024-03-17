import PageManager from './page-manager';


export default class Home extends PageManager {
    constructor(context) {
        super(context);
    }

    onReady() {
        this.customPaging();
    }

    customPaging(){
        const heroCustom = $('.heroCarousel-custom');
        const heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
        heroCustom.slick({
            dots: true,
            arrows: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: heroCustom.data('autoplay'),
            infinite: true,
            asNavFor: ".heroCarousel"
        });
        //ADA
        $('.heroCarousel-custom .slick-dots li').each(function(i){
            var slide = $(this).find('button').text();
            $(this).find('button').text('0' + slide).addClass('slick-dots-item');
        })

        heroCustom.on('afterChange', (event, slider, i) => {
            var pos = $(slider.$slides[i]).find('div[data-position]').data('position');

            if(pos === 'right'){
                heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
            } else{
                heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
            }
        });
        
        if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
            heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
        }
    }
}