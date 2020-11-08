$(document).ready(function() {
	
	$('body').addClass('js')
	
	var $menu = $('#menu'),
    	$menulink = $('.menu-link'),
    	$links = $('#menu').find('a')
  
	$menulink.click(function() {
  		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
  		return false
	});

	$links.click(function() {
		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
	});

	$('.rslides').responsiveSlides()

});

var mq48 = window.matchMedia('(min-width:48em)')

function mediaQueries(mq48)
{
	//https://www.youtube.com/watch?v=-LqZt5Z-Tcg

	if(mq48.matches)
	{
		//mostrar iframe de video de youtube
		document.getElementById('logos-video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LqZt5Z-Tcg" frameborder="0" allowfullscreen></iframe>'
	}
	else
	{
		//mostrar link a video de youtube
		document.getElementById('logos-video').innerHTML = '<a href="https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank">Ver video</a>'
	}
}

mediaQueries(mq48)
mq48.addListener(mediaQueries)