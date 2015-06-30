$(function() {

var $newItemField = $("#newItemField")
var $newItems = $("#newItems")
var $newItemsSubmit = $('#newItemsSubmit')
var $shitToDo = $("#shitToDo")
var $addedItems = $(".added-Items")
var $newItemDesc = $("#newItemDesc")
var $newItemDate = $("#newItemDate")
var todaysDate = new Date();





$.fn.clearForm = function() {
 return this.each(function() {
   var type = this.type, tag = this.tagName.toLowerCase();
   if (tag == 'form')
     return $(':input',this).clearForm();
   if (type == 'text' || type == 'password' || tag == 'textarea')
     this.value = '';
   else if (type == 'checkbox' || type == 'radio')
     this.checked = false;
   else if (tag == 'select')
     this.selectedIndex = -1;
 });
};

$newItemField.on("submit", function(event) {
	event.preventDefault();
	$shitToDo.append("<li class='added-Items'>" + "Task: " + $newItems.val() + "<hr>" + "<p>" + 
		"Description: " + $newItemDesc.val() + "</p>" +  "<hr>" + "<p>" + "Due Date: " + 
		$newItemDate.val() + "</p>" + "</li>" + "<hr>");
	$('.form-control').clearForm();
	$("li").on("click", function(event) {
		event.preventDefault();
		$(this).wrap("<strike class='done'>")
		$(this).fadeOut("slow");
	});		var todaysDate = new Date();
	if ($newItemDate.val() > todaysDate) {
		$newItemDate.css("color", "red");
	};


	

		


});
});





















