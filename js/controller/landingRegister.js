import {
  users,
  registerSubmit,
}
from "../models/main.js"

const idU = users[users.length -1]["id"]+1


/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//botao que confirma e valida o registo
document.querySelector("#myForm").addEventListener("submit", function (event) {
  //obter os valores dos campos
  const txtUsername = document.querySelector("#txtUsername").value
  const txtEmail = document.querySelector("#txtEmail").value
  const txtPass = document.querySelector("#txtPass").value
  const txtConfirmPass = document.querySelector("#txtConfirmPass").value
  const id = idU
  registerSubmit(id,txtUsername, txtEmail, txtPass, txtConfirmPass)
  event.preventDefault()
})