// check off specific todos by clicking

$("ul").on("click", "li", function() {
	// if li is gray turn it black
	// else turn it gray
	$(this).toggleClass("completed");
});

//click on X to delete Todo

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which == 13) {
		// grabbing new todo text from input
		var todoText= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$("#addBtn").click(function() {
	var todoText= $("input[type='text'").val();
	$("input[type='text'").val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
});

$("h1 .fa").click(function() {
	$(".inputLine").fadeToggle(500, function() {
		$("h1 .fa").toggleClass("fa-minus");
		$("h1 .fa").toggleClass("fa-plus");
	});
});