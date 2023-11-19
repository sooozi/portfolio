

$('.top_btn_menu').click(function () {
    $('.top_menu').slideToggle(500);
})

$('.btn_menu').click(function () {
    $('.family_site').slideToggle(500);
})

$(".info_farming_area .swiper-container").each(function(elem, target){
    var swp = target.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});

$(".info_farming_area .swiper-slide").hover(
    function() {
        mySwiper .autoplay.stop();
    }, function() {
        mySwiper .autoplay.start();
    }
);