import {
  users,
  registerSubmit,
}
from "../models/main.js"

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//botao que confirma e valida o registo
document.querySelector("#myForm").addEventListener("submit", function (event) {
  //obter os valores dos campos
  const txtUsername = document.querySelector("#txtUsername").value
  const txtEmail = document.querySelector("#txtEmail").value
  const txtPass = document.querySelector("#txtPass").value
  const txtConfirmPass = document.querySelector("#txtConfirmPass").value

  registerSubmit(txtUsername, txtEmail, txtPass, txtConfirmPass)
  event.preventDefault()
})