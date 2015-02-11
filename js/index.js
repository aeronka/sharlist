
$(document).ready(function() {
	var pallet = new Pallet($('.add_color'));
	var legend = new Legend($('.legend'));
	var list = new List($('.list_elem'), legend);
	var $choosedColor = $('.choosed_color');
	var $buttonColor = $('.button_color');
	$choosedColor.hide();

	//событие добавления
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
			if ($choosedColor.css('background-color') === 'rgb(255, 255, 255)') {
				pallet.hide($('.button_color')[0], 2);
				list.addColor(eventObject, pallet.colorClass, index, 1);
			}
			else {
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
	$('.menu').on('click', '.button_color', function(eventObject) {
		if ($(eventObject.currentTarget).hasClass('color_active')) {
			pallet.hide(eventObject.currentTarget);
		}
		else {
			pallet.show(eventObject.currentTarget);
		}
	});

	//нажатие на цвет в палитре
	$('.menu_elem').on('click', '.color_elem', function(eventObject) {
		var parent = $buttonColor;
		var color = eventObject.currentTarget.className.substring(11);
		pallet.hide(parent[0], 1, $choosedColor, color);
	});

	//нажатие на "показать легенду"
	$('.menu').on('click', '.button_legend', function(eventObject) {
		if ($('.legend').is(':visible')) legend.hide(eventObject.currentTarget);
		else legend.show(eventObject.currentTarget);
	});

	//заполнение ФИО в легенде
		// 	var index = $('.legend_colors_elem').index(this);
	// 	legend.addColorName(eventObject, index);

	$('form', '.legend').submit(function(eventObject) {
		eventObject.stopPropagation();
		console.log(1);
	});



});
