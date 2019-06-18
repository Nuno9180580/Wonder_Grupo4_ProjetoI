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

document.querySelector("#btnSubmit").addEventListener("click",function(){
    removeComment();
})


function removeComment() {
    const removeComment = document.querySelector("#quest").value
    let index = -1
    let userName = ""
    for (const comment of comments) {
        index++;
        userName = comment.username
        if (removeComment == comment.id) {
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments))
            alert("o comentario " + "'" +comment.userComment + "'" + " foi removido com sucesso!")
            alert(userName + " perdeu 5XP")
            for (const user of users) {
                if(userName === user.username){
                    user.experience = user.experience - 5
                  localStorage.setItem("users", JSON.stringify(users))

                }
                
            }
        }
    }
}


document.querySelector("#btnGive").addEventListener("click",function(){
    giveXP();
})
function giveXP() {
    const cmmtID = document.querySelector("#giveXP").value
    let userName = ""
    for (const comment of comments) {
        userName = comment.username
        if (cmmtID == comment.id) {
            for (const user of users) {
                if(userName === user.username){
                    user.experience = user.experience + 3
                  localStorage.setItem("users", JSON.stringify(users))
                    alert("Foram atribuidos 3XP a" + " " +userName)
                }
                
            }
        }
    }
}