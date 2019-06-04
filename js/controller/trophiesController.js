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


document.querySelector("#btn1").addEventListener("click", function () {
  
    const img = document.querySelector("#img1")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
    }
    }
    if(XP >= 100){
        img.src = "../img/medal1.png"

    }
})


document.querySelector("#btn5").addEventListener("click", function () {
  
    const img = document.querySelector("#img5")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
    }
    }
    if(XP >= 500){
        img.src = "../img/medal1.png"

    }
})


document.querySelector("#btn2").addEventListener("click", function () {
    const img = document.querySelector("#img2")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
    }
    }
    if(XP >= 200){
        img.src = "../img/medal2.png"

    }
})


document.querySelector("#btn3").addEventListener("click", function () {
  
    const img = document.querySelector("#img3")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
    }
    }
    if(XP >= 300){
        img.src = "../img/medal3.png"

    }
})


document.querySelector("#btn4").addEventListener("click", function () {
  
    const img = document.querySelector("#img4")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
    }
    }
    if(XP >= 400){
        img.src = "../img/medal4.png"

    }
})
