// If a shopping cart does not exist in localstorage
if( localStorage.getItem('cart') == null ) {
	
	//create the cart
	localStorage.setItem('cart', JSON.stringify( [] ));
}

// Extract the cart and convert it back into an Object
var cart = JSON.parse( localStorage.getItem('cart') );


var cart = JSON.parse( localStorage.getItem('cart') );

// Show the contents of the cart
console.log( cart );

document.querySelectorAll('.add-to-cart');

var addToCartButtons = document.querySelectorAll('.add-to-cart');

//Add click event listeners to them all
for(var i=0; i<addToCartButtons.length; i++) {

	addToCartButtons[i].onclick = addToCart;

}

function addToCart() {

	var productName = this.dataset.name;
	var productPrice = this.dataset.price;

	var product = {
		name: productName,
		price: productPrice
	}

	cart.push(product);

	localStorage.setItem('cart', JSON.stringify(cart) );

}

// // Get a copy of the cart
// //var cart = localStorage.getItem('cart');

// cart = {
// 	id: 1234,
// 	name: "Smartphone",
// 	price: 1000,
// 	thumbnail: 'image.jpg'
// };

// //convert our object into text, because Localstorage doesn't work with objects
// cart = JSON.stringify(cart);

// // Save our changes
// localStorage.setItem('cart', cart);

