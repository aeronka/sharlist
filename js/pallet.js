function Pallet(pal) {
	this.$pallet = pal;
	this.$newChoosedColor = $('.choosed_color');
	this.colorClass;
}

Pallet.prototype = {
	show: function(eventObject) {
		$(eventObject).addClass('color_active');
		this.$pallet.show();
	},
	hide: function(eventObject, flag, choosedColor, color) {
		this.colorClass = color;
		if (flag) {
			$(eventObject)[0].innerText = 'Выбран цвет ▸';
			$(choosedColor).show().removeClass().addClass('choosed_color ' + this.colorClass);
		}
		else {
			$(eventObject).removeClass('color_active');
			$(eventObject)[0].innerText = 'Выбрать цвет ▸';
			this.$newChoosedColor.hide().removeClass().addClass('choosed_color');
		}
		this.$pallet.hide();
	},
	chooseColor: function() {}
};
Pallet.prototype.constructor = Pallet;