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
  