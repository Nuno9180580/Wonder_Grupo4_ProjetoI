import users from "../models/main.js"

const userOn = sessionStorage.getItem('loggedUser')
const labelUser = document.querySelector("#txtUserLogged")
labelUser.innerHTML = userOn;

const imgAvatar = ""
for (const user of users) {
    if (user.username === userOn) {
        imgAvatar = user.userImage
    }
}
alert(imgAvatar)
const userAvatar = document.querySelector("#userAvatar")
userAvatar.src = imgAvatar