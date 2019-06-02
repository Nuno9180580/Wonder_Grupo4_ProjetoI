import Monument from "../models/monumentModel.js"
import {
    users
}
from "../models/Main.js"

const userOn = sessionStorage.getItem('loggedUser')
const labelUser = document.querySelector("#txtUserLogged")
labelUser.innerHTML = userOn;

let imgAvatar = ""
for (const user of users) {
    if (user.username === userOn) {
        imgAvatar = user.userImage
    }
}
const userAvatar = document.querySelector("#userAvatar")
userAvatar.src = imgAvatar


const name = document.querySelector("#name")
const country = document.querySelector("#country")
const city = document.querySelector("#city")
const year = document.querySelector("#year")
const description = document.querySelector("#description")
const img = document.querySelector("#img")


document.querySelector("#myForm").addEventListener("submit", function (event) {
    addMonument();
    event.preventDefault();
  })


function addMonument() {
    for (const monument of monuments) {
        if (name.value === monument.name) {
            alert("Monumento já adicionado")
        } else {
            monuments.push(new Monument(name.value, year.value, img.value, description.value, city.value, country.value))
            localStorage.setItem("monuments", JSON.stringify(monuments))
            alert("Monumento Adicionado!")
        }
    }
}
