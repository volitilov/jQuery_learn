// jQuery api ::::::::::::::::::::::::::::::::::::::::::::
// search elements in DOM ::::::::::::::::::::::::::::::::

$j('p').parent()
// родитель элемента

$j('p').parents()
// родители элемента

$j('p').parentsUntil('.home') 
// получить родителей элемента пока не встретится
// класс .home

console.log(a);
// вывесть в консоль браузера

$("#content")
// элемент с id=content

$("div#content")
// выбираем div с id=content (хотя id и так однозначен)

$(".wrapper")
// элементы с class=wrapper

$("div.wrapper")
// div'ы с class=wrapper

$(".wrapper.box")
// элементы с class=wrapper и box

$("h2")
// все теги h2

$("h1, h2")
// все теги h1 и h2

$("article h2")
// выбираем все теги h2 внутри тега article

$("div article h2")
// выбираем все теги h2 внутри тега article
// внутри тега div, в доме который построил Джек

$("h1 + h2")
// выбор всех h2 элементов, перед которыми идут h1
// элементы (у нас только один такой)

$("#stick ~ article")
// выбор всех article элементов после элемента
// c id=stick

$("#stick").prev()
// выбор предыдущего элемента от найденного

$("#stick").next()
// выбор следующего элемента от найденного

$("*")
// выбор всех элементов

$("article > h2")
// выбираем все теги h2 которые являются
// непосредственными потомками тега article

$("article > *")
// выбор всех потомков элементов p

$("p").parent()
// выбор всех прямых предков элементов p

$("p").parents()
// выбор всех предков элементов p (не понадобится)

$("p").parents("div") 
// выбор всех предков элемента p которые есть div
// parents принимает в качестве параметра селектор

$("a[href^=\\/]").addClass("internal")
// в селекторах необходимо экранировать специальные 
// символы используя обратный слеш «\\»


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Methods ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// css methods ::::::::::::::::::::::::::::::::::::::::::::::::::::::
css(property)
// получение значения CSS свойства

css(property, value)
// установка значения CSS свойства

css({key: value, key:value})
// установка нескольких значений

css(property, function(index, value) { return value })
//тут для установки значения используется функция обратного вызова,
// index это порядковый номер элемента в выборке, value —
// старое значение свойства (в просторечии — callback-функция)

addClass(className)
// добавление класса элементу

addClass(function(index, currentClass){ return className })
// добавление класса используя функцию обратного вызова

hasClass(className)
// проверка на причастность к определённому классу

removeClass(className)
// удаление класса

removeClass(function(index, currentClass){ return className })
// удаление класса используя функцию обратного вызова

toggleClass(className)
// переключение класса

toggleClass(className, switch)
// переключение класса по флагу switch

toggleClass(function(index, currentClass, switch){ return className }, switch)
// переключение класса используя функцию обратного вызова

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

attr(attrName)
// получение значения атрибута

attr(attrName, attrValue)
// установка значения атрибута (также можно использовать hash,
// либо функцию обратного вызова)

removeAttr(attrName)
// удаление атрибута

var altText = $('img').attr('alt')
// получение альтернативного текста картинки

$('img').attr('src', '/images/default.png')
// изменение адреса картинки

// работаем со ссылками
$('a#my').attr({
	'href':'http://anton.shevchuk.name',
	'title':'My Personal Blog',
});

prop(propName)
// получение значения свойства

prop(propName, propValue)
// установка значения свойства (также можно использовать 
// hash, либо функцию обратного вызова)

removeProp(propName)
// удаление свойства (скорей всего никогда не понадобится)


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Events ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

change
// изменение значения элемента (значение, при потери фокуса, элемента
// отличается от изначального, при получении фокуса)

click
// клик по элементу (порядок событий: mousedown, mouseup, click)

dblclick
// двойной щелчок мышки
resize
// изменение размеров элементов

scroll
// скроллинг элемента

select
// выбор текста (актуален только для input[type=text] и textarea )

submit
// отправка формы

focus
// фокус на элементе - актуально для input[type=text] , 
// но в современных браузерах работает и с другими элементами

blur
// фокус ушёл с элемента — актуально для input[type=text] — 
// срабатывает при клике по другому элементу на странице или по 
// событию клавиатуры (к примеру переключение по tab'у)

focusin
// фокус на элементе, данное событие срабатывает на предке элемента,
// для которого произошло событие focus

focusout
// фокус ушёл с элемента, данное событие срабатывает на предке
// элемента, для которого произошло событие blur

keydown
// нажатие клавиши на клавиатуре

keypress
// нажатие клавиши на клавиатуре ( keydown → keypress → keyup )

keyup
// отжатие клавиши на клавиатуре

load
// загрузка элемента (например img )

unload
// выгрузка элемента (например window )

mousedown
// нажатие клавиши мыши

mouseup
// отжатие клавиши мыши

mousemove
// движение курсора

mouseenter
// наведение курсора на элемент, не срабатывает при переходе 
// фокуса на дочерние элементы

mouseleave
// вывод курсора из элемента, не срабатывает при переходе 
// фокуса на дочерние элементы

mouseover
// наведение курсора на элемент

mouseout
// вывод курсора из элемента


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Обработчики ::::::::::::::::::::::::::::::::::::::::::::::::::::::

// вешаем обработчик
$('.class').on('click', function(){
	// что-то делаем
});

// вызываем обработчик
$('.class').trigger('click');

// отключаем обработчик
$('.class').unbind('click');


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Animation :::::::::::::::::::::::::::::::::::::::::::::::::::::::
// скорость :::: slow ::: fast ::: 400 

$('img').hide('slow')
// скроем все картинки

$('img').show(400)
// теперь вернём их на место

$('ex').toggle()
// он работает как переключатель hide → show или show → hide

slideUp()

slideDown()

slideToggle()
