function Legend(legend) {
	this.$legend = legend;
	this.itogLegend = [];
	this.finalListLegend = '';
	this.$tagLegend = $('.legend');
	this.itogLegendColor = [];

	//сделаем список элементов легенды
	$('.legend_colors_elem').each( function(i,n) {
		this.itogLegend.push(n.outerHTML);
	}.bind(this));
	//сделаем список цветов,которые есть в легенде
	$('.legend_choice').each( function(i,n) {
		this.itogLegendColor.push(n.className.split(' ')[1]);
	}.bind(this));
}

Legend.prototype = {
	createColor: function(newColor) {
		this.itogLegend.push('<li class="legend_colors_elem"><span class="legend_choice ' + newColor + '"></span><input class="legend_fio" type="text" placeholder="фио"></li>');
		this.itogLegendColor.push(newColor);
		//склеим в строку все элементы легенды
		this.finalListLegend = this.itogLegend.join('');
		//обновленную легенду добавим на страницу
		$('ul', this.$tagLegend).detach();
		this.$tagLegend.append('<ul class="legend_colors">'+ this.finalListLegend +'</ul>');
	},

	deleteColor: function(delColor) {
		var indexLegendItem = 0;
		//удаление элемента списка цветов из легенды (необходим номер элемента indexLegendItem)
		for (var i = 0; i < this.itogLegend.length; i++) {
			// нужно в массиве элементов легенды найти элемент,который содержит в себе удаляемый цвет, узнать его индекс
			if (~this.itogLegend[i].indexOf(delColor)) indexLegendItem = i;
		};
		//удаление элемента из массива легенды
		this.itogLegend.splice(indexLegendItem, 1);
		//удаление цвета из массива цветов легенды
		for (var i = 0; i < this.itogLegendColor.length; i++) {
			if (this.itogLegendColor[i] === delColor) this.itogLegendColor.splice(i, 1);
		};
		//склеим в строку все элементы легенды
		this.finalListLegend = this.itogLegend.join('');
		//обновленную легенду добавим на страницу
		$('ul', this.$tagLegend).detach();
		this.$tagLegend.append('<ul class="legend_colors">'+ this.finalListLegend +'</ul>');
	},

	addColorName: function() {},

	hide: function(eventObject) {
		this.$legend.hide();
		$(eventObject)[0].innerText = 'Показать легенду';
	},

	show: function(eventObject) {
		this.$legend.show();
		$(eventObject)[0].innerText = 'Скрыть легенду';
	}
};
Legend.prototype.constructor = Legend;