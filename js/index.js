$(document).ready(function() {
	var list = new List($('.list_elem'));

	//событие добавления
	$('form').submit(function(event) {
		event.preventDefault();
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

});
