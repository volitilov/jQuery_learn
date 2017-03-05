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

	$j('.class').on('click.a.b', function(){
		// для пространства имён a и b
	});
	// вызываем обработчик из пространства a
	$j('.class').trigger('click.a');
	// отменяем обработчик click для пространства b
	$j('.class').unbind('click.b');

});

$j(function() {
	// обработчик клика
	$j('.class').on('click.namespace', function(){});
	// обработчик фокус
	$j('.class').on('blur.namespace', function(){});
	// передумали, и все отменили
	$j('.class').unbind('.namespace');
});

$j(function() {
	$j('form').submit(function(){
		// чистим ошибки
		$j(this).find('.error').remove();
		// проверяем поля формы
		if ($j(this).find('input[type=name]').val() == '') {
			$j(this).find('input[name=user]')
					.before('<div class="error">Введите имя</div>');
			return false;
		}
		// всё хорошо – отправляем запрос на сервер
		$j.post(
			$j(this).attr('action'), // ссылка куда отправляем данные
			$j(this).serialize() // данные формы
		);
		return false;
	});
});