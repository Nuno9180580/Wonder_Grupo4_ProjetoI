import User from "./userModel.js"
import Monument from "./monumentModel.js"
import Comment from "../models/commentsModel.js"


//array de utilizadores 
export let users = []

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const userAdmin = new User("admin", "admin", "admin", 5, " ", "../img/Perfil_Side_Icon.png", "admin")
    users.push(userAdmin)
    localStorage.setItem("users", JSON.stringify(users))
}

// Define um array para guardar os objetos monuments
export let monuments = []


// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.monuments) {
    monuments = JSON.parse(localStorage.monuments)
} else {
    // Só vai entrar aqui a primeira vez
    const mnt1 = new Monument("Torre Eiffel", "1889 d.C.", "../img/TorreEiffel.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França","1")
    const mnt2 = new Monument("Pirâmides de Gizé", "1850 a.C.", "../img/PiramidesDeGize.jpg", "Lorem Ipsum", "Cairo", "Egito", "1")
    const mnt3 = new Monument("Big Ben", "1859 d.C.", "../img/BigBen.jpg", "Lorem Ipsum", "Londres", "Reino Unido", "1")
    const mnt4 = new Monument("Stonehendge", "3001 a.C.", "../img/Stonehendge.jpg", "Lorem Ipsum", "Salisbury", "Reino Unido", "1")
    const mnt5 = new Monument("Torre dos Clérigos", "1750 d.C.", "../img/TorreDosClerigos.jpg", "Lorem Ipsum", "Porto", "Portugal", "1")
    const mnt6 = new Monument("Torre de Belém", "1519 d.C.", "../img/TorreDeBelem.jpg", "Lorem Ipsum", "Lisboa", "Portugal", "1")
    const mnt7 = new Monument("Monte Rushmore", "1941 d.C.", "../img/MonteRushmore.jpg", "Lorem Ipsum", "Keystone", "Estados Unidos da América", "2")
    const mnt8 = new Monument("Coliseu de Roma", "80 d.C.", "../img/ColiseuDeRoma.jpg", "Lorem Ipsum", "Roma", "Itália", "2")
    const mnt9 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "2")
    const mnt10 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "2")
    const mnt11 = new Monument("Torre Eiffel", "1889 d.C.", "../img/TorreEiffel.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França","2")
    const mnt12 = new Monument("Pirâmides de Gizé", "1850 a.C.", "../img/PiramidesDeGize.jpg", "Lorem Ipsum", "Cairo", "Egito", "2")
    const mnt13 = new Monument("Big Ben", "1859 d.C.", "../img/BigBen.jpg", "Lorem Ipsum", "Londres", "Reino Unido", "3")
    const mnt14 = new Monument("Stonehendge", "3001 a.C.", "../img/Stonehendge.jpg", "Lorem Ipsum", "Salisbury", "Reino Unido", "3")
    const mnt15 = new Monument("Torre dos Clérigos", "1750 d.C.", "../img/TorreDosClerigos.jpg", "Lorem Ipsum", "Porto", "Portugal", "3")
    const mnt16 = new Monument("Torre de Belém", "1519 d.C.", "../img/TorreDeBelem.jpg", "Lorem Ipsum", "Lisboa", "Portugal", "3")
    const mnt17 = new Monument("Monte Rushmore", "1941 d.C.", "../img/MonteRushmore.jpg", "Lorem Ipsum", "Keystone", "Estados Unidos da América", "3")
    const mnt18 = new Monument("Coliseu de Roma", "80 d.C.", "../img/ColiseuDeRoma.jpg", "Lorem Ipsum", "Roma", "Itália", "3")
    const mnt19 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "4")
    const mnt20 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "4")
    const mnt21 = new Monument("Torre Eiffel", "1889 d.C.", "../img/TorreEiffel.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França","4")
    const mnt22 = new Monument("Pirâmides de Gizé", "1850 a.C.", "../img/PiramidesDeGize.jpg", "Lorem Ipsum", "Cairo", "Egito", "4")
    const mnt23 = new Monument("Big Ben", "1859 d.C.", "../img/BigBen.jpg", "Lorem Ipsum", "Londres", "Reino Unido", "4")
    const mnt24 = new Monument("Stonehendge", "3001 a.C.", "../img/Stonehendge.jpg", "Lorem Ipsum", "Salisbury", "Reino Unido", "4")
    const mnt25 = new Monument("Torre dos Clérigos", "1750 d.C.", "../img/TorreDosClerigos.jpg", "Lorem Ipsum", "Porto", "Portugal", "5")
    const mnt26 = new Monument("Torre de Belém", "1519 d.C.", "../img/TorreDeBelem.jpg", "Lorem Ipsum", "Lisboa", "Portugal", "5")
    const mnt27 = new Monument("Monte Rushmore", "1941 d.C.", "../img/MonteRushmore.jpg", "Lorem Ipsum", "Keystone", "Estados Unidos da América", "5")
    const mnt28 = new Monument("Coliseu de Roma", "80 d.C.", "../img/ColiseuDeRoma.jpg", "Lorem Ipsum", "Roma", "Itália", "5")
    const mnt29 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "5")
    const mnt30 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal", "5")
    monuments.push(mnt1, mnt2, mnt3, mnt4, mnt5, mnt6, mnt7, mnt8, mnt9, mnt10, mnt11, mnt12, mnt13, mnt14, mnt15, mnt16, mnt17, mnt18, mnt19, mnt20, mnt21, mnt22, mnt23, mnt24, mnt25, mnt26, mnt27, mnt28, mnt29, mnt30)
    localStorage.setItem("monuments", JSON.stringify(monuments))
}

// Define um array para guardar os objetos comments
export let comments = []
comments = JSON.parse(localStorage.comments)


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
            users.push(new User(txtUsername, txtEmail, txtPass, 1, 0, "../img/AvatarFields.jpg","criança"))
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
    let userType = ""
    for (const user of users) {
        if (user.username === txtUsername && user.password === txtPass) {
            sessionStorage.setItem("loggedUser", txtUsername)
            userType = user.userType
            existUser = true
            alert(`Bem-vindo ${txtUsername}!`)
            if(userType == "admin"){
                window.location.href = "../html/backOffice.html" //redireciona para a pagina principal
            }
            else{
                window.location.href = "../html/index.html" //redireciona para a pagina principal

            }
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
    alert("Sessão terminada.")
    sessionStorage.removeItem("loggedUser")
    window.location.href = "../html/landingRegister.html"
}