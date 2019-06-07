import {
    users,
    sugestions
}
from "../models/Main.js"
import Sugestion from "../models/sugestionsModel.js";
import User from "../models/userModel.js";

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

//Adiciona o nome do utilizador ativo na frase inicial
const welcome = document.querySelector("#welcome")
welcome.innerHTML = "Olá " + userOn + "!"

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Butão que envia a sugestão
document.querySelector("#sugestBtn").addEventListener("click", function () {
    sugestionStorage();
    alert("Enviado")
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

//função que guarda a informação das sugestões
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

//função que avisa o user que a sugestão foi aceite
alertSugestion();

function alertSugestion() {
    let alertS = ""
    for (const user of users) {
        if (user.username === userOn) {
            alertS = user.alert
            if (alertS === 1) {
                alert("Recebeste Pontos de Experiência pela tua sugestão! ")
                user.alert = 0
                localStorage.setItem("users", JSON.stringify(users))
            }
        }
    }
}

//Funão que renderiza o podio
renderHighScore();

function renderHighScore() {
    let scores = []
    users.sort(User.highScore)
    localStorage.setItem("highscores", JSON.stringify(users))
    if (localStorage.getItem("highscores")) {
        scores = JSON.parse(localStorage.getItem("highscores"))
        let first = scores[0].username
        let firstImg = scores[0].userImage
        let firstScore = scores[0].score
        let second = scores[1].username
        let secondImg = scores[1].userImage
        let secondScore = scores[1].score
        let third = scores[2].username
        let thirdImg = scores[2].userImage
        let thirdScore = scores[2].score
        document.querySelector("#stName").innerHTML = first
        document.querySelector("#stImg").src = firstImg
        document.querySelector("#stScore").innerHTML = firstScore + " " + "Pontos"
        document.querySelector("#ndName").innerHTML = second
        document.querySelector("#ndImg").src = secondImg
        document.querySelector("#ndScore").innerHTML = secondScore + " " + "Pontos"
        document.querySelector("#rdName").innerHTML = third
        document.querySelector("#rdImg").src = thirdImg
        document.querySelector("#rdScore").innerHTML = thirdScore + " " + "Pontos"
        console.log(first + second + third)
    }
    console.log(scores)
}