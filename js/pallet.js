function Pallet(pal) {
	this.$pallet = $('.add_color');
	this.$newChoosedColor = $('.choosed_color');
}

Pallet.prototype = {
	show: function(eventObject) {
		$(eventObject).addClass('color_active');
		//$(eventObject)[0].innerText = 'Выбран цвет ▸';
		this.$pallet.show();
	},
	hide: function(eventObject, flag, choosedColor, colorClass) {
		if (flag) {
			$(eventObject)[0].innerText = 'Выбран цвет ▸';
			$(choosedColor).show().removeClass().addClass('choosed_color ' + colorClass);
		}
		else {
			$(eventObject).removeClass('color_active');
			this.$newChoosedColor.hide().removeClass().addClass('choosed_color');
		}
		this.$pallet.hide();
	},
	chooseColor: function() {}
};
Pallet.prototype.constructor = Pallet;