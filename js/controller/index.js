import {
    users,
    sugestions,
    monuments
}
from "../models/Main.js"
import Sugestion from "../models/sugestionsModel.js";
import User from "../models/userModel.js";
import Monument from "../models/monumentModel.js";

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

//Funão que renderiza os monumentos mais populares

renderFavoritedMnmt();
function renderFavoritedMnmt(){
    let favs = []
    monuments.sort(Monument.favoritedMnmt)
    localStorage.setItem("bestMnmts", JSON.stringify(monuments))
    if (localStorage.getItem("bestMnmts")) {
        favs = JSON.parse(localStorage.getItem("bestMnmts"))
        let first = favs[0].name
        let second = favs[1].name
        let third = favs[2].name  
        let firstImg   = favs[0].photo
        let secondImg  = favs[1].photo
        let thirdImg = favs[2].photo
        let firstScore = favs[0].usersFav.length
        let secondScore = favs[0].usersFav.length
        let thirdScore = favs[0].usersFav.length
        document.querySelector("#stFav").innerHTML = "1º" + first
        document.querySelector("#ndFav").innerHTML =  "2º" + second
        document.querySelector("#rdFav").innerHTML =  "3º" + third
        document.querySelector("#stFavImg").src =  firstImg
        document.querySelector("#ndFavImg").src =  secondImg
        document.querySelector("#rdFavImg").src =  thirdImg
        document.querySelector("#stFavScore").innerHTML = firstScore + " " + "Favoritos"
        document.querySelector("#ndFavScore").innerHTML = secondScore + " " + "Favoritos"
        document.querySelector("#rdFavScore").innerHTML = thirdScore   + " " + "Favoritos"


    }
}