import
Monument
from "../models/monumentModel.js"
import {
    users,
    monuments
}
from "../models/Main.js"
//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Botão que adiciona um novo Monumento
document.querySelector("#addForm").addEventListener("submit", function (event) {
    newMonument();
    document.querySelector("#name").value = ""
    document.querySelector("#country").value = ""
    document.querySelector("#city").value = ""
    document.querySelector("#year").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#img").value = ""
    document.querySelector("#lvl").value = ""
})

//Botão e função que elimina um Monumento
document.querySelector("#removeForm").addEventListener("submit", function (event) {
    removeMonument();
    document.querySelector("#removeMonument").value = ""
})

/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
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
}

//Adiciona na lista todos os monumentos existentes
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

//função que adiciona um novo Monumento
function newMonument() {
    const name = document.querySelector("#name").value
    const country = document.querySelector("#country").value
    const city = document.querySelector("#city").value
    const year = document.querySelector("#year").value
    const description = document.querySelector("#description").value
    const img = document.querySelector("#img").value
    const lvl = document.querySelector("#lvl").value
    let monumentExists = false
    for (const monument of monuments) {
        if (name.value === monument.name) {
            monumentExists = true
        }
    }
    if (monumentExists === false) {
        monuments.push(new Monument(name, year, img, description, city, country, lvl))
        localStorage.setItem("monuments", JSON.stringify(monuments))
        monumentListLoad();
        alert("Monumento Adicionado!")
    } else {
        alert("Este Monumento já existe!")
    }
    event.preventDefault();
}

//Botão que elimina um Monumento
function removeMonument() {
    const removeMonument = document.querySelector("#removeMonument").value
    let index = -1
    for (const monument of monuments) {
        index++;
        if (removeMonument === monument.name) {
            monuments.splice(index, 1);
            localStorage.setItem("monuments", JSON.stringify(monuments))
            alert("Monumento Removido com sucesso!")
            monumentListLoad();
        }
    }
    event.preventDefault();
}