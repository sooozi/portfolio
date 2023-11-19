AOS.init();
// http://ahrengot.com/tutorials/greensock-javascript-animation

// var $circle = $('.circle');

// function moveCircle(e) {
//   TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);

$(document).ready(function () {

    $(document).mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        $(".circle").show().css({
            left: mouseX + "px",
            top: mouseY + "px"
        });
    });

});

let mouseCursor = document.querySelector(".circle");
let circleHover = document.querySelectorAll(".arrow_button, .short_cut, .loop_area");

circleHover.forEach((link) => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("circle_on");
        mouseCursor.style.zIndex = "2";
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("circle_on");
        mouseCursor.style.zIndex = "1";
    });
})












// 전체효과
{

    var late_num = 0;

    let title = $('.main_text > h2');
    let ver = $('.main_text > span');
    let bg_img = $('.work_wrap .barrel_area');

    function slideEffect(type) {

        numEffect(type);

        if (type === 'left') {
            if (title.text() != 'BARREL') {
                textEffect();
                imgEffect();
            }
        } else {
            if (title.text() != 'NAMHAE') {
                textEffect();
                imgEffect()
            }
        }

        changeFunc(type);

    }

    function numEffect(type) {

        if (type === 'left') {
            if (late_num < 0) {
                late_num = late_num + 103;

                $('.count').css('transform', `translateY(${late_num}%)`);
            }

        } else {
            if (late_num > -206) {
                late_num = late_num - 103;

                $('.count').css('transform', `translateY(${late_num}%)`);
            }
        }

        detailEffect(late_num);
    }

    /* ----------------------------------------------------------------- */
    function detailEffect(late_num) {
        $('.detail').css('transform', `translateY(${late_num - 4}%)`);
    }
    /* ----------------------------------------------------------------- */

    function textEffect() {
        $('.main_text h2').addClass('effect');
        $('.main_text > span').addClass('effect');

        setTimeout(() => {
            $('.main_text h2').removeClass('effect');
            $('.main_text > span').removeClass('effect');
        }, 1000)
    }

    function imgEffect() {
        $('#bg_img').addClass('effect');
        $('#bg_img').addClass('effect');

        setTimeout(() => {
            $('#bg_img').removeClass('effect');
            $('#bg_img').removeClass('effect');
        }, 1000)
    }

    function changeFunc(type) {
        const portfolio_arr = [
            {
                'title': 'BARREL',
                'ver': 'PC VER.',
                'bg_img': './images/barrel_bg.jpg',
                'url': 'http://kimsuji.dothome.co.kr/barrel.html'
            },
            {
                'title': 'HOLLYS',
                'ver': 'MOBILE VER.',
                'bg_img': './images/hollys_bg.jpg',
                // 'url': 'http://kimsuji.dothome.co.kr/hollys.html'
                'url': 'a'
            },
            {
                'title': 'NAMHAE',
                'ver': 'RESPONSIVE VER.',
                'bg_img': './images/nhchemical_bg.jpg',
                'url': 'http://kimsuji.dothome.co.kr/namhae.html'
            }

        ]

        setTimeout(() => {


            if (type === 'left') {

                if (title.text() != 'BARREL') {
                    $('.loop_area a').removeClass('on');
                }

                if (title.text() === 'HOLLYS') {

                    title.text(portfolio_arr[0]['title']);
                    ver.text(portfolio_arr[0]['ver']);
                    bg_img.css('background-image', `url(${portfolio_arr[0]['bg_img']})`);
                    // $('.short_cut').attr('href', 'http://kimsuji.dothome.co.kr/barrel.html');
                    $('.short_cut').attr('href', 'http://kimsuji.dothome.co.kr/barrel.html');


                    $('.loop_area a.barrel').addClass('on');

                } else if (title.text() === 'NAMHAE') {

                    title.text(portfolio_arr[1]['title']);
                    ver.text(portfolio_arr[1]['ver']);
                    bg_img.css('background-image', `url(${portfolio_arr[1]['bg_img']})`);
                    // $('.short_cut').attr('href', 'http://kimsuji.dothome.co.kr/hollys.html');
                    $('.short_cut').attr('href', 'aaaddd');

                    $('.loop_area a.hollys').addClass('on');
                }

            } else {

                if (title.text() != 'NAMHAE') {
                    $('.loop_area a').removeClass('on');
                }

                if (title.text() === 'BARREL') {
                    console.log(portfolio_arr[1]['title']);

                    title.text(portfolio_arr[1]['title']);
                    ver.text(portfolio_arr[1]['ver']);
                    bg_img.css('background-image', `url(${portfolio_arr[1]['bg_img']})`);
                    // $('.short_cut').attr('href', 'http://kimsuji.dothome.co.kr/hollys.html');
                    $('.short_cut').attr('href', '/hollys.mobile/hollys.html'); //this link hollys

                    $('.loop_area a.hollys').addClass('on');

                } else if (title.text() === 'HOLLYS') {

                    title.text(portfolio_arr[2]['title']);
                    ver.text(portfolio_arr[2]['ver']);
                    bg_img.css('background-image', `url(${portfolio_arr[2]['bg_img']})`);
                    $('.short_cut').attr('href', 'http://kimsuji.dothome.co.kr/namhae.html');

                    $('.loop_area a.nh').addClass('on');
                }

            }
        }, 500)

    }

}

