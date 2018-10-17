

function loadParagraph() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("about").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "data/data.html", true);
  xhttp.send();
}


$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('pulse');
      }
    else {
      this.classList.remove("pulse");
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
      else {
        this.classList.remove("bounceInRight");
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
      else {
        this.classList.remove("bounceIn");
      }
    });
  });

