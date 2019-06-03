import {
  users
} from "../models/Main.js"


const userOn = sessionStorage.getItem('loggedUser')
const labelUser = document.querySelector("#txtUserLogged")
const cardTitle = document.querySelector("#cardTitle")
const userAvatar = document.querySelector("#userAvatar")
const userLvl = document.querySelector("#currentLvl")
const userExp = document.querySelector("#xpBar")
const userImg = document.querySelector("#cardImg")
const userEmail = document.querySelector("#emailAdress")
const userPass = document.querySelector("#passWord")
cardTitle.innerHTML = userOn;
labelUser.innerHTML = userOn;
let imgAvatar = ""
let userLvl2 = ""
let userXP = ""
let email = ""
let pass = ""
for (const user of users) {
  if (user.username === userOn) {
    imgAvatar = user.userImage
    userLvl2 = user.level
    userXP = user.experience
    email = user.email
    pass = user.password

  }
}




function xpBarColor() {
  if (userXP <= 33) {
    userExp.style.backgroundColor = "red";

  } else if (userXP >= 33 && userXP <= 66) {
    userExp.style.backgroundColor = "#ffa812";

  } else {
    userExp.style.backgroundColor = "#0aac20";
  }
}

xpBarColor();
userImg.src = imgAvatar
userExp.innerHTML = userXP
userExp.style.width = userXP + "%";
userAvatar.src = imgAvatar
userLvl.innerHTML = "Nível: " + userLvl2
userEmail.value = email;
userPass.value = pass;

const nowPass = document.querySelector("#nowPass")
const newPass = document.querySelector("#newPass")


document.querySelector("#submitNewPass").addEventListener("click", function (event) {
  for (const user of users) {
    if (user.username === userOn) {
      if (user.password === nowPass.value) {
        if (newPass.value != nowPass.value) {
          user.password = newPass
          console.log(user.username)
          console.log(userOn)
          console.log(user.password)
          console.log(newPass.value)
          console.log(nowPass.value)
          alert("alteracao feita")
        } else {
          console.log(user.username)
          console.log(userOn)
          console.log(user.password)
          console.log(newPass.value)
          console.log(nowPass.value)
          alert("a senha não pode ser igual à atual!")
        }

      } else {
        alert("a senha atual não é essa!")
      }
    }
  }

  event.preventDefault();
})