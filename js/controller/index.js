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
const userOnTitle = sessionStorage.getItem('currentTitle')

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
//funcao que atribui o melhor titulo ao utilizador
getUserTitle()

function getUserTitle() {
    let titles = []
    if (localStorage.titles) {
        titles = JSON.parse(localStorage.titles)
    }
    let titleLevel = 1
    let userTitle = ""
    for (const title of titles) {
        if (userOn === title.username) {
            if (title.name > titleLevel) {
                titleLevel = title.name
            }
        }
    }
    switch (titleLevel) {
        case 1:
            userTitle = "Novato"
            break;
        case 2:
            userTitle = "Turista"
            break;
        case 3:
            userTitle = "Viajante"
            break;
        case 4:
            userTitle = "Aventureiro"
            break;
        case 5:
            userTitle = "Explorador"
            break;
        case 6:
            userTitle = "Maravilha"
            break;
        default: //nao faz nada
            break;
    }
    //guarda na sessionStorage o titulo do user logado
    sessionStorage.setItem("currentTitle", userTitle);
}

//Adiciona a Imagem, o Nome do utilizador e o titulo na NavBar
navBarInfo();

function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged")
    if (userOn != "admin") {
        labelUser.innerHTML = userOn + ", " + userOnTitle;
    } else {
        labelUser.innerHTML = userOn
    }
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

//Função que renderiza o podio
renderHighScore();

function renderHighScore() {
    let scores = []
    let first = ""
    let firstImg = ""
    let firstScore = ""
    let second = ""
    let secondImg = ""
    let secondScore = ""
    let third = ""
    let thirdImg = ""
    let thirdScore = ""
    users.sort(User.highScore)
    localStorage.setItem("highscores", JSON.stringify(users))
    if (localStorage.getItem("highscores")) {
        scores = JSON.parse(localStorage.getItem("highscores"))
        if (scores[0].username === "admin") {
            first = scores[1].username
            firstImg = scores[1].userImage
            firstScore = scores[1].score
            second = scores[2].username
            secondImg = scores[2].userImage
            secondScore = scores[2].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else if (scores[1].username === "admin") {
            first = scores[0].username
            firstImg = scores[0].userImage
            firstScore = scores[0].score
            second = scores[2].username
            secondImg = scores[2].userImage
            secondScore = scores[2].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else if (scores[2].username === "admin") {
            first = scores[0].username
            firstImg = scores[0].userImage
            firstScore = scores[0].score
            second = scores[1].username
            secondImg = scores[1].userImage
            secondScore = scores[1].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else {
            first = scores[0].username
            firstImg = scores[0].userImage
            firstScore = scores[0].score
            second = scores[1].username
            secondImg = scores[1].userImage
            secondScore = scores[1].score
            third = scores[2].username
            thirdImg = scores[2].userImage
            thirdScore = scores[2].score
        }
        //coloca os valores em cada podio
        document.querySelector("#stName").innerHTML = first
        document.querySelector("#stImg").src = firstImg
        document.querySelector("#stScore").innerHTML = firstScore + " " + "Pontos"
        document.querySelector("#ndName").innerHTML = second
        document.querySelector("#ndImg").src = secondImg
        document.querySelector("#ndScore").innerHTML = secondScore + " " + "Pontos"
        document.querySelector("#rdName").innerHTML = third
        document.querySelector("#rdImg").src = thirdImg
        document.querySelector("#rdScore").innerHTML = thirdScore + " " + "Pontos"
    }
}

//Funão que renderiza os monumentos mais populares

renderFavoritedMnmt();

function renderFavoritedMnmt() {
    let favs = []
    monuments.sort(Monument.favoritedMnmt)
    localStorage.setItem("bestMnmts", JSON.stringify(monuments))
    if (localStorage.getItem("bestMnmts")) {
        favs = JSON.parse(localStorage.getItem("bestMnmts"))
        let first = favs[0].name
        let second = favs[1].name
        let third = favs[2].name
        let firstImg = favs[0].photo
        let secondImg = favs[1].photo
        let thirdImg = favs[2].photo
        document.querySelector("#stFav").innerHTML = first
        document.querySelector("#ndFav").innerHTML = second
        document.querySelector("#rdFav").innerHTML = third
        document.querySelector("#stFavImg").src = firstImg
        document.querySelector("#ndFavImg").src = secondImg
        document.querySelector("#rdFavImg").src = thirdImg


    }
}