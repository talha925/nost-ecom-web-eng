// For offer selection
var offer = document.getElementById("offer"); // Reference to the offer element
var offerclose = document.getElementById("offer-close"); // Reference to the offer close button

// Add a click event listener to the close button for the offer
offerclose.addEventListener("click", function () {
    offer.style.display = "none"; // Hide the offer element when the close button is clicked
});

// Side navigation menu
var sidenav = document.getElementById("sidenav"); // Reference to the side navigation element
var menu = document.getElementById("menu-icon"); // Reference to the menu icon (to open the side navigation)
var closemenu = document.getElementById("menu-close"); // Reference to the close button in the side navigation
var list = document.getElementById("list-close"); // Reference to a list item or another close trigger in the side navigation

// Add a click event listener to the menu icon
menu.addEventListener("click", function () {
    sidenav.style.marginLeft = "0"; // Slide the side navigation into view
});

// Add a click event listener to the close button in the side navigation
closemenu.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"; // Slide the side navigation out of view
});

// Add a click event listener to the list item or close trigger
list.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"; // Slide the side navigation out of view
});
