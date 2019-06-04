import
User
from "../models/userModel.js"
import {
    users,
    sugestions
}
from "../models/Main.js"

const userOn = sessionStorage.getItem('loggedUser')
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
            <h3 id="sgtName">${sugestion.username} </h3>

            </div>
                <div class="card-body">
                    <h6 id="sgtMnmt"> ${sugestion.monument}</h6>
                    <p id="sgtInfo"> ${sugestion.moreInfo}</p>                                              
                </div>
                <div class="card-footer">
                <button type="button" id=${sugestion.moreInfo}" class="btn accept">Aceitar</button>                                               
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

   const btnRefuse = document.getElementsByClassName("refuse")
   for (const elem of btnRefuse){
    elem.addEventListener("click", function(){
        const info = document.querySelector("#sgtInfo")
        console.log(info.innerHTML)

    })
   }


   const btnAccept = document.getElementsByClassName("accept")
   for (const elem of btnAccept){
    elem.addEventListener("click", function(){
        const info = document.querySelector("#sgtInfo")
        console.log(info.innerHTML)

    })
   }



}






