function Pallet(pal) {
	this.$pallet = $('.add_color');
}

Pallet.prototype = {
	show: function(eventObject) {
		$(eventObject).addClass('color_active');
		//$(eventObject)[0].innerText = 'Выбран цвет ▸';
		this.$pallet.show();
	},
	hide: function(eventObject, flag) {
		$(eventObject).removeClass('color_active');
		this.$pallet.hide();
		if (flag) $(eventObject)[0].innerText = 'Выбран цвет ▸';
	},
	chooseColor: function() {}
};
Pallet.prototype.constructor = Pallet;