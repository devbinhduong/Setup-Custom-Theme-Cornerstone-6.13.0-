import updateTextWithLiveData from './updateTextWithLiveData';
import tooltipSetup from './tooltipSetup';

export default ($dots, activeSlideIdx, slidesQuantity, { carouselArrowAndDotAriaLabel, carouselActiveDotAriaLabel }) => {
    if (!$dots) return;

    if (slidesQuantity < 2) {
        $dots.css('display', 'none');
        return;
    }

    $dots.css('display', 'block');

    $dots.children().each((idx, dot) => {
        const dotLabelText = updateTextWithLiveData(carouselArrowAndDotAriaLabel, idx + 1, slidesQuantity);
        const dotSlideStatusText = idx === activeSlideIdx ? `, ${carouselActiveDotAriaLabel}` : '';
        const dotAriaLabel = `${dotLabelText}${dotSlideStatusText}`;
        const $dotButton = $(dot).find('[data-carousel-dot]');

        tooltipSetup($dotButton.attr('aria-label', dotAriaLabel));


        var dotSTT = idx;
        dotSTT++;

        $(dot).find('[data-carousel-dot]').attr('aria-label', dotAriaLabel);
        if (!$(dot).find('[data-carousel-dot] .dot-stt').length) {
            $(dot).find('[data-carousel-dot]').append('<span class="dot-stt">'+0+ +dotSTT+'</span>');
        }
    });
};
