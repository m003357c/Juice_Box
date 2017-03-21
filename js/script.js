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
            var template =  '<article class="product-information citrus-punch">' +
			    '<a href="#" class="btn close-btn">x</a>' +
                            '<img src="assets/images/prod-citrus.svg" alt="Citrus Punch ingredient cup">' +
                            '<p class="btn-holder"><a href="#" class="btn add-cart-btn">Add to<br>cart</a><a href="#" class="btn buy-now-btn">Vend<br>now</a></p>' +
                            '<div class="info-holder">' +
                               '<h2>Citrus Punch - &pound;5</h2>' +
                                '<p class="product-info">Grapefruit, Orange &amp; Pineapple</p>' +
                                '<p class="nurti-prompt">^ Scroll for nutrition &amp; allergy info ^</p>' +
                                '<div class="nutri-table">' +
                                    '<table>' +
                                       ' <tbody><tr>' +
                                           '<th></th>' +
                                           '<th>per serving (250ml)</th>' +
                                       '</tr>' +
                                        '<tr>' +
                                            '<td>Energy</td>' +
                                            '<td>567.5kj (135.6kcal)</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>Sugar</td>' +
                                            '<td>27g</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>Fat</td>' +
                                            '<td>0g</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>Carbohydrates</td>' +
                                            '<td>30g</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<td>Fibre</td>' +
                                            '<td>3.5g</td>' +
                                        '</tr>' +
                                    '</tbody></table>' +
                                '</div>' +
                            '</div>' +
                        '</article>';
            var target = document.getElementById("hiddenProdInfo");
            target.innerHTML =  template;
        break;
        case "berry-blast":
            var template =    '<article class="product-information berry-blast">' +
							  '<a href="#" class="btn close-btn">x</a>' +
                              '<img src="assets/images/prod-berry.svg" alt="Berry Blast ingredient cup">' +
                              '<p class="btn-holder"><a href="#" class="btn add-cart-btn">Add to<br>cart</a><a href="#" class="btn buy-now-btn">Vend<br>now</a></p>' +
                              '<div class="info-holder">' +
                                 '<h2>Berry Blast - &pound;5</h2>' +
                                  '<p class="product-info">Apple, Grape, Blueberry &amp; Raspberry</p>' +
                                  '<p class="nurti-prompt">^ Scroll for nutrition &amp; allergy info ^</p>' +
                                  '<div class="nutri-table">' +
                                      '<table>' +
                                         ' <tbody><tr>' +
                                             '<th></th>' +
                                             '<th>per serving (250ml)</th>' +
                                         '</tr>' +
                                          '<tr>' +
                                              '<td>Energy</td>' +
                                              '<td>567.5kj (135.6kcal)</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Sugar</td>' +
                                              '<td>27g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fat</td>' +
                                              '<td>0g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Carbohydrates</td>' +
                                              '<td>30g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fibre</td>' +
                                              '<td>3.5g</td>' +
                                          '</tr>' +
                                      '</tbody></table>' +
                                  '</div>' +
                              '</div>' +
                          '</article>';
            var target = document.getElementById("hiddenProdInfo");
            target.innerHTML =  template;
        break;
        case "green-machine":
            var template =    '<article class="product-information green-machine">' +
							  '<a href="#" class="btn close-btn">x</a>' +
                              '<img src="assets/images/prod-green.svg" alt="Green Machine ingredient cup">' +
                              '<p class="btn-holder"><a href="#" class="btn add-cart-btn">Add to<br>cart</a><a href="#" class="btn buy-now-btn">Vend<br>now</a></p>' +
                              '<div class="info-holder">' +
                                 '<h2>Green Machine - &pound;5</h2>' +
                                  '<p class="product-info">Apple, Banana, Avocado, Kiwi &amp; Lime</p>' +
                                  '<p class="nurti-prompt">^ Scroll for nutrition &amp; allergy info ^</p>' +
                                  '<div class="nutri-table">' +
                                      '<table>' +
                                         ' <tbody><tr>' +
                                             '<th></th>' +
                                             '<th>per serving (250ml)</th>' +
                                         '</tr>' +
                                          '<tr>' +
                                              '<td>Energy</td>' +
                                              '<td>567.5kj (135.6kcal)</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Sugar</td>' +
                                              '<td>27g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fat</td>' +
                                              '<td>0g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Carbohydrates</td>' +
                                              '<td>30g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fibre</td>' +
                                              '<td>3.5g</td>' +
                                          '</tr>' +
                                      '</tbody></table>' +
                                  '</div>' +
                              '</div>' +
                          '</article>';
                var target = document.getElementById("hiddenProdInfo");
                target.innerHTML =  template;
            break;
        case "simply-red":
            var template =    '<article class="product-information simply-red">' +
							  '<a href="#" class="btn close-btn">x</a>' +
                              '<img src="assets/images/prod-red.svg" alt="Simply Red ingredient cup">' +
                              '<p class="btn-holder"><a href="#" class="btn add-cart-btn">Add to<br>cart</a><a href="#" class="btn buy-now-btn">Vend<br>now</a></p>' +
                              '<div class="info-holder">' +
                                 '<h2>Simply Red - &pound;5</h2>' +
                                  '<p class="product-info">Apple, Grape, Strawberry &amp; Cherry</p>' +
                                  '<p class="nurti-prompt">^ Scroll for nutrition &amp; allergy info ^</p>' +
                                  '<div class="nutri-table">' +
                                      '<table>' +
                                         ' <tbody><tr>' +
                                             '<th></th>' +
                                             '<th>per serving (250ml)</th>' +
                                         '</tr>' +
                                          '<tr>' +
                                              '<td>Energy</td>' +
                                              '<td>567.5kj (135.6kcal)</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Sugar</td>' +
                                              '<td>27g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fat</td>' +
                                              '<td>0g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Carbohydrates</td>' +
                                              '<td>30g</td>' +
                                          '</tr>' +
                                          '<tr>' +
                                              '<td>Fibre</td>' +
                                              '<td>3.5g</td>' +
                                          '</tr>' +
                                      '</tbody></table>' +
                                  '</div>' +
                              '</div>' +
                          '</article>';
            var target = document.getElementById("hiddenProdInfo");
            target.innerHTML =  template;
    }
    
    var blurMenu = document.getElementById("menuItems");
    var blurText = document.getElementsByTagName("H1");
    blurMenu.className += " blur";
    blurText.className += " blur";
    
};

for (var i = 0; i < drinkClicked.length; i++) {
    drinkClicked[i].addEventListener('click', showDrinkInfo, false);
}

//Code to remove the product information when button is clicked
var closeButtons = document.getElementsByClassName("close-btn");

function removeProductInfo (){	
	var node = document.getElementById('hiddenProdInfo');
	node.innerHTML = "":
	document.getElementById("menuItems").className = 
		document.getElementById("menuItems").className.replace( /(?:^|\s)blur(?!\S)/g , '' )
}

for (var i=0; i < closeButtons.length; i++){
	closeButtons[i].addEventListener('click', removeProductInfo, false);
}

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
