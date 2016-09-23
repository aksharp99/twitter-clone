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


var maxCharacters = 140;

$('#char-count').text(maxCharacters);

$('textarea').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $('textarea').val().length;

    if (characters >= 130) {
      count.css("color","red");
    } else {
        count.css("color","#999");
    }


    if (characters >= 140) {
      count.css("color","#999");
      $('#tweet-submit').hide();
    } else {
      $('#tweet-submit').show();
    }
  count.text(maxCharacters - characters);
});



});
