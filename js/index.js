
$(document).ready(function() {
	var pallet = new Pallet($('.add_color'));
	var legend = new Legend($('.legend'));
	var list = new List($('.list_elem'), legend);
	var $choosedColor = $('.choosed_color');
	var $buttonColor = $('.button_color');

	//событие добавления элемента списка
	$('form', '.list').submit(function(eventObject) {
		eventObject.preventDefault();
		list.add();
	});

	//событие нажатия на элемент списка (вычеркивание и добавление цвета)
	$('.list').on('click', '.list_elem', function(eventObject) {
		eventObject.stopPropagation();
		var index = $('.list_elem').index(this);
		if ($buttonColor.hasClass('color_active')) {
			// добавление цвета
			// если выбранный цвет белый, то флаг = 1 - это удаление цвета
			if ($choosedColor.css('background-color') === 'rgb(255, 255, 255)') {
				pallet.hide($($('.button_color')[0]), 2);
				list.addColor(eventObject, pallet.colorClass, index, 1);
			}
			else {
			// если цвет выбран из палитры и не белый, то флаг = 0 - необходимо добавить цвет элементу, или заменить существующий
				list.addColor(eventObject, pallet.colorClass, index, 0);
			}
		}
		else {
			// вычеркивание
			list.remove(eventObject, index);
		}
	});

	//фильтр списка
	$('.tumbler').on('click', 'input:radio', function(eventObject) {
		list.filter(eventObject);
	});

	//нажатие кнопки "Выбрать цвет"
	$('.button_color').on('click', function(eventObject) {
		if ($(eventObject.currentTarget).hasClass('color_active')) {
			pallet.hide($(eventObject.currentTarget));
		}
		else {
			pallet.show(eventObject.currentTarget);
		}
	});

	//нажатие на цвет в палитре
	$('.menu_elem').on('click', '.color_elem', function(eventObject) {
		var parent = $buttonColor[0];
		var color = eventObject.currentTarget.className.split(' ')[1];
		pallet.hide($(parent), 1, $choosedColor, color);
	});

	//нажатие на "показать легенду"
	$('.button_legend').on('click', function(eventObject) {
		if ($('.legend').is(':visible')) legend.hide(eventObject.currentTarget);
		else legend.show(eventObject.currentTarget);
	});

	//заполнение ФИО в легенде
	$('.legend').on('submit', 'form', function(eventObject) {
		eventObject.preventDefault();
		var index = $('form', '.legend').index(this);
		legend.addColorName(eventObject, index);
	});



});
