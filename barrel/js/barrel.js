$('.new_product_area .menu_area a').click(function() {

    var this_class = $(this).attr('class');
    var img = $('.new_product_area .img_wrap img');

    if (this_class === 'new_prod_item1') {

        $(img).attr('src', './images/new_prod1.jpg');

    } else if (this_class === 'new_prod_item2') {

        $(img).attr('src', './images/new_prod2.jpg');

    } else if (this_class === 'new_prod_item3') {

        $(img).attr('src', './images/new_prod3.jpg');

    }

})