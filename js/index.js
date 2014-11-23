$(document).ready(function() {
	var list = new List($('.list_elem'));

	//событие добавления списка/подсписка
	$('form').submit(function(event) {
		event.preventDefault();
		list.add();
	});

	//событие вычеркивания для списка
	$('.list').on('click', '.list_elem', function(eventObject) {
		var g = $('.list_elem');
		var index = g.index(this);
		console.log(g);
		list.remove(eventObject, index);
		
	});

	//фильтр списка
	$('.tumbler').on('click', 'input:radio', function(eventObject) {
		list.filter(eventObject);
	});

});