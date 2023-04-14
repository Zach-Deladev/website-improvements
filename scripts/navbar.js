
// function to change bg color of navbar on scroll 
$(function () {
  $(window).on("scroll", function () {
      $("body").toggleClass("scrolled", $(document).scrollTop() > 50);
  })
});


