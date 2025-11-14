# Furniture Store - Dynamic Shopping Cart

## 🌐 Live Site
**https://magali-la.github.io/dynamic-shopping-cart/**

## Project Overview
This project was created as part of an assignment with Per Scholas. This dynamic shopping cart features:

* Sample product tiles with responsive grid and card layouts
* Dynamic input field and item price that update when a product is selected
* Visual feedback for product card selection
* Modular template for dynamically creating and appending cart tiles
* Cart tile removal with real-time total price updates

## Tech Stack
* Bootstrap
* JavaScript

## How to Test
* Open the live site
* Click on `Add Product` button to view user alert
* Click on a product card and verify hover cursor and opacity on click
* Verify the readonly input field and item price update dynamically
* Verify that clicking a product card twice removes the item from the input
* Check that adding the product to cart restores default input field and price
* Verify that price updates dynamically upon adding and removing a product

## Reflections
### Dynamic Element Creation
* I used cloning by creating a hidden template to populate added products to the cart and using `querySelector` to target the children elements within the product cards and cloned tiles
* I used an object to store relevant data from the card clicked and added (image src, product name, and product price) to include in different parts of the tile once appended
* I set imageSource as a global variable for use in the product selection and add button event listeners
### Total Price Calculation
* I kept a global totalPrice variable initialized at 0 and defined a variable for the itemPrice next to the input field.
* The object created with the card data was converted to a number with `parseFloat`, using a global helper function to update the total price in the event listener
* `.toFixed(2)` keeps consistent formatting with two decimal places, which keeps it scalable if there were products whose prices were not integers
* I referenced the same global helper function to update the price with a negative input
### User Experience
* In order to promote intuitive user interactions with the app, I decided against using an editable input field. The user can easily select a product and view their selection and price dynamically
* The input field's placeholder has key information prompting the user to select a product first
* An alert was created if the user attempts to add something without a selected product with a `return` statement to stop the rest of the code in the event listener from running and creating an empty tile in the cart
* Visual indicators were included when the user hovers and clicks on a product card
* These updates from the original project constraints avoid issues with input validation and helps direct the user to adding items to their cart
### Removing Cart Tiles
* I originally set up my template and its children elements with id's, but realized since the DOM is cloning the template that there would be too many elements with the same id, which is invalid in HTML
* Even though the product still functioned as intended, I modified my html to have classes so that the code would be aligned with best practices
* I faced challenges with using the right event target, as I wanted to ensure that code was scalable by including an event listener on the cart list rather than each clones remove button