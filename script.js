$(function() {

var $newItemField = $("#newItemField")
var $newItems = $("#newItems")
var $newItemsSubmit = $('#newItemsSubmit')
var $shitToDo = $("#shitToDo")
var $addedItems = $(".added-Items")
var $newItemDesc = $("#newItemDesc")

$newItemField.on("submit", function(event) {
	event.preventDefault();
	$shitToDo.append("<li class='added-Items'>" + "Task: " + $newItems.val() + "<hr>" + "<p>" + "Description: " + $newItemDesc.val() + "</p>" + "</li>" + "<hr>");
	$("li").on("click", function(event) {
		event.preventDefault();
		$(this).wrap("<strike>")
		$(this).fadeOut("slow");
	});
	
		
	});

});






















