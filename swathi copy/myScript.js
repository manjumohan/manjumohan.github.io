var main = function() {

  $('button').click(function() {
    $(this).toggleClass('expanded').siblings('.mobile-menu').slideToggle();
    });




$(document).ready(main);



