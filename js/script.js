//JS file for Juice Box
$(document).ready(function(){
	// Drink JS Objects
	var citrusPunch = {
	    drinkId: "citrusPunch",
	    name:"Citrus Punch",
	    image:"citrus",
	    ingredients:"Grapefruit, Orange<br>&amp; Pineapple",
	    description:"Grapefruit, Orange &amp; Pineapple",
	    price:"&pound;2.50",
	    drinkClass:"citrus-punch"
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

	var basketQueue = new Array();  
	var basket;
	
	if (localStorage.getItem("basket") === null){
		localStorage.setItem('basket',  "0");	
		console.log("baskets local storage created");
	} else{
		basket = JSON.parse(localStorage.getItem('basket'));
		console.log(basket);
	}
	
	if ($("li.basket a .badge").is(":empty")){
		$("li.basket a .badge").text("0");
	};
	
	// Add item to basket then store in local storage	
	$(".product-information .add-cart-btn").click(function(){
		var activeDrink = $(this).closest(".product-information").attr("id");
		console.log(activeDrink);
		switch (activeDrink) {
			case "citrusProdInfo":
				basketQueue.push(citrusPunch);
				console.log(basketQueue);
				break;
			case "berryProdInfo":
			    	basketQueue.push(berryBlast);
			 	console.log(basketQueue);
				break;
			case "greenProdInfo":
			   	basketQueue.push(greenMachine);
				console.log(basketQueue);
				break;
			case "redProdInfo":
				basketQueue.push(simplyRed);
				console.log(basketQueue);
		};
		
		localStorage.setItem('basket', JSON.stringify(basketQueue));
		console.log("Add basket queue to local storage");
		
		var basketCount = JSON.parse(localStorage.getItem('basket'));
		$("li.basket a .badge").css("display", "inline-block").text(basketCount.length);
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
		$("li.basket a .badge").css("display", "inline-block").text(basket.length);
	}	
	$("#basket .basket-item").each(function(i){
		setTimeout(function(){
			$("#basket .basket-item").eq(i).addClass("is-showing");
		}, 150 * (i + 1));
	});	
	$(".remove-basket").click(function(){		
		var basketTemp = JSON.parse(localStorage.getItem('basket'));		
		var prodId = $(this).parent().attr("id");
		var index = basketTemp.indexOf(prodId !== -1);
		
		if(basketTemp.indexOf(prodId !== -1)){
			basketTemp.splice(index, 1);
		}
		
		localStorage.setItem('basket', JSON.stringify(basketTemp));		
		var basketCount = JSON.parse(localStorage.getItem('basket'));
		$(".basket-items").text(basketCount.length);
		$(".basket-price").text("£" + basketCount.length * 2.5);		
		$("li.basket a .badge").text(basketCount.length);		
		$(this).parent().removeClass("is-showing").delay(500).queue(function() { $(this).remove(); });		
	});
	var basketCost = basket.length * 2.5;	
	$(".basket-items").text(basket.length);
	$(".cost, .basket-price").text( "£" + basketCost.toFixed(2));
	
	$(".card").click(function(){		
		if ($(this).hasClass("mobile")){		    
			$(this).toggleClass("mobile-animate-in");			
		}else if ($(this).hasClass("debit")){		
			$(this).toggleClass("card-animate-in");		
		} else if ($(this).hasClass("paypal")){			
			$(this).toggleClass("paypal-animate-in");				
		};
		
		$(this).addClass("animated").css("z-index","999").children(".card-inner").addClass("fade");		
		$(".wallet-inner").css("position","static");
		$(".overlay").addClass("isShowing fade")
	});
	$(".pay-screen .btn").click(function(){			
		if($(".overlay").hasClass("isShowing")){
		    $(".overlay").toggleClass("fade fadeOut");
			setTimeout(function(){
				$(".overlay").removeClass("isShowing").removeClass("fadeOut");
			}, 1000);
	   	};		
		
		setTimeout(function(){
			if ($(".card.mobile").hasClass("animated")){ 
				$(".card.mobile").toggleClass("mobile-animate-in mobile-animate-out").attr("style","").delay(1000).queue(function(next) { 
					$(".card.mobile").attr("class","card mobile");
					next();
				});
				$(".wallet-inner").css("position","relative");		
				$(".card-inner").removeClass("fade");
			}else if ($(".card.debit").hasClass("animated")){
				$(".card.debit").toggleClass("card-animate-in card-animate-out").attr("style","").delay(1000).queue(function(next) {
					$(".card.debit").attr("class","card debit");
					next();
				});
				$(".wallet-inner").css("position","relative");		
				$(".card-inner").removeClass("fade");
			} else if ($(".card.paypal").hasClass("animated")){
				$(".card.paypal").toggleClass("paypal-animate-in paypal-animate-out").attr("style","").delay(1000).queue(function(next) { 
					$(".card.paypal").attr("class","card paypal"); 
					next();
				});	
				$(".wallet-inner").css("position","relative");		
				$(".card-inner").removeClass("fade");
			};
		},500);
	});
});
