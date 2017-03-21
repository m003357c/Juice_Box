//JS file for Juice Box
// Drink JS Objects
var citrusPunch = {
    name:"Citrus Punch",
    image:"citrus",
    ingredients:"Grapefruit, Orange &amp; Pineapple",
    description:"Grapefruit, Orange &amp; Pineapple",
    price:"&pound;2.50",
    drinkClass:"citrus-blast"
};
var berryBlast = {
    name:"Berry Blast",
    image:"berry",
    ingredients:"Apple, Grape, Blueberry<br>&amp; Raspberry",
    description:"Apple, Grape, Blueberry &amp; Raspberry",
    price:"&pound;2.50",
    drinkClass:"berry-blast"
};
var greenMachine = {
    name:"Green Machine",
    image:"green",
    ingredients:"Apple, Banana, Avocado,<br>Kiwi &amp; Lime",
    description:"Apple, Banana, Avocado, Kiwi &amp; Lime",
    price:"&pound;2.50",
    drinkClass:"green-machine"
};
var simplyRed = {
    name:"Simply Red",
    image:"red",
    ingredients:"Apple, Grape, Strawberry<br>&amp; Cherry",
    description:"Apple, Grape, Strawberry &amp; Cherry",
    price:"&pound;2.50",
    drinkClass:"simply-red"
};
// JS arrays to emulate orders for now
var drinks = [citrusPunch, greenMachine, berryBlast, simplyRed];

var basket = [greenMachine, berryBlast];

$(document).ready(function(){
	
//Function to show the drinks information when clicked
$(".drink-option").click(function(){
	
	var drinkID = this.id;
	
	switch (drinkID) {
		case "citrus-punch":
			$("#citrusProdInfo").addClass("isShowing");
		break;
		case "berry-blast":
		    $("#berryProdInfo").addClass("isShowing");
		break;
		case "green-machine":
		    $("#greenProdInfo").addClass("isShowing");
		    break;
		case "simply-red":
            $("#redProdInfo").addClass("isShowing");
	};
	
	$(".menuItems, h1").toggleClass("blur");
	
});

$(".close-btn").click(function(){

	$(this).parent().toggleClass("isShowing");
});
	

//Code to remove the product information when button is clicked
/*function removeProductInfo(){	
	document.getElementById('closeButton').className = document.getElementById("closeButton").className.replace( /(?:^|\s)isShowing(?!\S)/g , '' );
	document.getElementById("menuItems").className = document.getElementById("menuItems").className.replace( /(?:^|\s)blur(?!\S)/g , '' );
};

var closingButton = document.getElementById("closeButton");

closingButton.addEventListener('click', removeProductInfo);*/


//Append the amount in the basket and total price to page
var basketAmount = document.getElementsByClassName("basket-items");
var basketArrayLength = basket.length;
basketAmount.innerHTML = basketArrayLength;

var basketPrice = document.getElementsByClassName("basket-price");
var basketTotalPrice = basket.length * 5;
basketAmount.innerHTML = "&pound;" + basketTotalPrice;

//JS template for outputting basket items to page
basket.forEach(function(item) {

  var drinkName = item.name,
      drinkImage = item.image,
      drinkIngred = item.ingredients,
      drinkPrice = item.price,
      drinkClass = item.drinkClass;

  var template = '<article class="basket-item ' + drinkClass + '">' +
                   '<span><img src="assets/images/basket-' + drinkImage + '.svg" alt="' + drinkName + ' Ingrediant Image"></span>' +
                   '<span>' + drinkName + '<br><small>' + drinkIngred + '</small></span>' +
                   '<span class="price">' + drinkPrice + '</span>' +
                   '<a class="remove-basket" href="#">x</a>' +
                   '<br class="clear">' +
                 '</article>';

  template.appendTo("#basket");
});

});

