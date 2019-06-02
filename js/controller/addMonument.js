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


const name = document.querySelector("#name").value
const country = document.querySelector("#country").value
const city = document.querySelector("#city").value
const year = document.querySelector("#year").value
const description = document.querySelector("#description").value
const img = document.querySelector("#img").value


document.querySelector("#myForm").addEventListener("submit", function (event) {
    for (const monument of monuments) {
        let monumentExists = false
        if (name.value === monument.name) {
            monumentExists = true
        }
    }
    if (monumentExists === false) {
        monuments.push(new Monument(name, year, img, description, city, country))
        localStorage.setItem("monuments", JSON.stringify(monuments))
        alert("Monumento Adicionado!")
    } else {
        alert("Este Monumento já existe!")
        name = ""
    }
    event.preventDefault();
})