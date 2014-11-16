$(document).ready(function () {
	var list = new List($(".list_elem"));

	$("form").submit(function(event) {
		event.preventDefault();
		list.add();
	});

});