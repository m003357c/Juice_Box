//JS file for Juice Box
var drinkClicked = document.getElementsByClassName("drink-option");

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


var citrusPunch = {
  name:"Citrus Punch",
  image:"citrus",
  ingredients:"Grapefruit, Orange &amp; Pineapple",
  price:"&pound;2.50",
  drinkClass:"citrus-blast"
};
var berryBlast = {
  name:"Berry Blast",
  image:"berry",
  ingredients:"Apple, Grape, Blueberry<br>&amp; Raspberry",
  price:"&pound;2.50",
  drinkClass:"berry-blast"
};
var greenMachine = {
  name:"Green Machine",
  image:"green",
  ingredients:"Apple, Banana, Avocado,<br>Kiwi &amp; Lime",
  price:"&pound;2.50",
  drinkClass:"green-machine"
};
var simplyRed = {
  name:"Simply Red",
  image:"red",
  ingredients:"Apple, Grape, Strawberry<br>&amp; Cherry",
  price:"&pound;2.50",
  drinkClass:"simply-red"
};

var basket = [greenMachine, berryBlast];

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
