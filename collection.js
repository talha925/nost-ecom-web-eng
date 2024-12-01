// for offer selction
var offer = document.getElementById("offer")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click", function () {
    offer.style.display = "none"
})

//side nav
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu-icon")
var closemenu = document.getElementById("menu-close")
var list = document.getElementById("list-close")

menu.addEventListener("click", function () {
    sidenav.style.marginLeft = "0"
})
closemenu.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"
})
list.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"
})

// filter section 

var filteritem = document.getElementById("filter-item")
var filterbtn = document.getElementById("filter-btn")
var fileterclose = document.getElementById("filter-close")

filterbtn.addEventListener("click", function () {
    filteritem.style.marginLeft = 0
})

fileterclose.addEventListener("click", function () {
    filteritem.style.marginLeft = "-50%"
})

//search functionality
document.addEventListener("DOMContentLoaded", function () {

    var search = document.getElementById("search-section")
    var collection = document.getElementById("collection-section")
    var product = collection.querySelectorAll("div")

    search.addEventListener("keyup", function () {
        var enteredvalue = event.target.value.toUpperCase()
        for (var count = 0; count < product.length; count = count + 1) {
            var productname = product[count].querySelector("p").textContent
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                product[count].style.display = "none"
            }
            else {
                product[count].style.display = "block"
            }
        }
    })
})

// checkbox functionality

document.getElementById('summer').addEventListener('click', function (event) {
    var isChecked = event.target.checked;
    var shirts = document.querySelectorAll('.shirt-section');

    for (var i = 0; i < shirts.length; i++) {
        var shirt = shirts[i];
        var shirtText = shirt.querySelector('p').textContent.toLowerCase();
        if (isChecked) {
            if (shirtText.includes('summer')) {
                shirt.style.display = 'block';
            } else {
                shirt.style.display = 'none';
            }
        } else {
            shirt.style.display = 'block';
        }
    }
});

document.getElementById("party").addEventListener("click", function (event) {
    var isChecked = event.target.checked;
    var shirts = document.querySelectorAll(".shirt-section")

    for (var i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()
        if (isChecked) {
            if (shirttext.includes("party")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = 'block';
        }
    }
})

document.getElementById("beach").addEventListener("click", function (event) {
    var isChecked = event.target.checked;
    var shirts = document.querySelectorAll(".shirt-section")

    for (var i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()
        if (isChecked) {
            if (shirttext.includes("beach")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = 'block';
        }
    }
})

document.getElementById("red").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("red")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("blue").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("blue")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("white").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("white")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("green").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector("p").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("green")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("m").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector(".size").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("M")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("l").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector(".size").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("L")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("xl").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector(".size").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("XL")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})

document.getElementById("xll").addEventListener("click", function (event) {
    var isChecked = event.target.checked
    var shirts = document.querySelectorAll(".shirt-section")

    for (i = 0; i < shirts.length; i++) {
        var shirt = shirts[i]
        var shirttext = shirt.querySelector(".size").textContent.toLowerCase()

        if (isChecked) {
            if (shirttext.includes("XLL")) {
                shirt.style.display = "block"
            }
            else {
                shirt.style.display = "none"
            }
        } else {
            shirt.style.display = "block"
        }
    }
})