//JS file for Juice Box
var prodEls = document.getElementsByClassName("drink-option");

var showProdInfo = function() {
    var prodID = this.id;
    attribute.classList.toggle("isShowing");
  
    var blurMenu = document.getElementById("menuItems");
    blurMenu.classList.toggle("blur");
  
    var blurHeading = document.getElementsByTagName("h1");
    blurHeading.classList.toggle("blur");
};

for (var i = 0; i < prodEls.length; i++) {
    prodEls[i].addEventListener('click', showProdInfo, false);
}

/*var citrusPunch = {
  name:"Citrus Punch",
  image:"citrus",
  ingredients:"Grapefruit, Orange &amp; Pineapple",
  price:"	&pound;2.50",
  className:"citrus-blast"
};
var berryBlast = {
  name:"Berry Blast",
  image:"berry",
  ingredients:"Apple, Grape, Blueberry<br>&amp; Raspberry",
  price:"	&pound;2.50",
  className:"berry-blast"
};
var greenMachine = {
  name:"Green Machine",
  image:"green",
  ingredients:"Apple, Banana, Avocado,<br>Kiwi &amp; Lime",
  price:"	&pound;2.50",
  className:"berry-blast"
};
var simplyRed = {
  name:"Simply Red",
  image:"red",
  ingredients:"Apple, Grape, Strawberry<br>&amp; Cherry",
  price:"	&pound;2.50",
  className:"simply-red"
};

var basket = [greenMachine, berryBlast];

basket.forEach(function(item) {
  
  var drinkName = item.name,
      drinkImage = item.image,
      drinkIngred = item.ingredients,
      drinkPrice = item.price,
      drinkClass = item.className;    
  
  var a = document.createElement("article");
  a.className = "basket-item " + drinkClass;
  
  var imgSpan = document.createElement("span");
  
  
  var template = '<article class="basket-item ' + drinkClass + '">' +
                   '<span><img src="assets/images/basket-' + drinkImage + '.svg" alt="' + drinkName + ' Ingrediant Image"></span>' +
                   '<span>' + drinkName + '<br><small>' + drinkIngred + '</small></span>' +
                   '<span class="price">' + drinkPrice + '</span>' +
                   '<a class="remove-basket" href="#">x</a>' +
                   '<br class="clear">' +
                 '</article>';
  
  var target = document.getElementById("basket");
  
  target.appendChild(template);
});*/
