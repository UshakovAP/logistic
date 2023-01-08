// Intro slider

let introSlider = $('#introSlider');

introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autospeed: 4000,
    speed: 1000,
});

$('#introSliderPrev').on('click', function () {
    introSlider.slick('slickPrev');
});

$('#introSliderNext').on('click', function () {
    introSlider.slick('slickNext');
});

// Reviews slider

let reviewsSlider = $('#reviewsSlider');

reviewsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autospeed: 4000,
    speed: 500,
});
