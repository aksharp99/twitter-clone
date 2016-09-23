$(document).ready(function() {
  $('.button').hide();
  $('#char-count').hide();

  $('.tweet-compose').on('click', function() {
    $('.button').show();
    $('#char-count').show();
  })

  $('.tweet-compose').on('mouseenter', function() {
    $(this).animate({height: "+=50px"});
  })

  $('.tweet-compose').on('mouseleave', function() {
    $(this).animate({height: "-=50px"});
  })

});


  // $('.tweet-compose').on('click', function() {
  //   $('#tweet-content').animate({padding-top: "20px"})
  //   $('.button').show();
  //   $('#char-count').show();
