// define global variables for elements in html
const productNameInput = document.getElementById('product-name');
let itemPriceSpan = document.getElementById('item-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const productsRow = document.getElementById('products')
const tealProduct = document.getElementById('tealCol');
const orangeProduct = document.getElementById('orangeCol');
const tableProduct = document.getElementById('tableCol');

let totalPrice = 0;

// function to calculate total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPrice.innerText = totalPrice.toFixed(2);
}

// function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}

// set event listener to the div container for the products with event target, to fill the product name input field and set the price to whatever is in that P as inner text to the itemPrice section. 
productsRow.addEventListener("click", (event) => {
    // define card as a variable to search within it for values
    let card = event.target.closest('.card');
    // define variables for the values in each product card
    let productName = card.querySelector('.card-title');
    let productPrice = card.querySelector('span');
    console.log(`${productName.innerText} has been clicked!`);

    // update the inner text for the two values
    productNameInput.value = productName.innerText;
    itemPriceSpan.innerText = productPrice.innerText;
});
