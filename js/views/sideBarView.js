import {
    logout
} from "../models/Main.js"

const doLogout = document.querySelector("#optionLogout")
const navOpen = document.querySelector("#openNav")
const navClose = document.querySelector("#closeNav")



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