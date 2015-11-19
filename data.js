var data = {};

data.list = {
    list_name: 'В путь:',
    url: 'http://sharlist.ru/uzupg6tw/'
};

data.list_item = {
    list_items: [
        {
            item: 'Палатка',
            color: 'purple'
        },
        {
            item: 'Спальник',
            color: 'green',
            sublist: {sublist_items: [
		        	{
		            	item: 'спальник Артёма',
		            	iditemlist: '2'
		        	},
		        	{
		            	item: 'спальник Натуса',
		            	iditemlist: '2'
		        	}
	    		]
	    	}
        },
        {
            item: 'Зарядки для устройств',
            color: 'green',
            sublist: {sublist_items: [
		        	{
		            	item: 'зарядка для плеера',
		            	iditemlist: '2'
		        	},
		        	{
		            	item: 'зарядка для телефона и планшета',
		            	iditemlist: '2'
		        	}
	    		]
	    	}
        }
    ]
};

data.legend = {
	legend_items: [
		{
			personname: 'Пётр Васильев',
			color: 'purple'
		},
		{
			personname: 'Василий Прекрасный',
			color: 'green'
		}
	]
};
