import User from "./userModel.js"

//array de utilizadores 
export let users = []

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const userAdmin = new User("admin", "admin", "admin")
    users.push(userAdmin)
    localStorage.setItem("users", JSON.stringify(users))
}
//------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------FUNÇÕES--------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

//função para validar o registo para o landing
export function registerSubmit(txtUsername, txtEmail, txtPass, txtConfirmPass) {
    let usernameExists = false
    let emailExists = false
        if (txtPass === txtConfirmPass) {
            for (const user of users) {
                if (user.username === txtUsername) {
                    usernameExists = true
                }
                if (user.email === txtEmail) {
                    emailExists = true
                }
            }
            if (usernameExists === false && emailExists === false) {
                alert("Conta criada com sucesso!")
                users.push(new User(txtUsername, txtEmail, txtPass, "1", "0", "../img/AvatarFields.jpg"))
                localStorage.setItem("users", JSON.stringify(users))
                window.location.href = "../html/landingLogin.html" //redireciona para apagina login
            }
            if (usernameExists === true) {
                document.querySelector("#txtUsername").value = ""
                alert("Nome de Utilizador já existe!")
            } else if (emailExists === true) {
                document.querySelector("#txtEmail").value = ""
                alert("Email já existe!")
            }
        } else {
            alert("As palavras passe não coincidem!")
            document.querySelector("#txtPass").value = ""
            document.querySelector("#txtConfirmPass").value = ""
        }
}

//função para validar o inicio de sessão para o landing
export function loginSubmit(txtUsername, txtPass) {
    let existUser = false
    for (const user of users) {
        if (user.username === txtUsername && user.password === txtPass) {
            sessionStorage.setItem("loggedUser", txtUsername)
            existUser = true
            alert(`Bem-vindo ${txtUsername}!`)
            window.location.href = "../html/index.html" //redireciona para a pagina principal
        }
    }
    if (existUser === false) {
        alert("Dados incorretos!")
        document.querySelector("#txtUsername").value = ""
        document.querySelector("#txtPass").value = ""
    }
    return existUser
}

//função para efetuar logout
export function logout() {
    sessionStorage.removeItem("loggedUser")
}