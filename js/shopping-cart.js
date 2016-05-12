// If a shopping cart does not exist in localstorage
if( localStorage.getItem('cart') == null ) {
	
	//create the cart
	localStorage.setItem('cart', JSON.stringify( [] ));
}

// Extract the cart and convert it back into an Object
var cart = JSON.parse( localStorage.getItem('cart') );

// Show the contents of the cart
console.log( cart );

// Show the user how many items they have in the cart
updateCartDisplay();


//Find all the buttons

var addToCartButtons = document.querySelectorAll('.add-to-cart');

//Add click event listeners to them all
for(var i=0; i<addToCartButtons.length; i++) {

	addToCartButtons[i].onclick = addToCart;

}

function addToCart() {

	var productName = this.dataset.name;
	var productPrice = parseFloat(this.dataset.price);

	var product = {
		name: productName,
		price: productPrice
	}

	cart.push(product);

	localStorage.setItem('cart', JSON.stringify(cart) );

	console.log(cart);

	updateCartDisplay();


}

// Listen for clicks on the clear cart button
document.querySelector('#clear-cart').onclick = function() {

	// Reset locationstorage
	localStorage.setItem('cart', JSON.stringify( [] ));

	// Reset the cart variable
	cart= [];

	updateCartDisplay();

};

function updateCartDisplay() {

	//Get the cart contents
	var cart = JSON.parse( localStorage.getItem('cart') );

	if( cart.length == 0 ) {
		var text = '';
	} else {
		var text = cart.length;
	}

	//Count the cart contents and display the number on screen
	document.querySelector('#total-cart').innerHTML = text;

	showCartTable();

}

function showCartTable() {

	// Find the container that will hold the table
	var container = document.querySelector('#cart-table');

	// Create the HTML table
	var table = document.createElement('table');
	table.setAttribute('border', '1');

	// Create a row to hold the headings
	var headingsRow = document.createElement('tr');

	// Create the name heading
	var nameHeading = document.createElement('th');

	nameHeading.innerHTML = 'Product Name';

	// Create the price heading
	var priceHeading = document.createElement('th');

	priceHeading.innerHTML = 'price';

	// Add the headings to the headings row
	headingsRow.appendChild(nameHeading);
	headingsRow.appendChild(priceHeading);

	// Add the headings row to the table
	table.appendChild(headingsRow);

	// Grand total
	var grandTotal = 0;

	// Loop over all cart items
	for(var i=0; i<cart.length; i++) {

		// Get the price of the product and add to the grand total
		grandTotal += cart[i].price;

		// Create a row for this product
		var row = document.createElement('tr');

		// Create the product name data element
		var nameTD = document.createElement('td');

		// Create the product price data element
		var priceTD = document.createElement('td');

		// Add data to the TD elements
		nameTD.innerHTML = cart[i].name;
		priceTD.innerHTML = cart[i].price;

		// Add the TD elements to the row
		row.appendChild(nameTD);
		row.appendChild(priceTD);

		// Add this row to the table
		table.appendChild(row);

	}

	console.log(grandTotal);
	var grandTotalRow = document.createElement('tr');
	var grandTotalTD = document.createElement('td');
	var fillerTD = document.createElement('td');

	grandTotalTD.innerHTML = 'Grand Total: ' + grandTotal; 

	grandTotalRow.appendChild(fillerTD);
	grandTotalRow.appendChild(grandTotalTD);

	table.appendChild(grandTotalRow);

	// Clear whatever is inside the div
	container.innerHTML = '';

	// Add the table to the screen	
	container.appendChild(table);

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

