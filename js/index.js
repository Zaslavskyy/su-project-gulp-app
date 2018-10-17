
function loadParagraph() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status === 200) {
    document.getElementById('about').innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'data/data.html', true);
xhr.send('null');
}




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

