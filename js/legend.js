function Legend(legend) {
	this.$legend = legend;
}

Legend.prototype = {
	createColor: function() {},
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