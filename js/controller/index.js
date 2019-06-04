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

const welcome = document.querySelector("#welcome")
welcome.innerHTML = "Olá " + userOn + "!"

function firstPodium() {

}
function secondPodium() {
    
}
function thirdPodium() {
    
}


