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

let imageSource;

let totalPrice = 0;

// function to calculate total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.innerText = totalPrice.toFixed(2);
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
    imageSource = card.querySelector('.card-img-top').src;

    console.log(`${productName.innerText} has been clicked!`);

    // create logic to toggle if the input value is already the card clicked, restore it to the original state, otherwise change the info
    if (productNameInput.value === productName.innerText) {
        productNameInput.disabled = false;
        productNameInput.value = '';
        itemPriceSpan.innerText = 0;
    } else {
        // update the inner text for the two values
        productNameInput.value = productName.innerText;
        // disable user from changing chosen value
        productNameInput.disabled = true;
        itemPriceSpan.innerText = productPrice.innerText;
    }; 
});

addProductButton.addEventListener("click", function() {
    // handle edge case - if no product is selected or the input value is empty, alert the user
    if (productNameInput.value === ''){
        alert('Please select a product to add to cart');
        return;
    };

    // take the input value at that point in time and the price
    let selectedProductObj = {
        name: productNameInput.value,
        price: itemPriceSpan.innerText,
        img: imageSource
    };
    console.log(selectedProductObj);

    // define template
    let template = document.getElementById('tileTemplate');

    // create a clone to edit and append
    let clonedTile = template.cloneNode(true);
    let tileImage = clonedTile.querySelector('#tileImg');
    let tileName = clonedTile.querySelector('#tileName');
    let tilePrice = clonedTile.querySelector('#tilePrice');

    tileImage.src = selectedProductObj.img;
    tileImage.alt = tileName.innerText;
    tileName.innerText = selectedProductObj.name;
    tilePrice.innerText = selectedProductObj.price;

    // remove display none class from template clone
    clonedTile.classList.remove('d-none');

    // adjust total price span with the object's price converted to a number
    updateTotalPrice(parseFloat(selectedProductObj.price));

    // append to cart
    cart.appendChild(clonedTile);
    
    // reset the input to '' and the price back to 0
    productNameInput.disabled = false;
    productNameInput.value = '';
    itemPriceSpan.innerText = 0;
});
