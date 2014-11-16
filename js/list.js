
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
	remove: function() {},
	addColor: function() {},
	addSublist: function() {},
	filter: function() {}
};
List.prototype.constructor = List;
