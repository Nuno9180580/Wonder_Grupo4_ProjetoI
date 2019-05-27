import {
    users,
    loginSubmit
  }
  from "../models/main.js"

const btnLogin = document.querySelector("#btnLogin")

btnLogin.addEventListener("click", function (event) {
    //obter os valores dos campos
    const txtUsername = document.querySelector("#txtUsername").value
    const txtPass = document.querySelector("#txtPass").value

    loginSubmit(txtUsername, txtPass)
    event.preventDefault()
})