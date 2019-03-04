$(document).ready(function(){

    // Navbar shrinking animation
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90){
            $('nav.codeflair_navbar').addClass("shrinked");
        }
        else{
            $('nav.codeflair_navbar').removeClass("shrinked");
        }
    });


    // Main slider logic
    let mainSlider = $('#codeflair-header-slider');
    let slideContentOne = $('.text_content_slide_1');
    let slideContentTwo = $('.text_content_slide_2');
    let slideContentThree = $('.text_content_slide_3');

    $(mainSlider).on('slide.bs.carousel', function (ev) {

        let id = ev.relatedTarget.id;
        switch (id) {
            case "slide1":
                $(slideContentThree).removeClass('show');
                $(slideContentTwo).removeClass('show');
                $(slideContentOne).addClass('show');

                break;
            case "slide2":
                $(slideContentOne).removeClass('show');
                $(slideContentThree).removeClass('show');
                $(slideContentTwo).addClass('show');

                break;
            case "slide3":
                $(slideContentOne).removeClass('show');
                $(slideContentTwo).removeClass('show');
                $(slideContentThree).addClass('show');

                break;
            default:
            //the id is none of the above
        }
    });


    // Counter-Up (has dependency with 'waypoints.js')
    $('.counter').counterUp({
        time: 1100
    });

    $('.codeflair_home_slider').slick({
        dots: false,
        arrow: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });





});