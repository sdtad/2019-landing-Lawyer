$(function(){

$('.btn-menu').on('click', function(){
	$('.header-menu ul').slideToggle();
});

$('.slider-inner, .news-slider-inner').slick({
	dots: false,
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	infinite: false,
	responsive: [
    {
      breakpoint: 801,
      settings: {
        arrows: false,
        dots: true
      }
    }
  	]
});

$('select').styler();

});