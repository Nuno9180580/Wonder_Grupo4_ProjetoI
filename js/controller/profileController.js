import {
  users  
} from "../models/Main.js"


const userOn = sessionStorage.getItem('loggedUser')
const labelUser = document.querySelector("#txtUserLogged")
const cardTitle = document.querySelector("#cardTitle")
cardTitle.innerHTML = userOn;
labelUser.innerHTML = userOn;
let imgAvatar = ""
let userLvl2 = ""
let userXP = ""
for (const user of users) {
    if (user.username === userOn) {
        imgAvatar = user.userImage
        userLvl2 = user.level
        userXP = user.experience

    }
}
const userAvatar = document.querySelector("#userAvatar")
const userLvl = document.querySelector("#currentLvl")
const userExp = document.querySelector("#xpBar")
const userImg = document.querySelector("#cardImg")



function xpBarColor(){
  if(userXP <= 33)
  {
    userExp.style.backgroundColor = "red" ;
    
  }
  else if(userXP >= 33 && userXP <= 66){
    userExp.style.backgroundColor = "#ffa812" ;

  }
  else{
  userExp.style.backgroundColor = "#0aac20" ;
  }
}

xpBarColor();
userImg.src = imgAvatar
userExp.innerHTML = userXP
userExp.style.width = userXP +"%";
userAvatar.src = imgAvatar
userLvl.innerHTML = "Nível: " + userLvl2