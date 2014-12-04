$(document).ready(function() {
	var list = new List($('.list_elem'));
	var pallet = new Pallet($('.add_color'));

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
	$('.button_color').click(function(eventObject) {
		if ($(eventObject.currentTarget).hasClass('color_active')) {
			pallet.hide(eventObject.currentTarget);
		}
		else {
			pallet.show(eventObject.currentTarget);
		}
	});

	//нажатие на цвет в палитре
	$('.color_elem').click(function() {
		var parent = $('.button_color');
		pallet.hide(parent[0], 1);
	});

});
