
// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.nav a').click(function(){

    //Toggle Class
    // $(".active").removeClass("active");
    // $(this).closest('li').addClass("active");
    // var theClass = $(this).attr("class");
    // $('.'+theClass).parent('li').addClass('active');



    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 280
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();





$('#container').picturehover()

$('#container').picturehover({
  duration:'slow'
})

$('#container').picturehover({
  caption:'alt'
})

$('#container').picturehover({
  target:'img',
})

$('#container').picturehover({
  fontColor:'#fff',
  textAlign:'left',
  verticalMiddle: true,
  backgroundColor:'rgba(0,0,0,.7)',
  height:'100%'
})

$('#container').picturehover().on('slideInEnd',function(event,data){
  // fired after slide in
})
$('#container').picturehover().on('slideOutEnd',function(event,data){
  // fired after slide out
})


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Reveal CSS Animations
// new WOW().init();

jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/

// Back to Top
  var scrollDiv = document.createElement("div");
  jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() != 0) {
      jQuery("#toTop").fadeIn();
    } else {
      jQuery("#toTop").fadeOut();
    }
  });
  jQuery("#toTop").click(function () {
    jQuery("body,html").animate({
      scrollTop: 0
    },
    800);
  });
  });

