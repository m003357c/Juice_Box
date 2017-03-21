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

//Function to show the drinks information when clicked
var drinkClicked = document.getElementsByClassName("drink-option");

var showDrinkInfo = function() {

    var drinkID = this.id;
	
    switch (drinkID) {
        case "citrus-punch":
            var showProduct = document.getElementById("citrusProdInfo");
			showProduct.classList += " isShowing";
        break;
        case "berry-blast":
            var showProduct = document.getElementById("berryProdInfo");
			showProduct.classList += " isShowing";
        break;
        case "green-machine":
            var showProduct = document.getElementById("greenProdInfo");
			showProduct.classList += " isShowing";
            break;
        case "simply-red":
            var showProduct = document.getElementById("redProdInfo");
			showProduct.classList += " isShowing";
    };
    
    var blurMenu = document.getElementById("menuItems");
    var blurText = document.getElementsByTagName("H1");
    blurMenu.className += " blur";
    blurText.className += " blur";
    
};

for (var i = 0; i < drinkClicked.length; i++) {
    drinkClicked[i].addEventListener('click', showDrinkInfo, false);
};

//Code to remove the product information when button is clicked
function removeProductInfo(){	
	var node = document.getElementById('hiddenProdInfo');
	var nodeChild = document.getElementById('productInfo');
	node.removeChild(nodeChild);

	document.getElementById("menuItems").className = document.getElementById("menuItems").className.replace( /(?:^|\s)blur(?!\S)/g , '' );
};

var closingButton = document.getElementById("closeButton");

closingButton.addEventListener('click', removeProductInfo);


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

  var target = document.getElementById("basket");

  target.innerHTML = target.innerHTML + template;
});
