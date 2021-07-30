$(function() {
  $(".toggle-menu").click(function() {
    $(this).toggleClass("active");
    $('.overlay').toggleClass("open");
  });
});