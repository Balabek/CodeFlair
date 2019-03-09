$(document).ready(function(){


    // Homepage Slider
    $('.codeflair_home_slider').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });



    // Location Slider
    $('.codeflair_location_slider').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });



    // Mini-Map Slider ("Job" inner page)
    $('.mini_map_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });


    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


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

        $(slideContentOne).removeClass('show');
        $(slideContentTwo).removeClass('show');
        $(slideContentThree).removeClass('show');

        $('.text_content_'+ id).addClass('show');

    });


    // Counter-Up (has dependency with 'waypoints.js')
    $('.counter').counterUp({
        time: 1100
    });


});