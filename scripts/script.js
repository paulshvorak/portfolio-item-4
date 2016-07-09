
$(document).ready(function() {

$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }
});

wow = new WOW(  
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    })

    wow.init();


// Magnific Popup
    $(".lightbox").magnificPopup();

});
