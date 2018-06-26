function navBarToggle(){
  $(".side-menu").toggleClass('menu-open');
  $(".menu-close").toggleClass('close-open');
  $(".navbar-toggle-icon-1").toggleClass('icon-1');
  $(".navbar-toggle-icon-2").toggleClass('icon-2');
  $(".navbar-toggle-icon-3").toggleClass('icon-3');

}

//HIDE WHEN CLICKED ANYWHERE BUT NAVBAR
$(function() {
  $('body').bind('click', function(e) {
      if($(e.target).closest('.side-menu').length == 0) {
          var opened =
          $('.side-menu').hasClass('menu-open');
          if ( opened === true ) {
              navBarToggle();
          }
      }
  });
});

//OPEN/CLOSE WHEN CLICKED ON NAVBAR BUTTON
$(function() {
    $('.menu-toggle, .menu-close').on('click', function() {
        navBarToggle();
    });
});
