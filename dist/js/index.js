$(document).ready(function() {
    console.log('HELLO')
    var $menu = $("#menu").mmenu({
        // options
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#page"
        }
    });
    var $icon = $("#icon");
    var API = $menu.data("mmenu");
    $icon.on("click", function() {
        API.open();
    });
    API.bind("open:finish", function() {
        setTimeout(function() {
            $icon.addClass("is-active");
        }, 100);
    });
    API.bind("close:finish", function() {
        setTimeout(function() {
            $icon.removeClass("is-active");
        }, 100);
    });
    
});

var slideIndex = 0;
var counting_time;

// Next/previous controls
function plusSlides(prev) {
  clearTimeout(counting_time);
  prev ? slideIndex - 1 : null;
  showSlides();
}

function showSlides() {
    console.log(slideIndex);
    var i;
    var slides = $(".mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    counting_time = setTimeout(showSlides, 5000);
}

showSlides(slideIndex);
//# sourceMappingURL=maps/index.js.map
