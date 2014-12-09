
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

		//проверим первый символ из нового элемента, и является ли элемент началом подсписка
		if (newElem[0] === ' ') { 
			if (!~this.itog[this.itog.length - 1].indexOf('ul')) this.sublist = []; 
			this.addSublist(newElem);
		}
		else {
			this.itog.push('<li class="list_elem"><div> </div><span>'+ newElem +'</span></li>');

			//склеим в строку все элементы списка
			this.finalList = this.itog.join('');
		}
			//обновленный список добавим на страницу
			$('ol', this.$tagList).detach();
			this.$tagList.prepend('<ol>'+ this.finalList +'</ol>');
			this.$create.val('').focus();
		
	},

	remove: function(removedElem, index) {
		var item = $(removedElem.currentTarget);
		var child = $('.list_elem', item);
		//проверка на подсписок (элемент относится к подсписку или нет)
		var sublist = !!removedElem.currentTarget.parentElement.className;
		if (!sublist) {
			if (item.hasClass('removed')) {
				item.removeClass('removed');
				child.removeClass('removed');
			}
			else {
				item.addClass('removed');
				child.addClass('removed');
			}
		}
		else {
			if (!item.parents('.list_elem').hasClass('removed')) {
				if (item.hasClass('removed')) {
					item.removeClass('removed');
				}
				else {
					item.addClass('removed');
				}
			}
		}
		this.itog[index] = item[0].outerHTML; 
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
		else numEnd = listElemSublist.indexOf('</span>') + 7;

		//перезапишем последний элемет добавив подсписок
		this.itog[lastElemNom] = listElemSublist.substring(0, numEnd) + finalSublist + '</li>';

		//склеим в строку все элементы списка
		this.finalList = this.itog.join('');
	},

	filter: function(eventObject) {
		var item = eventObject.currentTarget;
		var removedElem = $('.removed', 'ol');
		var newElem = $('.new_elem', '.list');
		if (item.value === 'remaining')
			{
				removedElem.hide();
				newElem.hide();
			}
		else {
				removedElem.show();
				newElem.show();
			}
	}
};
List.prototype.constructor = List;
