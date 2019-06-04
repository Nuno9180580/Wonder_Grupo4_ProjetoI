import {
    users,
    sugestions
}
from "../models/Main.js"
import Sugestion from "../models/sugestionsModel.js";

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

const welcome = document.querySelector("#welcome")
welcome.innerHTML = "Olá " + userOn + "!"


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
    sugestions.push(new Sugestion(userName, mnmtName, moreInfo ))
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
    document.querySelector("#mnmtName").value = ""
    document.querySelector("#moreInfo").value = "" 



}
document.querySelector("#sugestBtn").addEventListener("click", function(){
    sugestionStorage();
    alert("Enviado")
})


alertSugestion();

function alertSugestion(){
    let alertS = ""
    for (const user of users) {
        if (user.userType === "criança") 
        {
           alertS = user.alert
           if(alertS === 1)
           {
                alert("Recebeste 10XP pela tua sugestão! ")
           }
        }
    }
}


