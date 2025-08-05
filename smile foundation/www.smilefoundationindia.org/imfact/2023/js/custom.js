$(document).ready(function(){
    $(".youtube-link").grtyoutube();
  document.body.addEventListener('mousemove', function(e){
    var mX = e.pageX + 'px';
    var mY = e.pageY + 'px';
    document.getElementsByClassName('cursor')[0].style.transform = 'translate3d(' + mX + ',' + mY  + ',' +  '0px)';
  });

  document.getElementsByClassName('drag')[0].addEventListener('mouseenter', function(){
    document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
  });

  document.getElementsByClassName('drag')[0].addEventListener('mouseleave', function(){
    document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
  });

  document.getElementsByClassName('scroll')[0].addEventListener('mouseenter', function(){
    document.getElementsByClassName('dot')[0].classList.add('scroll-pointer');
  });

  document.getElementsByClassName('scroll')[0].addEventListener('mouseleave', function(){
    document.getElementsByClassName('dot')[0].classList.remove('scroll-pointer');
  });

  document.getElementsByClassName('hover')[0].addEventListener('mouseenter', function(){
    document.getElementsByClassName('dot')[0].classList.add('hover-pointer');
  });

  document.getElementsByClassName('hover')[0].addEventListener('mouseleave', function(){
    document.getElementsByClassName('dot')[0].classList.remove('hover-pointer');
  });

});

$(document).ready(function(){
  collectMapSvg();
  var cn = 0;
  var win = $(this);
  $('.ham-icon').click(function(){
    if(cn == 0){
      var st = "hidden";
      cn = 1;
      $('#header').addClass('bluebg');
      $('.cross-btn2').show();
    }else{
      var st = "unset";
      cn = 0;
      $('#header').removeClass('bluebg');
      $('.cross-btn2').hide();
    }
    $("body").css("overflow", st);
    $(".my-sidenav1").slideToggle("slow");
  });
  $(".my-sidenav").accordion();

  $(".empoweringSlider.owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: true,
    nav: true,
    navText: "",
    touchDrag: true,
    mouseDrag: false,
    smartSpeed: 1000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        margin:10,
        nav: false,
      },
      991: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".awardsSlider.owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: true,
    nav: true,
    navText: "",
    touchDrag: true,
    mouseDrag: false,
    smartSpeed: 1000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        margin:10,
        nav: false,
      },
      991: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });
});


$('.ham-icon1').click(function(){
  $('.my-sidenav').css('max-width', '100%');
});



$('.cross-btn1').click(function(){
  $('.my-sidenav').css('max-width', '0');
}); 

$(window).on("scroll", function() {

  // Sticky nev Effect
  if($(this).scrollTop() > 50) {
   $('#header').addClass("sticky"); 
 } 
 else {
   $('#header').removeClass("sticky");
 } 
});



$('.panel-collapse').on('shown.bs.collapse', function (e) {
 var $panel = $(this).closest('.panel');
 $('html,body').animate({
   scrollTop: $panel.offset().top-80
 }, 500); 
});


     /*
 * Replace all SVG images with inline SVG
 */
function collectMapSvg() {
  $('img.mapsvg').each(function(){
  //$('.'+cls).css({ fill: "#ff0000" });
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
        // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

        // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

        // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
}
$('.glanc-slider.owl-carousel').owlCarousel({
  autoplay: false,
  loop:false,
  dots:true,
  nav: true,
  navText: "",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed:1000,
  margin:20,
  stagePadding: 20,
  responsive: {
    0: {
      items: 1,
      stagePadding: 10,
      nav: false,
      autoHeight: true,
      margin:10
    },
    991: {
     items:2
   },
   1000: {
     items:3
   }
 }      
});
$('.eduction-slider.owl-carousel').owlCarousel({
  autoplay: false,
  loop:false,
  dots:true,
  nav: true,
  navText: "",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed:1000,
  margin:20,
  responsive: {
    0: {
      items: 1
    },
    991: {
     items:1
   },
   1000: {
     items:3
   }
 }
});      
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#fixMenu li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

$('.backTop').bind('click', function(e) {
  e.preventDefault();
  $('body,html').animate({scrollTop:0},800);  
});


