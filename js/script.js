//JS file for Juice Box
var citrusPunch = {
  name:"Citrus Punch",
  image:"assets/images/basket-citrus.svg",
  ingredients:"Grapefruit, Orange &amp; Pineapple",
  price:"	&pound;2.50",
  className:"citrus-blast"
};
var berryBlast = {
  name:"Berry Blast",
  image:"assets/images/basket-berry.svg",
  ingredients:"Apple, Grape, Blueberry &amp; Raspberry",
  price:"	&pound;2.50",
  className:"berry-blast"
};
var greenMachine = {
  name:"Berry Blast",
  image:"assets/images/basket-green.svg",
  ingredients:"Apple, Banana, Avocado, Kiwi &amp; Lime",
  price:"	&pound;2.50",
  className:"berry-blast"
};
var simplyRed = {
  name:"Simply Red",
  image:"assets/images/basket-red.svg",
  ingredients:"Apple, Grape, Strawberry &amp; Cherry",
  price:"	&pound;2.50",
  className:"simply-red"
};

var basket = [greenMachine, berryBlast];

console.log(basket);

basket.forEach(function(item) {
  
  var drinkName = item.name,
      drinkImage = item.image,
      drinkIngred = item.ingredients,
      drinkPrice = item.price,
      drinkClass = item.className;    
  
  console.log(drinkName, drinkImage, drinkIngred, drinkPrice, drinkClass);
  
});
