var icon = document.getElementById("icon");
var heroimg = document.getElementById("heroimg");

icon.onclick = function(){
 document.body.classList.toggle("light-theme");
 if(document.body.classList.contains("light-theme")){
   icon.src ="svg/light-mode.svg";
   heroimg.src ="img/ramilton_hero_img_Night.png";
 }else{
   icon.src = "svg/dark-mode.svg"
   heroimg.src ="img/Ramilton-hero-img-dark.png";
   
   }
}
/*
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

 function scrollFunction() {  if (document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
 }
 function topFunction() {
  document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
}

*/
//scroll up com progresso
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient( var(--cor-principal) ${scrollValue}%, var(--cor-secundaria) ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// mover na página

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("link").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
