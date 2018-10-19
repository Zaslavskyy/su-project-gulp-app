var load = document.getElementById("loadText");
load.onclick = function() {
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

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span. onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

