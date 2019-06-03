import {
    logout
} from "../models/Main.js"
import {
    users
}
from "../models/Main.js"

const doLogout = document.querySelector("#optionLogout")
const navOpen = document.querySelector("#openNav")
const navClose = document.querySelector("#closeNav")
const userOn = sessionStorage.getItem('loggedUser')
const seeBackOffice = document.querySelector("#BackOfficeView")
let userType = ""
for (const user of users) {
    if (user.username === userOn) {
        userType = user.userType
    }
}
if(userType != "admin") {
    seeBackOffice.style.display = "none"
}

doLogout.addEventListener("click", function () {
    logout()
})

navOpen.addEventListener("click", function () {
    openNav()
})

navClose.addEventListener("click", function () {
    closeNav()
})

/* ----------------------------------FUNÇOES------------------------------------- */

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}