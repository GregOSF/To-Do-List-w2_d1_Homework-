$(function() {

var $newItemField = $("#newItemField")
var $newItems = $("#newItems")
var $newItemsSubmit = $('#newItemsSubmit')
var $shitToDo = $("#shitToDo")
var $addedItems = $(".added-Items")
var $newItemDesc = $("#newItemDesc")
var $newItemDate = $("#newItemDate")
var hardCodedItems = [{name: "Drink", description: "beer"}, {name: "Eat", description: "pizza"},
					 {name: "Watch", description: "tv"}];





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

/*for (i = 0; i < hardCodedItems.length; i++) {
	$shitToDo.append("<li class='added-Items'>" + "Task: " + hardCodedItems[i].name + "<hr>" + "<p>" + 
		"Description: " + hardCodedItems[i].description + "</p>" +  "<hr>" + "</li>" + "<hr>");
};*/

var tasksTemplate = _.template($('#tasksTemplate').html());


_.each(hardCodedItems, function(hardCodedItems, index) {
	var $hardCodedItems = $(tasksTemplate(hardCodedItems));
	$shitToDo.append($hardCodedItems);
});


/*_.each(hardCodedItems, function(hardCodedItem, index) {*/

$newItemField.on("submit", function(event) {
	event.preventDefault();
	$shitToDo.append("<li class='added-Items'>" + "Task: " + $newItems.val() + "<hr>" + "<p>" + 
		"Description: " + $newItemDesc.val() + "</p>" +  "<hr>" + "</li>" + "<hr>");
	$('.form-control').clearForm();
	$("li").on("click", function(event) {
		event.preventDefault();
		$(this).wrap("<strike class='done'>")
		$(this).fadeOut("slow");
	});
});		


	

		


});





















