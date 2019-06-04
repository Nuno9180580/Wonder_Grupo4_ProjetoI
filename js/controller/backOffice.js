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

alertSugestion();
function alertSugestion(){
    if (sugestions === undefined || sugestions.length == 0) {
        // array empty or does not exist
    }
    else{
        alert("Existem Sugestões")
    }

}