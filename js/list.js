
function List(elem, legend) {
	this.$tagList = $('.list');
	this.finalList = '';
	this.itog = [];
	this.$create = $('.new_elem');
	this.sublist = [];
	this.legend = legend;
	this.listColors = [];
	this.lastSublist = $('ul > .list_elem', 'ol > .list_elem:last');

	//сделаем список элементов
	elem.each( function(i,n) {
		this.itog.push(n.outerHTML);
	}.bind(this));

	//сделаем список цветов,которые есть в списке
	elem.children('div').each( function(i,n) {
		this.listColors.push(n.className.split(' ')[1]);
	}.bind(this));

	//подсписок последнего элемента (если есть)
	if (this.lastSublist) {
		this.lastSublist.each( function(i,n) {
			this.sublist.push(n.outerHTML);
		}.bind(this));
	}

}

List.prototype = {
	add: function() {
		//берем новый элемент из поля для ввода
		var newElem = this.$create.val();

		//проверяем пустой ли элемент хочет добавить пользователь и если нет, то добавляем в объект последним
		if (!newElem) return;

		//проверим первый символ из нового элемента, и является ли элемент началом подсписка
		if (newElem[0] === ' ') { console.log();
			if (!~this.itog[this.itog.length - 1].indexOf('ul')) this.sublist = []; 
			this.addSublist(newElem);
		}
		else {
			this.itog.push('<li class="list_elem"><div class="choice"> </div><span>'+ newElem +'</span></li>');
			//создадим пустое место под цвет нового элемента
			this.listColors.push('');
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
		var sublist = removedElem.currentTarget.parentElement.className;
		if (sublist !== 'sublist') {
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

	addColor: function(eventObject, colorClass, index, flag) {
		var item = $(eventObject.currentTarget);
		var colorBeforeChange = item.children('.choice')[0].className.split(' ')[1];
		var kolColor;
		var colorItem = item.children('.choice');
		// флаг не равен 1, добавляем или перезаписываем цвет элемента
		if (flag !== 1) {
			colorItem.removeClass(colorBeforeChange).addClass(colorClass);

			// в массив цветов списка в элемент с индексом index вставить/ заменить новый цвет
			this.listColors[index] = colorClass;
			this.itog[index] = item[0].outerHTML;
		}
		// флаг равен 1, удаление цвета у элемента
		else {
			colorItem.removeClass(colorBeforeChange);
			this.itog[index] = item[0].outerHTML;

			//удаление цвета с номером  index из массива цветов списка, специально с дыркой, чтобы понимать что у элемента списка с таким же индексом нет цвета
			this.listColors[index] = '';
		}

		// добавление/удаление цвета из легенды
			//если количество классов у элемента списка 2
		if (colorItem[0].className.split(' ').length === 2) {
			//и если в итоговом массиве легенды еще нет такого цвета - добавим
			if (!~this.legend.itogLegendColor.indexOf(colorClass)) this.legend.createColor(colorClass);	
		}
			//если у элемента только один класс (choice), значит было удаление цвета и нужно проверить последний ли он, если да, то удалить из легенды, если нет, то ничего не делать
		else {
			kolColor = 0;
			for (var i = 0; i < this.listColors.length; i++) {
				if (this.listColors[i] === colorBeforeChange) kolColor += 1;
			};
			if (kolColor === 0) this.legend.deleteColor(colorBeforeChange);
		}
	},

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
