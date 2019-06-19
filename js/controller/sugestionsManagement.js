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

alertSugestion();

function alertSugestion() {
    if (sugestions === undefined || sugestions.length == 0) {
        alert("Não existem Sugestões")
        window.location.href = "../html/BackOffice.html"


    }

}


//carrega todas as sugestões
renderCatalog();

function renderCatalog() {
    const myCatalog = document.querySelector("#myCatalog")
    let result = "";
    let i = 0;
    for (const sugestion of sugestions) {
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
    myCatalog.innerHTML = result

    //botão que recusa uma sugestão
    const btnRefuse = document.getElementsByClassName("refuse")
    for (const elem of btnRefuse) {
        elem.addEventListener("click", function () {
            let userIndex = 0
            for (const sugestion of sugestions) {
                userIndex++;
                for (const user of users) {
                    if (sugestion.username === user.username) {
                        user.alert = 2 //manda um alerta ao utilizador que fez a sugestão
                        localStorage.setItem("users", JSON.stringify(users))
                        let userIndex = 0
                        userIndex++;
                        if (sugestion.monument === this.id) {
                            sugestions.splice(userIndex - 1, 1);
                            localStorage.setItem("sugestions", JSON.stringify(sugestions))
                            alert(`Sugestão de ${sugestion.username} rejeitada!`)
                            renderCatalog();
                        }
                    }
                }
            }
        })
    }

    //botão que aceita uma sugestão
    const btnAccept = document.getElementsByClassName("accept")
    //percorre os botoes todos e escolhe o id personalizado correspondente ao nome do monumento
    for (const elem of btnAccept) {
        elem.addEventListener("click", function () {
            for (const sugestion of sugestions) {
                if (sugestion.monument === this.id) {
                    accepted.push(new Sugestion(sugestion.username, sugestion.monument, sugestion.moreInfo))
                    localStorage.setItem("accepted", JSON.stringify(accepted))
                    alert(`Sugestão de ${sugestion.username} adicionado!`)
                    for (const user of users) {
                        if (sugestion.username === user.username) {
                            user.experience = user.experience + 10 //atribui 10xp ao utilizador que fez a sugestão
                            user.alert = 1 //manda um alerta ao utilizador que fez a sugestão
                            localStorage.setItem("users", JSON.stringify(users))
                            let userIndex = 0
                            userIndex++;
                            if (sugestion.monument === this.id) {
                                sugestions.splice(userIndex - 1, 1);
                                localStorage.setItem("sugestions", JSON.stringify(sugestions))
                                renderCatalog();
                            }
                        }
                    }
                }
            }
        })
    }
}