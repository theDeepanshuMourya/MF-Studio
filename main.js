// PRELOADER
var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function() {
      loadNow(opacity - 0.05)
    }, 50);
  }
}

function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById('loader');
  loadNow(1);
});

// Responsive Navbar
var t1 = new TimelineMax({
  paused: true
});

t1.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});

t1.to(".menu", 1, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -0.8
});

t1.staggerFrom(".menu ul li", 1, {
  x: -200,
  opacity: 0,
  ease: Expo.easeOut
}, 0.2);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
  t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});

// Explore Animation
function fadeOut() {
  TweenMax.to(".myBtn", 1, {
    y: -100,
    opacity: 0
  });

  TweenMax.to(".screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 2
  });

  TweenMax.from(".overlay", 2, {
    ease: Power2.easeInOut
  });

  TweenMax.to(".overlay", 2, {
    delay: 2.6,
    top: "-110%",
    ease: Expo.easeInOut
  });

  TweenMax.from(".content", 2, {
    delay: 3.2,
    opacity: 0,
    ease: Power2.easeInOut
  });

  TweenMax.to(".content", 2, {
    opacity: 1,
    y: -300,
    delay: 3.2,
    ease: Power2.easeInOut
  });
}

// Slider
$(document).on('ready', function() {
  $(".center").slick({
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }, {
      breakpoint: 300,
      settings: "unslick" //destroy slick
    }]
  });
});

// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.logo, .social-media, .toggle-btn, .copyright',{
	duration: 1500,
	origin: 'top',
	distance: '10px'
});

sr.reveal('.content-work, .content-work-two, .content-work-three, .form',{
	duration: 2000,
	origin: 'bottom',
	distance: '10px'
});
