$(document).ready(function () {

  console.log('scripts init');

    // Slider about

    $(".slider_about").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        navText: []
    });

    // Slider partners

    $(".slider_partners").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: [],
        responsive : {
            0 : {
                items: 1
            },
            650: {
                items: 3
            },
            930: {
                items: 4
            },
            1110: {
                items: 5
            },
        }
    });

    // Menu

    $('.button').on('click', function(){
        $('.menu_block').toggleClass('active');
    });

    $('.menu ul li a').on('click', function(){
        $('.menu_block').removeClass('active');
    });

    // Services block

    var h = $('.services_list_first li .services_list_cont').height() + 70;
    $('.slide_2').css("margin-bottom", h);

    $('.services_list_first > li > span').on('click', function(){
        if ($(this).parent().hasClass('active')){

        } else{
            $('.services_list_first > li').removeClass('active');
            $(this).parent().addClass('active');
            var h = ($(this).parent().children( ".services_list_cont" ).height() + 70);
            $('.slide_2').css("margin-bottom", h);
        }
    });

    // Photo block

    var h = $('.services_list_next li .services_list_cont').height() + 70;
    $('.slide_4').css("margin-bottom", h);

    $('.services_list_next > li > span').on('click', function(){
        if ($(this).parent().hasClass('active')){

        } else{
            $('.services_list_next > li').removeClass('active');
            $(this).parent().addClass('active');
            var h = ($(this).parent().children( ".services_list_cont" ).height() + 70);
            $('.slide_4').css("margin-bottom", h);
        }
    });

});