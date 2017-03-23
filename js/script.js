//JS file for Juice Box
$(document).ready(function(){
	// Drink JS Objects
	var citrusPunch = {
	    drinkId: "citrusPunch",
	    name:"Citrus Punch",
	    image:"citrus",
	    ingredients:"Grapefruit, Orange &amp; Pineapple",
	    description:"Grapefruit, Orange &amp; Pineapple",
	    price:"&pound;2.50",
	    drinkClass:"citrus-blast"
	};
	var berryBlast = {
	    drinkId: "berryBlast",
	    name:"Berry Blast",
	    image:"berry",
	    ingredients:"Apple, Grape, Blueberry<br>&amp; Raspberry",
	    description:"Apple, Grape, Blueberry &amp; Raspberry",
	    price:"&pound;2.50",
	    drinkClass:"berry-blast"
	};
	var greenMachine = {
 	    drinkId: "greenMachine",
	    name:"Green Machine",
	    image:"green",
	    ingredients:"Apple, Banana, Avocado,<br>Kiwi &amp; Lime",
	    description:"Apple, Banana, Avocado, Kiwi &amp; Lime",
	    price:"&pound;2.50",
	    drinkClass:"green-machine"
	};
	var simplyRed = {
	    drinkId: "simplyRed",
	    name:"Simply Red",
	    image:"red",
	    ingredients:"Apple, Grape, Strawberry<br>&amp; Cherry",
	    description:"Apple, Grape, Strawberry &amp; Cherry",
	    price:"&pound;2.50",
	    drinkClass:"simply-red"
	};

	var basket = [greenMachine, berryBlast];

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

		$("#menuItems, h1").toggleClass("blur");

	});

	$(".close-btn").click(function(){
		
		if ($(this).parent().hasClass("isShowing")){
		    
			$(this).parent().addClass("hideElement");
			$("#menuItems, h1").toggleClass("blur"); 	
		
			setTimeout(function(){ 
				$(".product-information").removeClass("isShowing");
				$(".product-information").removeClass("hideElement");	
			}, 500);
		    
		};
	});

	//Append the amount in the basket and total price to page
	$(".basket-items").text(basket.length);

	$(".basket-price").text("£" + basket.length * 2.5);
	
	basket.forEach(function(item) {

	  var drinkId = item.drinkId,
	      drinkName = item.name,
	      drinkImage = item.image,
	      drinkIngred = item.ingredients,
	      drinkPrice = item.price,
	      drinkClass = item.drinkClass;

	  var template = '<article id="' + drinkId + '" class="basket-item ' + drinkClass + '">' +
					   '<span><img src="assets/images/basket-' + drinkImage + '.svg" alt="' + drinkName + ' Ingrediant Image"></span>' +
					   '<span>' + drinkName + '<br><small>' + drinkIngred + '</small></span>' +
					   '<span class="price">' + drinkPrice + '</span>' +
					   '<a class="remove-basket" href="#">x</a>' +
					   '<br class="clear">' +
					 '</article>';

	  $(".basket #basket").append(template);
		
	});
	
	$("#basket .basket-item").each(function(i){
		setTimeout(function(){
			$("#basket .basket-item").eq(i).addClass("is-showing");
		}, 150 * (i + 1));
	});
	
	$(".remove-basket").click(function(){

		console.log(basket);
		
		var prodId = $(this).parent().id;
		var index = basket.indexOf(prodId > -1);
		console.log(prodId, index);
		
		/*if(prodId == index){
		   basket.splice(index, 1);
			console.log(basket);
		}*/
	
		function removeBasketItem() {
		    for (var i = 0; i < basket.length; i++){
			if (basket[i].drinkId === prodId) {
				basket.splice(basket[i], 1);
			};
		    };
		};
		
		removeBasketItem();
		
		console.log(basket);
		
		$(".basket-items").text(basket.length);

		$(".basket-price").text("£" + basket.length * 2.5);
		
		$(this).parent().removeClass("is-showing").delay(500).queue(function() { $(this).remove(); });
		
	});
	
	
	$(".card").click(function(){
		
		$(this).addClass("card-animate-in");
		
		$(this).children(".card-inner").addClass("fade");
		
		//$(".overlay").toggleClass("isShowing");
	});
	$(".pay-screen .btn").click(function(){
		
		$(".overlay").toggleClass("isShowing");
	});
});
