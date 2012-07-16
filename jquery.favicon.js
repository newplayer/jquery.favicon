/**
 * @author NewPlayer
 * 
 * based on: http://css-tricks.com/favicons-next-to-external-links/
 * 
 */

(function( $ ) {
	$.fn.linkfavicon = function( options ) {
		
		// beállítások eszközölése
		var settings = $.extend( {
			'position': 'left center',
			'repeat' : 'no-repeat',
			'padding' : '0px 0px 0px 20px',
			'addclass' : ''
		}, options);
		
		// végigszaladunk az elemeken
		this.each(function() {
			
			// megnézzük, hogy hozzá kell-e adni valamilyen osztályt az elemhez
			if (settings.addclass!=''){
			
				// ha igen, akkor hozzáadjuk azt
				$(this).addClass(settings.addclass);
			}
			
			// majd beállítjuk az elem hátterének  favicont
			$(this).css({
		        background: "url(http://www.google.com/s2/u/0/favicons?domain=" + this.hostname + 
		        ") " + settings.position + " " + settings.repeat,
		        "padding": settings.padding
		    });
			
		});
	};
})( jQuery );