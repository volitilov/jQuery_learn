jQuery(document).ready(function() {
	// $('.home, a').append('Hello world')
	// setTimeout(() => $('p').remove(), 3000)

	// var link = $('li').clone();
	// $('ul').append(link);

	$('textarea').on('keyup', function() {
		var t = $('textarea').val()
		$('p').html(t);
	});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', '/media/assets/particles/particles.json', function() {
		console.log('callback - particles.js config loaded');
});

});