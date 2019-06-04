import {
  users
} from "../models/Main.js"
import User from "../models/userModel.js";


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



document.querySelector("#img1").addEventListener("click", function (event){
  const newImg = document.querySelector("#img1")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))

    }
    
  }

  location.reload();

  event.preventDefault();
})

document.querySelector("#img2").addEventListener("click", function (event){
  const newImg = document.querySelector("#img2")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
  localStorage.setItem("users", JSON.stringify(users))

    }

    
  }
  
  location.reload();
  event.preventDefault();
})

document.querySelector("#img3").addEventListener("click", function (event){
  const newImg = document.querySelector("#img3")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
  localStorage.setItem("users", JSON.stringify(users))

    }
  }
  
  location.reload();

  event.preventDefault();
})
document.querySelector("#img4").addEventListener("click", function (event){
  const newImg = document.querySelector("#img4")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
  localStorage.setItem("users", JSON.stringify(users))

    }
  }
  
  location.reload();

  event.preventDefault();
})
document.querySelector("#img5").addEventListener("click", function (event){
  const newImg = document.querySelector("#img5")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
  localStorage.setItem("users", JSON.stringify(users))

    }
  }
  
  location.reload();

  event.preventDefault();
})
document.querySelector("#img6").addEventListener("click", function (event){
  const newImg = document.querySelector("#img6")
  
  for (const user of users) {
    if(user.username === userOn){
      user.userImage = newImg.src
  localStorage.setItem("users", JSON.stringify(users))

    }
  }
  
  location.reload();

  event.preventDefault();
})

document.querySelector("#submitNewPass").addEventListener("click", function (event) {
  const nowPass = document.querySelector("#nowPass")
  const newPass = document.querySelector("#newPass")

  for (const user of users) {

    if (user.username === userOn) {
      if (user.password === nowPass.value) {
        if (newPass.value != nowPass.value) {
          user.password = newPass.value
          alert("alteracao feita")
             
                 
        } else {

          alert("a senha não pode ser igual à atual!")
        }

      } else {
        alert("a senha atual não é essa!")
      }


    }
  }
  localStorage.setItem("users", JSON.stringify(users))
  
  console.log("ok")

  event.preventDefault();
})