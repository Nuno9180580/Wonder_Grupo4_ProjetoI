import {
    users,
    comments
}
from "../models/Main.js"
//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

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

document.querySelector("#btnSubmit").addEventListener("click", function () {
    removeComment();
})


function removeComment() {
    const removeComment = document.querySelector("#quest").value //id do comentario a remover
    let index = -1 //obtem a posicao do comentario
    let userName = ""
    for (const comment of comments) {
        index++;
        userName = comment.username
        if (removeComment == comment.id) { //compara o id a pesquisar com o id de cada comentario do array a ser lido
            comments.splice(index, 1); //remove dos comentarios o array com a posicaao obtida em cima
            localStorage.setItem("comments", JSON.stringify(comments)) //atualiza a localStrorage com o array atualizado comments
            alert("o comentario " + "'" + comment.userComment + "'" + " foi removido com sucesso!") //alerta o comentario que foi removido
            alert(userName + " perdeu 5XP") //alerta que o user desse comentario perdeu xp pelo comentario improprio
            for (const user of users) {
                if (userName === user.username) { //vai ao array dos users, encontra o user do comentario eliminado
                    user.experience = user.experience - 5 //remove 5 xp do user 
                    localStorage.setItem("users", JSON.stringify(users)) //atualiza o array dos users pela localStorage
                }
            }
        }
    }
}


document.querySelector("#btnGive").addEventListener("click", function () {
    giveXP();
})

function giveXP() {
    const cmmtID = document.querySelector("#giveXP").value //id do comentario a ser premiado
    let userName = "" //variavel para o nome do utilizador que fez o comentario
    for (const comment of comments) {
        userName = comment.username
        if (cmmtID == comment.id) { //procura o comentario pelo id
            for (const user of users) {
                if (userName === user.username) { //procura o nome do user que fez o comentario
                    user.experience = user.experience + 3 //atribui 3XP ao premiar o comentario
                    localStorage.setItem("users", JSON.stringify(users))//atualiza o array users pela localStorage
                    alert("Foram atribuidos 3XP a" + " " + userName)//alerta a atribuiçao de XP
                }
            }
        }
    }
}