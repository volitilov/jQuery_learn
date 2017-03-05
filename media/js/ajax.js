var $j = jQuery.noConflict();

$j(function() {
	// в элемент с id=content будет вставлен весь HTML с указанной страницы
	$j( "#content" ).load( "/get-my-page.html" );
	// в элемент с id=content будет вставлен HTML с указанной страницы
	// выбранный по указанному селектору #wrapper
	$j("#content").load("/get-my-page.html #wrapper");
	// передаем данные на сервер
	$j("#content").load("/get-my-page.html", {id:18});
	
	// обрабатываем полученные данные
	$j("#content").load("/get-my-page.html", function(){
		alert("Ничего оригинальней не придумал");
	});
});

$j(function() {
	$j("#loading").bind("ajaxSend", function(){
		$j(this).show(); // показываем элемент
	}).bind("ajaxComplete", function(){
		$j(this).hide(); // скрываем элемент
	});
});

$j(function() {
	$j.ajax({
		beforeSend: function(){
		// данный обработчик будет вызван
		// перед отправкой данного AJAX запроса
		},
		success: function(){
		// а этот при удачном завершении
		},
		error: function(){
		// этот при возникновении ошибки
		},
		complete: function(){
		// и по завершению запроса (удачном или нет)
		}
	});
});

$j(function() {
	$j.ajax({
		url: "http://domain.com/getUsers/?callback=?", // указываем URL
		dataType: "jsonp",
		success: function (data) {
		// обрабатываем данные
		}
	});
});

$j(function() {
	
});