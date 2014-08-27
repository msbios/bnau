$(document).ready(function(){
    
    // Banner
    $('#slider').slider({
        prevText: '',
        nextText: '',
        pauseTime: 5000
    });
    
	// Google Map
    var ppGmap = $('#pp-gmap');
    
    if (ppGmap.length) {
        ppGmap.gmap().bind('init', function(ev, map) {
            $(this).gmap('addMarker', {
                'position': '57.7973333,12.0502107', 
                'bounds': true
            }).click(function() {
                $(this).gmap('openInfoWindow', {
                    'content': 'Hello World!'
                }, this);
            });
        });
    }
    
    $('#pp-leftmenu h3').click(function(){
        
        var el = $(this).parent();
        
        if (el.hasClass("active")) {
            el.removeClass("active");
            el.addClass("deactive");
        } else {
            el.addClass("active");
            el.removeClass("deactive");
        }
        
    });
    
});

