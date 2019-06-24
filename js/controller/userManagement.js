import
User
from "../models/userModel.js"
import {
    users
}
from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//adiciona um user criança
document.querySelector("#kidForm").addEventListener("submit", function (event) {
    const id = users[users.length - 1]["id"] + 1
    const kidName = document.querySelector("#kidName").value
    const kidMail = document.querySelector("#kidMail").value
    const KidPass = document.querySelector("#kidPass").value
    let userExists = false
    for (const user of users) {
        if (kidName === user.username) {
            userExists = true//utilizador ja existe
        }
    }
    if (userExists === false) {//se nao existir adiciona ao array
        users.push(new User(id, kidName, kidMail, KidPass, 1, 0, "../img/AvatarFields.jpg", "criança", 0, 0, 0))
        localStorage.setItem("users", JSON.stringify(users))//atualiza a localStorage
        alert("Utilizador Adicionado!")//alerta adicionado
        userListLoad();//carrega a lista dos users
        document.querySelector("#kidCard").style.display = "none";
    } else {
        alert("Utilizador já existe!")
    }
    event.preventDefault();
})

//adiciona um user administrador
document.querySelector("#adminForm").addEventListener("submit", function (event) {
    const id = users[users.length - 1]["id"] + 1
    const adminName = document.querySelector("#adminName").value
    const adminMail = document.querySelector("#adminMail").value
    const adminPass = document.querySelector("#adminPass").value
    let userExists = false
    for (const user of users) {
        if (adminName === user.username) {
            userExists = true//ja existe este user
        }
    }
    if (userExists === false) {//se nao existir adiciona ao array
        users.push(new User(id, adminName, adminMail, adminPass, "1", "0", "../img/AvatarAdmin.jpg", "admin", "", 0, 0))
        localStorage.setItem("users", JSON.stringify(users))//atualiza a localStorage
        alert("Administrador Adicionado!")//alerta o admin adicionado
        userListLoad();//atualiza a lista de utilizadores
        document.querySelector("#adminCard").style.display = "none";

    } else {
        alert("Administrador já existe!")
    }
    event.preventDefault();
})

//remove um user
document.querySelector("#removeForm").addEventListener("submit", function (event) {
    const removeName = document.querySelector("#removeName").value
    let userIndex = 0

    if (removeName === userOn) {
        alert("Não te podes remover a ti mesmo!")//nao pode remover o proprio
    } else {
        for (const user of users) {
            userIndex++;//posicao no array users
            if (removeName === user.username) {//percorre o array ate encontrar o user procurado
                users.splice(userIndex - 1, 1);//remove o utilizador procurado
                localStorage.setItem("users", JSON.stringify(users))//atualiza na localStorage
                userListLoad();//atualiza a lista dos users
            }
        }
    }
    event.preventDefault();
})

//Desbloqueia um user
document.querySelector("#btnUnBlock").addEventListener("click", function (event) {
    const userName = document.querySelector("#unBlockName").value
    for (const user of users) {
        if (user.username === userName) {//procura o users a desbloquear
            user.blocked = 0// altera o users de bloqueado para desbloqueado
            localStorage.setItem("users", JSON.stringify(users))//atualiza o array na localStorage
            document.querySelector("#unBlockName").value = ""//limpa o campo de texto
            alert("Desbloqueado!")//alerta que foi desbloqueado
        }
    }
    event.preventDefault();
})

//Bloqueia um user
document.querySelector("#btnBlock").addEventListener("click", function (event) {
    const userName = document.querySelector("#blockName").value
    for (const user of users) {
        if (user.username === userName) {//procura o user a ser bloqueado
            user.blocked = 1//da block no user
            localStorage.setItem("users", JSON.stringify(users))//atualiza o array na localStorage
            document.querySelector("#blockName").value = ""//da reset no campo de texto
            alert("Bloqueado!")
        }
    }
    event.preventDefault();
})

//Abrem e fecham as tags 
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

/* ---------------------------------------------------------------------Funções--------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged")//vai buscar a label
    labelUser.innerHTML = userOn;//atualiza a label para "admin"
    let imgAvatar = ""
    for (const user of users) {
        if (user.username === userOn) {
            imgAvatar = user.userImage//guarda a src do avatar do user
        }
    }
    const userAvatar = document.querySelector("#userAvatar")
    userAvatar.src = imgAvatar//coloca o avatar na navBar
}

//função que renderiza a lista de users
userListLoad();

function userListLoad() {
    const userList = document.querySelector("#userList")
    let lista = ""
    for (let i = 0; i < users.length; i++) {//percorre todos os users e adiciona os a lista
        const name = users[i].username;
        const userType = users[i].userType;
        lista += `<p>${name}: ${userType}</p>`//adiciona ao container cada user com o respetivo tipo de utilizador que é
    }
    userList.innerHTML = lista//coloca a lista na pagina
}