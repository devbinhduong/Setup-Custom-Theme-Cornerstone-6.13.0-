import PageManager from './page-manager';


export default class Home extends PageManager {
    constructor(context) {
        super(context);
    }

    onReady() {
        // this.customPaging();
    }

    customPaging(){
        $('.heroCarousel--custom .slick-dots li').each(function(i){
            var slide = $(this).find('button').text();
            console.log("alo", $(this).find('button'));
            // $(this).find('button').text('0' + slide).addClass('slick-dots-item');
        })
    }
}