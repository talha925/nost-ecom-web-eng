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


// contact us validation
var submit = document.getElementById("submit")

submit.addEventListener("click", function (event) {
    event.preventDefault()

    var nameregex = /^[a-zA-Z]+$/
    var emailregex = /^[a-zA-Z0-9]+@gmail\.com$/
    var messageregex = /^[a-zA-Z\s]+$/

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var message = document.getElementById("message")

    var validate = true
    if (nameregex.test(name.value) == false) {
        document.querySelector(".nameerror").style.display = "block"
        validate = false
    }
    else {
        document.querySelector(".nameerror").style.display = "none"
    }
    if (emailregex.test(email.value) == false) {
        document.querySelector(".emailerror").style.display = "block"
        validate = false
    }
    else {
        document.querySelector(".emailerror").style.display = "none"
    }
    if (messageregex.test(message.value) == false) {
        document.querySelector(".messageerror").style.display = "block"
        validate = false
    }
    else {
        document.querySelector(".messageerror").style.display = "none"
    }


    if (validate == true) {
        alert("Your Data is Submited Successfully")
        name.value = ""
        email.value = ""
        message.value = ""
    }
})