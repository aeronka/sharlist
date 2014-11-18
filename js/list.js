
function List(elem) {
	this.$tagList = $('.list');
	this.finalList = '';
	this.itog = [];
	this.$create = $('.new_elem');

	//сделаем чистый список элементов
	elem.each( function(i,n) {
		this.itog.push(n.outerHTML);
	}.bind(this));
} 

List.prototype = {
	add: function() {
		//взяли новый элемент из поля для ввода
		var newElem = this.$create.val();

		//проверяем пустой ли элемент хочет добавить пользователь и если нет, то добавляем в объект последним
		if (!newElem) return;
		this.itog.push('<li class="list_elem"><div> </div><span>'+ newElem +'</span></li>');

		//склеим в строку все элементы списка
		this.finalList = this.itog.join('');

		//обновленный список добавим на страницу
		$('ol', this.$tagList).detach();
		this.$tagList.prepend('<ol>'+ this.finalList +'</ol>');
		this.$create.val('').focus();
	},
	remove: function(removedElem, index) {
		var item = $(removedElem.currentTarget);
		if (item.hasClass('removed')) 
			{
				item.removeClass('removed');
			}
		else {
				item.addClass('removed');
			}
		for (var i = 0; i < this.itog.length; i++) {
			if (index === i) this.itog[i] = item[0].outerHTML; 
		};
	},
	addColor: function() {},
	addSublist: function() {},
	filter: function(eventObject) {
		var item = eventObject.currentTarget;
		var removedElem = $('.removed', 'ol');
		console.log(item.value);
		console.log(removedElem);
		if (item.value = 'all') 
			{
				removedElem.show();
			}
		else {
				removedElem.hide();
			}
	}
};
List.prototype.constructor = List;
