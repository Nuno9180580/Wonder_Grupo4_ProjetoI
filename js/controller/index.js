import {
    users,
    sugestions
}
from "../models/Main.js"
import Sugestion from "../models/sugestionsModel.js";
import User from "../models/userModel.js";

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


function sugestionStorage() {
    const mnmtName = document.querySelector("#mnmtName").value
    /* vai buscar o valor do input do mnmnt name  e da text area no html */
    const moreInfo = document.querySelector("#moreInfo").value
    let userName = "";

    for (const user of users) {
        if (user.username === userOn) {
            userName = user.username
        }
    }
    sugestions.push(new Sugestion(userName, mnmtName, moreInfo))
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
    document.querySelector("#mnmtName").value = ""
    document.querySelector("#moreInfo").value = ""



}
document.querySelector("#sugestBtn").addEventListener("click", function () {
    sugestionStorage();
    alert("Enviado")
})


alertSugestion();

function alertSugestion() {
    let alertS = ""
    for (const user of users) {
        if (user.userType === "criança") {
            alertS = user.alert
            if (alertS === 1) {
                alert("Recebeste 10XP pela tua sugestão! ")
            }
        }
    }
}


    

highScore();
function highScore() {

    let scores = []
   users.sort(User.highScore)
    localStorage.setItem("highscores", JSON.stringify(users))

    
    if(localStorage.getItem("highscores")){

        scores = JSON.parse(localStorage.getItem("highscores"))

        let first = scores[0].username
        let firstImg = scores[0].userImage
        let firstScore = scores[0].score

        let second = scores[1].username
        let secondImg = scores[1].userImage
        let secondScore = scores[1].score

        let third = scores[2].username
        let thirdImg = scores[2].userImage
        let thirdScore= scores[2].score

        document.querySelector("#stName").innerHTML = first
        document.querySelector("#stImg").src = firstImg
        document.querySelector("#stScore").innerHTML = firstScore + " " + "Pontos"
       
        console.log(first + second + third)
    }


    console.log(scores)
    

    
}

