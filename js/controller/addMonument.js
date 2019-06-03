import
Monument
from "../models/monumentModel.js"
import {
    users,
    monuments
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

document.querySelector("#myForm").addEventListener("submit", function (event) {
    const name = document.querySelector("#name").value
    const country = document.querySelector("#country").value
    const city = document.querySelector("#city").value
    const year = document.querySelector("#year").value
    const description = document.querySelector("#description").value
    const img = document.querySelector("#img").value
    const lvl = document.querySelector("#lvl").value
    const category = document.querySelector("#category").value



    let monumentExists = false
    for (const monument of monuments) {

        if (name.value === monument.name) {
            monumentExists = true
        }
    }
    if (monumentExists === false) {
        monuments.push(new Monument(name, year, img, description, city, country, lvl, category))
        localStorage.setItem("monuments", JSON.stringify(monuments))
        monumentListLoad();
        alert("Monumento Adicionado!")

    } else {
        alert("Este Monumento já existe!")
    }
    event.preventDefault();
})


document.querySelector("#removeForm").addEventListener("submit", function (event) {
    const removeMonument = document.querySelector("#removeMonument").value
    for (const monument of monuments) {
        if (removeMonument === monument.name) {
            var userMnt = monuments.indexOf(removeMonument)
            monuments.splice(userMnt);
            localStorage.setItem("monuments", JSON.stringify(monuments))
            monumentListLoad();
        }
    }
    event.preventDefault();
})

monumentListLoad();

function monumentListLoad() {
    const monumentList = document.querySelector("#monumentList")
    let lista = ""
    for (let i = 0; i < monuments.length; i++) {
        const name = monuments[i].name;
        lista += `<p>${name}</p>`
    }
    monumentList.innerHTML = lista
}