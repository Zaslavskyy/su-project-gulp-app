
$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('pulse');
      }
    });
  });
  $(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+200) {
        $(this).addClass('bounceInRight');
      }
    });
  });
  $(window).scroll(function() {
    $('.mov3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass('bounceIn');
      }
    });
  });

