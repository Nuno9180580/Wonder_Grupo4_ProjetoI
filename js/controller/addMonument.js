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

let acceptedSugests = []

acceptedSugests = JSON.parse(localStorage.getItem("accepted"))
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
    document.querySelector("#map").value = ""

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

//Adiciona na lista todos as sugestoes aceites
sugestionListLoad();

function sugestionListLoad() {
    const addToList = document.querySelector("#sugestionList")
    let sugestionsList = `<h2 id="titleSugestions">Sugestões Aceites</h2>`
    for (let i = 0; i < acceptedSugests.length; i++) {
        sugestionsList += `<p>${acceptedSugests[i].monument}</p>`
    }
    addToList.innerHTML = sugestionsList
}

//função que adiciona um novo Monumento
function newMonument() {
    const id = monuments[monuments.length - 1]["id"] + 1
    const name = document.querySelector("#name").value
    const country = document.querySelector("#country").value
    const city = document.querySelector("#city").value
    const year = document.querySelector("#year").value
    const description = document.querySelector("#description").value
    const img = document.querySelector("#img").value
    const lvl = document.querySelector("#lvl").value
    const map = document.querySelector("#map").value

    let monumentExists = false
    let sugestionExists = false
    for (const monument of monuments) {
        if (name.value === monument.name) {
            monumentExists = true
        }
    }
    if (monumentExists === false) {
        for (const accepted of acceptedSugests) {
            if (accepted.monument === name) {
                sugestionExists = true
            }
        }
        if (sugestionExists === true) { //se existir nas sugestoes remove de la
            let index = -1
            for (const accepted of acceptedSugests) {
                index++;
                if (accepted.monument === name) {
                    acceptedSugests.splice(index, 1);
                    localStorage.setItem("accepted", JSON.stringify(acceptedSugests))
                }
            }
            monuments.push(new Monument(id, name, year, img, description, city, country, lvl,false,[] , map))
            localStorage.setItem("monuments", JSON.stringify(monuments))
            monumentListLoad();
            sugestionListLoad();
            alert("Monumento Adicionado!")
        } else {
            monuments.push(new Monument(id, name, year, img, description, city, country, lvl,false, [],map))
            localStorage.setItem("monuments", JSON.stringify(monuments))
            monumentListLoad();
            sugestionListLoad();
            alert("Monumento Adicionado!")
        }

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
            sugestionListLoad();
        }
    }
    event.preventDefault();
}