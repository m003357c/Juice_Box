//JS file for Juice Box
$(document).ready(function(){
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

	  $(".basket #basket").append(template);
		
	});
	
	$("#basket .basket-item").each(function(i){
		setTimeout(function(){
			$("#basket .basket-item").eq(i).addClass("is-showing");
		}, 150 * (i + 1));
	});
	
	$(".basket-item .remove-basket").on("click", ".remove-basket", function(){
		console.log("click");
		$(this).parent().removeClass("is-showing");
		setTimeout(function(){
			$(this).parent().remove();
		}, 300);
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
