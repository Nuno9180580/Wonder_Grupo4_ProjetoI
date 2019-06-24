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
let userTitle //na funcao getUserTitle vai atribuir o titulo a esta variavel

//Adiciona o nome do utilizador ativo na frase inicial
const welcome = document.querySelector("#welcome")
welcome.innerHTML = "Olá " + userOn + "!"

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Butão que envia a sugestão
document.querySelector("#sugestBtn").addEventListener("click", function () {
    sugestionStorage();
    Swal.fire('Sugestão enviada, poderás ser recompensado!')
})

/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/
//funcao que atribui o melhor titulo ao utilizador
getUserTitle()

function getUserTitle() {
    let titles = [] //cria array 
    if (localStorage.titles) { //se existir um array na localStorage
        titles = JSON.parse(localStorage.titles) //atualiza o array definido em cima para o da localStorage
    }
    let titleLevel = 1 //define o nivel do titulo em 1
    for (const title of titles) {
        if (userOn === title.username) { //procura os titulos do user que esta logado
            if (title.name > titleLevel) { //compara todos os titulos do user logado e determina o nivel do titulo mais alto
                titleLevel = title.name //atribui o nivel do titulo mais alto
            }
        }
    }
    switch (titleLevel) { //usa switch para comparar o nivel do titulo e identificar o nome do titulo para ser definido para o user
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
    navBarInfo(); //atualiza a navBar com o nome do novo titulo
}

//Adiciona a Imagem, o Nome do utilizador e o titulo na NavBar
function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged") //vai buscar a label do nome de utilizador e do titulo
    if (userOn != "admin") { //se for criança
        labelUser.innerHTML = userOn + ", " + userTitle; //coloca o nome de utilizador e do titulo na label
    } else {
        labelUser.innerHTML = userOn //se for admin apenas coloca "admin" na label
    }
    let imgAvatar = ""
    for (const user of users) {
        if (user.username === userOn) { //procura o user logado no array dos users
            imgAvatar = user.userImage //guarda a src da imagem do user logado
        }
    }
    const userAvatar = document.querySelector("#userAvatar")
    userAvatar.src = imgAvatar //coloca o avatar na navBar
}

//função que guarda a informação das sugestões
function sugestionStorage() {
    const mnmtName = document.querySelector("#mnmtName").value
    /* vai buscar o valor do input do mnmnt name  e da text area no html */
    const moreInfo = document.querySelector("#moreInfo").value
    let userName = "";
    for (const user of users) {
        if (user.username === userOn) {
            userName = user.username //guarda o nome do utilziador logado para mais tarde inserir no array das sugestoes
        }
    }
    sugestions.push(new Sugestion(userName, mnmtName, moreInfo)) //adiciona uma nova sugestao com o nome de utilizador, nome do monumento e info
    localStorage.setItem("sugestions", JSON.stringify(sugestions)) //atualiza a localStorage pelo array sugestions
    document.querySelector("#mnmtName").value = "" //limpa o campo de texto do nome do monumento sugerido
    document.querySelector("#moreInfo").value = "" //limpa o campo de texto da info do monumento sugerido
}

//função que avisa o user que a sugestão foi aceite
alertSugestion();

function alertSugestion() {
    let alertS = ""
    for (const user of users) {
        if (user.username === userOn) {
            alertS = user.alert
            if (alertS === 1) { //se alertas = 1
                alert("Recebeste Pontos de Experiência pela tua sugestão! ")
                user.alert = 0 //alerta volta a 0
                localStorage.setItem("users", JSON.stringify(users)) //atualiza o array user pela LocalStorage
            } else if (alertS === 2) { //alertas = 2
                alert("A tua sugestão foi rejeitada! ")
                user.alert = 0 //alerta volta a 0
                localStorage.setItem("users", JSON.stringify(users)) //atualiza o array user pela LocalStorage
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
        if (scores[0].username === "admin") { //se o admin for o 1º user com mais pontos, passa uma posicao a frente no array
            first = scores[1].username
            firstImg = scores[1].userImage
            firstScore = scores[1].score
            second = scores[2].username
            secondImg = scores[2].userImage
            secondScore = scores[2].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else if (scores[1].username === "admin") { //se o admin for o 2º user com mais pontos, passa uma posicao a frente no array
            first = scores[0].username
            firstImg = scores[0].userImage
            firstScore = scores[0].score
            second = scores[2].username
            secondImg = scores[2].userImage
            secondScore = scores[2].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else if (scores[2].username === "admin") { //se o admin for o 3º user com mais pontos, passa uma posicao a frente no array
            first = scores[0].username
            firstImg = scores[0].userImage
            firstScore = scores[0].score
            second = scores[1].username
            secondImg = scores[1].userImage
            secondScore = scores[1].score
            third = scores[3].username
            thirdImg = scores[3].userImage
            thirdScore = scores[3].score
        } else { //se o admin nao estiver nos 3 primeiros, renderiza o podio normalmente
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
    let favs = [] //cria array
    monuments.sort(Monument.favoritedMnmt) //ordena pelos mais favoritados
    localStorage.setItem("bestMnmts", JSON.stringify(monuments)) //atualiza a localStorage para os melhores monumentos
    if (localStorage.getItem("bestMnmts")) { //se existir os melhores monumentos na localStorage
        favs = JSON.parse(localStorage.getItem("bestMnmts")) //atualiza o array criado no inicio para o array dos melhores monumentos
        //carrega as informaçoes para o podio dos monumentos
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