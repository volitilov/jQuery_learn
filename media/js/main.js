// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var $j = jQuery.noConflict();

$j(function() {

	$j('a').click(function(event) {
		event.preventDefault();
		$j('h1').css({
			color: 'red',
			fontSize: '+=20px'
		});
		$j('h2').css({
			color: 'blue'
		});

		return false;
	});

	// ::::::::::::::::::::::::::::::::::::::::::::::::::::
	var obj = {
		test: function() {
			console.log('Hello');
		}
	}
	
	// создаём обработчик произвольного события someEvent
	$j(obj).on('someEvent', function(){
		console.log('Good');
		this.test();
	});

	// инициируем событие someEvent
	$j(obj).trigger('someEvent');

	console.log(obj);

});

$j(function() {

	$('.class').on('click.a.b', function(){
		// для пространства имён a и b
	});
	// вызываем обработчик из пространства a
	$('.class').trigger('click.a');
	// отменяем обработчик click для пространства b
	$('.class').unbind('click.b');

});

$j(function() {
	// обработчик клика
	$('.class').on('click.namespace', function(){});
	// обработчик фокус
	$('.class').on('blur.namespace', function(){});
	// передумали, и все отменили
	$('.class').unbind('.namespace');
});

$j(function() {

});