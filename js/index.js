$(document).ready(function() {
	var list = new List($('.list_elem'));
	var pallet = new Pallet($('.add_color'));
	var $choosedColor = $('.choosed_color');
	$choosedColor.hide();

	//событие добавления
	$('form').submit(function(eventObject) {
		eventObject.preventDefault();
		list.add();
	});

	//событие вычеркивания
	$('.list').on('click', '.list_elem', function(eventObject) {
		eventObject.stopPropagation();	
		var index = $('.list_elem').index(this);
		list.remove(eventObject, index);
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
		var parent = $('.button_color');
		var colorClass = eventObject.currentTarget.className.substring(11);
		pallet.hide(parent[0], 1, $choosedColor, colorClass);
	});

});
