import {
    users,
    sugestions
}
from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged")//vai buscar a label para o nome de utilizador
    labelUser.innerHTML = userOn;//atualiza a label com o nome de utilizador(admin)
    let imgAvatar = ""//variavel para a src do avatar
    for (const user of users) {
        if (user.username === userOn) {
            imgAvatar = user.userImage//armazena a src do avatar
        }
    }
    const userAvatar = document.querySelector("#userAvatar")//vai buscar a img do avatar
    userAvatar.src = imgAvatar//coloca o avatar 
}

//função que alerta se existem sugestôes
alertSugestion();

function alertSugestion() {
    if (sugestions === undefined || sugestions.length == 0) {} // vê se o array existe ou se está vazio
    else {//se o array existir alerta o admin que existem sugestoes
        alert("Existem Sugestões")
    }

}