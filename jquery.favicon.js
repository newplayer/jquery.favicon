/**
 * jQuery.Favicon
 * Egy egyszerű jQuery plugin, faviconok lekérdezésére.
 * https://github.com/newplayer/jquery.favicon
 * 
 * @version 1.0
 * 
 * 
 * @author NewPlayer
 * @link https://github.com/newplayer/jquery.favicon
 * 
 * 
 * credits: http://css-tricks.com/favicons-next-to-external-links/
 * 
 */

(function( $ ) {
	
	$.fn.favicon = function( options ) {
		
		// beállítások eszközölése
		var settings = $.extend( {
			'position': 'left center',
			'repeat' : 'no-repeat',
			'padding' : '0px 0px 0px 20px',
			'domainsource' : '',
			'addclass' : ''
		}, options );
		
		// a domain, aminek az iconját le akarjuk kérdezni
		var domain = "";
		
		// végigszaladunk az elemeken
		return this.each(function() {
			
			// megnézzük, hogy hozzá kell-e adni valamilyen osztályt az elemhez
			if ( settings.addclass != '' ){
			
				// ha igen, akkor hozzáadjuk azt
				$( this ).addClass( settings.addclass );
			}
			
			// megnézzük, hogy a felhasználó ad-e nekünk domain neveket amiket használjunk, vagy magunknak kell lekérdezni
			if ( settings.domainsource != '' ){
				
				// kapunk, úgyhogy kérdezzük le azokat
				domain = $( this ).attr( settings.domainsource );
				
			} else {
				
				// az alapértelmezett módszerrel kérdezzük le a domain neveket
				domain = this.hostname;
				
			}
			
			
			
			// majd beállítjuk az elem hátterének  favicont
			$( this ).css({
		        background: "url(http://www.google.com/s2/u/0/favicons?domain=" + domain + ") " + settings.position + " " + settings.repeat,
		        "padding": settings.padding
		    });
			
		});
	};
	
})( jQuery );