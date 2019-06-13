import {
    users
}
from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

document.querySelector("#btn1").addEventListener("click", function () {
    const img = document.querySelector("#img1")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 100) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

document.querySelector("#btn2").addEventListener("click", function () {
    const img = document.querySelector("#img2")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 200) {
        img.src = "../img/medal2.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

document.querySelector("#btn3").addEventListener("click", function () {
    const img = document.querySelector("#img3")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 300) {
        img.src = "../img/medal3.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

document.querySelector("#btn4").addEventListener("click", function () {
    const img = document.querySelector("#img4")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 400) {
        img.src = "../img/medal4.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

document.querySelector("#btn5").addEventListener("click", function () {
    const img = document.querySelector("#img5")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 500) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

document.querySelector("#btn6").addEventListener("click", function () {
    const img = document.querySelector("#img6")
    const changeBorder = document.querySelector(".card")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP === 1000) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
    }
})

/* ---------------------------------------------------------------------Funções--------------------------------------------------------*/

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