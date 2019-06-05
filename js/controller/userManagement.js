import
User
from "../models/userModel.js"
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
        console.log(document.querySelector("#myForm"))
    }
}
const userAvatar = document.querySelector("#userAvatar")
userAvatar.src = imgAvatar

document.querySelector("#kidForm").addEventListener("submit", function (event) {
    const kidName = document.querySelector("#kidName").value
    const kidMail = document.querySelector("#kidMail").value
    const KidPass = document.querySelector("#kidPass").value

    let userExists = false
    for (const user of users) {

        if (kidName === user.username) {
            userExists = true
        }
    }
    if (userExists === false) {
        users.push(new User(kidName, kidMail, KidPass, 1, 0, "../img/AvatarFields.jpg", "criança",0, 0, 0))
        localStorage.setItem("users", JSON.stringify(users))
        alert("Utilizador Adicionado!")
        userListLoad();
        document.querySelector("#kidCard").style.display = "none";
    } else {
        alert("Utilizador já existe!")
    }
    event.preventDefault();
})

document.querySelector("#adminForm").addEventListener("submit", function (event) {
    const adminName = document.querySelector("#adminName").value
    const adminMail = document.querySelector("#adminMail").value
    const adminPass = document.querySelector("#adminPass").value

    let userExists = false
    for (const user of users) {

        if (adminName === user.username) {
            userExists = true
        }
    }
    if (userExists === false) {
        users.push(new User(adminName, adminMail, adminPass, "1", "0", "../img/Perfil_Side_Icon.png", "admin", "",0, 0))
        localStorage.setItem("users", JSON.stringify(users))
        alert("Administrador Adicionado!")
        userListLoad();
        document.querySelector("#adminCard").style.display = "none";

    } else {
        alert("Administrador já existe!")
    }
    event.preventDefault();
})


document.querySelector("#removeForm").addEventListener("submit", function (event) {
    const removeName = document.querySelector("#removeName").value
    let userIndex = 0
    for (const user of users) {
        userIndex++;
        if (removeName === user.username) {
            users.indexOf(removeName)
            users.splice(userIndex, 1);
            localStorage.setItem("users", JSON.stringify(users))
            userListLoad(); 
        }
    }
    event.preventDefault();
})



userListLoad();

function userListLoad() {
    const userList = document.querySelector("#userList")
    let lista = ""

    for (let i = 0; i < users.length; i++) {

        const name = users[i].username;
        const userType = users[i].userType;
        lista += `<p>${name}: ${userType}</p>`

    }

    userList.innerHTML = lista
}


document.querySelector("#addKid").addEventListener("click", function () {
    document.querySelector("#kidCard").style.display = "block";
    document.querySelector("#adminCard").style.display = "none";
    document.querySelector("#removeCard").style.display = "none";
    document.querySelector("#blockCard").style.display = "none";
    document.querySelector("#unBlockCard").style.display = "none";



})

document.querySelector("#closeKid").addEventListener("click", function () {
    document.querySelector("#kidCard").style.display = "none";
})

document.querySelector("#addAdmin").addEventListener("click", function () {
    document.querySelector("#adminCard").style.display = "block";
    document.querySelector("#kidCard").style.display = "none";
    document.querySelector("#removeCard").style.display = "none";
    document.querySelector("#blockCard").style.display = "none";
    document.querySelector("#unBlockCard").style.display = "none";




})

document.querySelector("#closeAdmin").addEventListener("click", function () {
    document.querySelector("#adminCard").style.display = "none";
})


document.querySelector("#remove").addEventListener("click", function () {
    document.querySelector("#removeCard").style.display = "block";
    document.querySelector("#adminCard").style.display = "none";
    document.querySelector("#kidCard").style.display = "none";
    document.querySelector("#blockCard").style.display = "none";
    document.querySelector("#unBlockCard").style.display = "none";


})

document.querySelector("#closeRemove").addEventListener("click", function () {
    document.querySelector("#removeCard").style.display = "none";
})


document.querySelector("#btnBlock").addEventListener("click", function (event){
    const userName = document.querySelector("#blockName").value
    
    for (const user of users) {
      if(user.username === userName){
        user.blocked = 1
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#blockName").value = ""
        alert("Bloqueado!")
      }
      
    }
  
    event.preventDefault();
  })


  document.querySelector("#blockUsers").addEventListener("click", function () {
    document.querySelector("#blockCard").style.display = "block";
    document.querySelector("#removeCard").style.display = "none";
    document.querySelector("#adminCard").style.display = "none";
    document.querySelector("#kidCard").style.display = "none";
    document.querySelector("#unBlockCard").style.display = "none";

})

document.querySelector("#closeBlock").addEventListener("click", function () {
    document.querySelector("#blockCard").style.display = "none";
})



document.querySelector("#btnUnBlock").addEventListener("click", function (event){
    const userName = document.querySelector("#unBlockName").value
    
    for (const user of users) {
      if(user.username === userName){
        user.blocked = 0
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#unBlockName").value = ""
        alert("Desbloqueado!")
      }
      
    }
  
    event.preventDefault();
  })


  document.querySelector("#unBlockUsers").addEventListener("click", function () {
    document.querySelector("#unBlockCard").style.display = "block";
    document.querySelector("#removeCard").style.display = "none";
    document.querySelector("#adminCard").style.display = "none";
    document.querySelector("#kidCard").style.display = "none";
    document.querySelector("#blockCard").style.display = "none";

})

document.querySelector("#closeUnBlock").addEventListener("click", function () {
    document.querySelector("#unBlockCard").style.display = "none";
})
