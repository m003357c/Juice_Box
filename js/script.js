//JS file for Juice Box
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

var drinks = [citrusPunch, greenMachine, berryBlast, simplyRed];

var drinkClicked = document.getElementsByClassName("drink-option");

function drinkInfoTemplate(){
    
  var drinkName = item.name,
      drinkImage = item.image,
      drinkDesc = item.description,
      drinkPrice = item.price,
      drinkClass = item.drinkClass;      
  
  var template =    '<article class="product-information ' + drinkClass + '">' +
                    '<img src="assets/images/prod-' + drinkImage + '.svg" alt="' + drinkName + ' ingredient cup">' +
                    '<p class="btn-holder"><a href="#" class="btn add-cart-btn">Add to<br>cart</a><a href="#" class="btn buy-now-btn">Vend<br>now</a></p>' +
                    '<div class="info-holder">' +
                       '<h2>' + drinkName + ' - ' + drinkPrice + '</h2>' +
                        '<p class="product-info">' + drinkDesc + '</p>' +
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
  
  var target = document.getElementById("basket");
  
  target.innerHTML = target.innerHTML + template;
    
}

var showDrinkInfo = function() {
    
    var drinkID = this.id;
   
    switch (drinkID) {
        case "citrus":
            var citrusId = document.getElementById("citrusProdInfo");
            citrusId.className += " isShowing";
            break;
        case "berry":
            var berryId = document.getElementById("berryProdInfo");
            berryId.className += " isShowing";
            break;
        case "green":
            var greenId = document.getElementById("greenProdInfo");
            greenId.className += " isShowing";
            break;
        case "red":
            var redId = document.getElementById("redProdInfo");
            redId.className += " isShowing";
    }
    
    var blurMenu = document.getElementById("menuItems");
    var blurText = document.getElementsByTagName("H1");
    blurMenu.className += " blur";
    blurText.className += " blur";
};

for (var i = 0; i < drinkClicked.length; i++) {
    drinkClicked[i].addEventListener('click', showDrinkInfo, false);
}




var basket = [greenMachine, berryBlast];

var basketAmount = document.getElementsByClassName("basket-items");
var basketArrayLength = basket.length;
basketAmount.innerHTML = basketArrayLength;

var basketPrice = document.getElementsByClassName("basket-price");
var basketTotalPrice = basket.length * 5;
basketAmount.innerHTML = "&pound;" + basketTotalPrice;

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
