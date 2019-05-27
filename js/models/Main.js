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
            if (user.name === txtUsername) {
                userExists === true
            } else if (user.email === txtEmail) {
                emailExists === true
            }
        }
        if (usernameExists === false && emailExists === false) {
            alert(`Conta criada com sucesso!`)
            users.push(new User(txtUsername, txtEmail, txtPass, "1", "0", ""))
            localStorage.setItem("users", JSON.stringify(users))
        } else if (usernameExists === true) {
            alert("Nome de Utilizador já existe!")
        } else if (emailExists === true) {
            alert("Email já existe!")
        }
    } else {
        alert("As palavras passe não coincidem!")
    }
}

//função para validar o inicio de sessão para o landing
export function loginSubmit(txtUsername, txtPass) {
    let existUser = false
    for (const user of users) {
        if (user.name === txtUsername && user.password === txtPass) {
            sessionStorage.setItem("loggedUser", txtUsername)
            existUser = true
        }
    }
    return existUser
}

//função para efetuar logout
export function logout() {
    sessionStorage.removeItem("loggedUser")
}