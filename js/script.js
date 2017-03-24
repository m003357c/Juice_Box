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

	
	//var basket = [greenMachine, berryBlast];
	var basket = localStorage.getItem('basket');

	//Function to show the drinks information when clicked
	$(".drink-option").click(function(){

		drinkID = this.id;
		
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

	
	
	
	
	
	
	// Add item to basket then store in local storage
	
	$(".drink-option .add-cart-btn").click(function(){
		
		 switch (drinkID) {
			case "citrus-punch":
				basket.push("citrusPunch");
				break;
			case "berry-blast":
			    basket.push("greenMachine");
				break;
			case "green-machine":
			    basket.push("berryBlast");
				break;
			case "simply-red":
				basket.push("simplyRed");
		};
		
		localStorage.setItem('basket', JSON.stringify(basket));
		
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
	
	if (basket.length !== 0) {
		$("li.basket a").append("<span class='badge'>" + basket.length +"</span>");
	}
	
	$("#basket .basket-item").each(function(i){
		setTimeout(function(){
			$("#basket .basket-item").eq(i).addClass("is-showing");
		}, 150 * (i + 1));
	});
	
	$(".remove-basket").click(function(){

		var prodId = $(this).parent().attr("id");
		console.log(prodId);
		var index = basket.indexOf(prodId !== -1);
		console.log(index);
		
		if(basket.indexOf(prodId !== -1)){
		   basket.splice(index, 1);
			console.log(basket);
		}
		
		$(".basket-items").text(basket.length);

		$(".basket-price").text("£" + basket.length * 2.5);
		
		$(this).parent().removeClass("is-showing").delay(500).queue(function() { $(this).remove(); });
		
	});
	
	$(".cost").text("£" + basket.length * 2.5);
	
	$(".card").click(function(){
		
		if ($(this).hasClass("mobile")){
		    
			$(this).addClass("mobile-animate-in");	
		
		}else if ($(this).hasClass("debit")){
		
			$(this).addClass("card-animate-in");	
	
		} else if ($(this).hasClass("paypal")){
			
			$(this).addClass("paypal-animate-in");	
			
		};
		
		$(this).addClass("animated").css("z-index","999").children(".card-inner").addClass("fade");
		
		$(".wallet-inner").css("position","static");
		$(".overlay").addClass("isShowing fade")
	});
	
	$(".overlay").on("click", ".pay-screen .btn", function(){		
		
		if($(".overlay").hasClass("isShowing")){
		    $(".overlay").toggleClass("fade fadeOut");
			setTimeout(function(){
				$(".overlay").removeClass("isShowing").removeClass("fadeOut");
			}, 1000);
	   	};		

		if ($(".card.animated").hasClass("mobile")){ 
			$(".card.mobile").toggleClass("mobile-animate-in mobile-animate-out").delay(1000).queue(function() { $(".card.mobile").removeClass("mobile-animate-out animated").css("z-index","1"); } );
			$(".wallet-inner").css("position","relative");		
			$(".card-inner").removeClass("fade");
		}else if ($(".card.animated").hasClass("debit")){
			$(".card.debit").toggleClass("card-animate-in card-animate-out").delay(1000).queue(function() { $(".card.debit").removeClass("card-animate-out animated").css("z-index","2"); } );
			$(".wallet-inner").css("position","relative");		
			$(".card-inner").removeClass("fade");
		} else if ($(".card.animated").hasClass("paypal")){
			$(".card.paypal").toggleClass("paypal-animate-in paypal-animate-out").delay(1000).queue(function() { $(".card.paypal").removeClass("paypal-animate-out animated").css("z-index","3"); } );	
			$(".wallet-inner").css("position","relative");		
			$(".card-inner").removeClass("fade");
		};
		
	});
});
