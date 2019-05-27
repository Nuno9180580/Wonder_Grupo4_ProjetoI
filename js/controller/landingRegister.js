import {
  users,
  changeCardContent,
  registerSubmit,
  loginSubmit
}
from "../models/main.js"

const changeToLogin = document.querySelector("#btnChangeToLogin")
const btnRegister = document.querySelector("#btnRegister")
const btnLogin = document.querySelector("#btnLogin")

//clica no botao iniciar sessao e altera os campos do form
changeToLogin.addEventListener("click", function () {
  //funcao que muda o conteudo do form para os campos necessários ao login
  
})

//clica e valida o registo
btnRegister.addEventListener("click", function (event) {
  //obter os valores dos campos
  const txtUsername = document.querySelector("#txtUsername").value
  const txtEmail = document.querySelector("#txtEmail").value
  const txtPass = document.querySelector("#txtPass").value
  const txtConfirmPass = document.querySelector("#txtConfirmPass").value

  registerSubmit(txtUsername, txtEmail, txtPass, txtConfirmPass)
  event.preventDefault()
})

btnLogin.addEventListener("click", function (event) {
  //obter os valores dos campos
  const txtUsername = document.querySelector("#txtUsername").value
  const txtPass = document.querySelector("#txtPass").value

  loginSubmit(txtUsername, txtPass)
  event.preventDefault()
})