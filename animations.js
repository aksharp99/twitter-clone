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

$('#tweet-submit').on('click', function() {
  $('#stream').prepend("<div class='tweet'>" +
    "<div class='content'>" +
      "<img class='avatar' src='img/damenleeturks.jpg' />" +
      "<strong class='fullname'>My BFF</strong>" +
      "<span class='username'>@mybff</span>" +
    "<p class='tweet-text'>Today is an amazing day.</p>" +
  "<div class='tweet-actions'>" +
  "<ul>" +
  "<li><span class='icon action-reply'></span> Reply</li>" +
  "<li><span class='icon action-retweet'></span> Retweet</li>" +
  "<li><span class='icon action-favorite'></span> Favorite</li>" +
  "<li><span class='icon action-more'></span> More</li>" +
  "</ul>" +
  "</div>"+
  "<div class='stats'>" +
  "<div class='retweets'>" +
  "<p class='num-retweets'>30</p>" +
  "<p>RETWEETS</p>" +
  "</div>" +
  "<div class='favorites'>" +
  "<p class='num-favorites'>6</p>" +
  "<p>FAVORITES</p>" +
  "</div>" +
  "<div class='users-interact'>" +
    "<div>" +
    "<img src='img/alagoon.jpg' />" +
    "<img src='img/vklimenko.jpg' />" +
    "</div>" +
    "</div>" +
    "<div class='time'>1:04 PM - 19 Sep 13</div>" +
    "</div>" +
    "<div class='reply'>" +
    "<img class='avatar' src='img/alagoon.jpg' />" +
    "<textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea>" +
    "</div>" +
    "</div>" +
    "</div>")

})
});
