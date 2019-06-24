import
User
from "../models/userModel.js"
import {
    users,
    sugestions
}
from "../models/Main.js"
import Sugestion from "../models/sugestionsModel.js";

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

//Array sugestões aceites
let accepted = []

//se ja existtir atualiza no array
if (localStorage.accepted) {
    accepted = JSON.parse(localStorage.accepted);
}
/* ---------------------------------------------------------------------Funções--------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged") //obtem a label a ser preenchida
    labelUser.innerHTML = userOn; //preenche a label com o nome de utilizador neste caso admin
    let imgAvatar = ""
    for (const user of users) {
        if (user.username === userOn) {
            imgAvatar = user.userImage //obtem a src do avatar do admin
        }
    }
    const userAvatar = document.querySelector("#userAvatar")
    userAvatar.src = imgAvatar //coloca o avatar na navBar
}

alertSugestion();

function alertSugestion() {
    if (sugestions === undefined || sugestions.length == 0) { //se nao existirem suugestoes
        alert("Não existem Sugestões") //alerta que nao existe
        window.location.href = "../html/BackOffice.html" //redireciona asseguir ao alert para a pagina inicial do backOffice
    }
}

//carrega todas as sugestões
renderCatalog();

function renderCatalog() {
    const myCatalog = document.querySelector("#myCatalog")
    let result = "";
    let i = 0;
    for (const sugestion of sugestions) { //le todas as sugestoes e renderiza as em cards
        if (i % 3 === 0) {
            result += `<br><div class = "row">`
        }
        result += `
        <div class="col-sm">
            <div class="card" style="width: 20rem; height: 23rem;">
            <div class="card-header">
            <h3 id="sgtName" style="color:white; font-family:archivoBlack;">${sugestion.username} </h3>

            </div>
                <div class="card-body">
                    <h3 id="sgtMnmt"> ${sugestion.monument}</h3>
                    <br>
                    <p id="sgtInfo"> ${sugestion.moreInfo}</p>                                              
                <button type="button" id="${sugestion.monument}" class="btn accept">Aceitar</button>                                               
                    <button type="button" id="${sugestion.monument}" class="btn refuse">Recusar</button> 
                </div>
             </div>
        </div>  `
        i++;
        if (i % 3 === 0) {
            result += `</div>`
        }
    }
    myCatalog.innerHTML = result //adiciona as cards ao catalogo das sugestoes

    //botão que recusa uma sugestão
    const btnRefuse = document.getElementsByClassName("refuse") //variavel que vai buscar o botao de recusar sugestao
    for (const elem of btnRefuse) {
        elem.addEventListener("click", function () { //adiciona a cada botao de recusar um evento click
            let userIndex = 0
            for (const sugestion of sugestions) {
                userIndex++;
                for (const user of users) {
                    if (sugestion.username === user.username) { //procura o utilizador que fez a sugestao
                        user.alert = 2 //manda um alerta ao utilizador que fez a sugestão
                        localStorage.setItem("users", JSON.stringify(users)) //atualiza o array users por causa do alert alterado
                        let userIndex = 0 //obtem a posicao da sugstao no array
                        userIndex++;
                        if (sugestion.monument === this.id) {
                            sugestions.splice(userIndex - 1, 1); //apaga a sugestao do array
                            localStorage.setItem("sugestions", JSON.stringify(sugestions)) //atualiza o array na localStorage
                            alert(`Sugestão de ${sugestion.username} rejeitada!`) //alerta que a sugestao foi rejeitada
                            renderCatalog(); //atualiza as sugestoes renderizadas
                        }
                    }
                }
            }
        })
    }

    //botão que aceita uma sugestão
    const btnAccept = document.getElementsByClassName("accept") //variavel que vai buscar o botao de aceitar sugestao
    //percorre os botoes todos e escolhe o id personalizado correspondente ao nome do monumento
    for (const elem of btnAccept) {
        elem.addEventListener("click", function () {
            for (const sugestion of sugestions) {
                if (sugestion.monument === this.id) { //se o monumento da sugestao for igual ao id personalizado do monumento
                    accepted.push(new Sugestion(sugestion.username, sugestion.monument, sugestion.moreInfo)) //adiciona ao array a sugestao aceite
                    localStorage.setItem("accepted", JSON.stringify(accepted)) //atualiza o array na localStorage
                    alert(`Sugestão de ${sugestion.username} adicionado!`) //alerta a sugestao aceite
                    for (const user of users) {
                        if (sugestion.username === user.username) { //procura o user que fez a sugestao para premia lo
                            user.experience = user.experience + 10 //atribui 10xp ao utilizador que fez a sugestão
                            user.alert = 1 //manda um alerta ao utilizador que fez a sugestão
                            localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
                            let userIndex = 0
                            userIndex++;
                            if (sugestion.monument === this.id) {
                                sugestions.splice(userIndex - 1, 1); //remove a sugestao do array das sugestoes visto que foi aceite
                                localStorage.setItem("sugestions", JSON.stringify(sugestions)) //atualiza o array sugestoes
                                renderCatalog(); //atualiza as sugestoes no catalogo
                            }
                        }
                    }
                }
            }
        })
    }
}