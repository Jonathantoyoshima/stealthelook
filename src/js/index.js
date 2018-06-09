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