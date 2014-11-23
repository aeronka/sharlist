
function List(elem) {
	this.$tagList = $('.list');
	this.finalList = '';
	this.itog = [];
	this.$create = $('.new_elem');
	this.sublist = [];

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

		//проверим первый символ из нового элемента
		if (newElem[0] === ' ') this.addSublist(newElem);
		else {
			this.itog.push('<li class="list_elem"><div> </div><span>'+ newElem +'</span></li>');

			//склеим в строку все элементы списка
			this.finalList = this.itog.join('');

			//обновленный список добавим на страницу
			$('ol', this.$tagList).detach();
			this.$tagList.prepend('<ol>'+ this.finalList +'</ol>');
			this.$create.val('').focus();
		}
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
	addSublist: function(newElemAll) { 
		//убираем пробел от элемента подсписка
		var newElem = newElemAll.substring(1);
		var finalSublist = '';
		this.sublist.push('<li class="list_elem">'+ newElem +'</li>');
		//склеим в строку все элементы подсписка
		finalSublist = '<ul class="sublist">' + this.sublist.join('') + '</ul>';

		//номер последнего эл-та в списке
		var lastElemNom = this.itog.length - 1;

		//сам элемент, которому создаётся подсписок
		var listElemSublist = this.itog[lastElemNom];
		var numEnd;
		// проверка первый ли элемент в подсписке
		if (this.sublist.length === 1) numEnd = listElemSublist.indexOf('</li>');
		else numEnd = listElemSublist.indexOf('</span><ul') + 7;

		//перезапишем последний элемет добавив подсписок
		this.itog[lastElemNom] = listElemSublist.substring(0, numEnd) + finalSublist + '</li>';

		//склеим в строку все элементы списка
		this.finalList = this.itog.join('');

		//обновленный список добавим на страницу
		$('ol', this.$tagList).detach();
		this.$tagList.prepend('<ol>'+ this.finalList +'</ol>');
		this.$create.val('').focus();
	},
	filter: function(eventObject) {
		var item = eventObject.currentTarget;
		var removedElem = $('.removed', 'ol');
		console.log(item.value);
		console.log(removedElem);
		if (item.value === 'remaining')
			{
				removedElem.hide();
			}
		else {
				removedElem.show();
			}
	}
};
List.prototype.constructor = List;
