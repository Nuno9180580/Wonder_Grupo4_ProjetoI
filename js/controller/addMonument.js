import
Monument
from "../models/monumentModel.js"
import {
    users,
    monuments
}
from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

let acceptedSugests = []

acceptedSugests = JSON.parse(localStorage.getItem("accepted"))
/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Botão que adiciona um novo Monumento
document.querySelector("#addForm").addEventListener("submit", function (event) {
    newMonument();
    document.querySelector("#name").value = ""
    document.querySelector("#country").value = ""
    document.querySelector("#city").value = ""
    document.querySelector("#year").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#img").value = ""
    document.querySelector("#lvl").value = ""
    document.querySelector("#map").value = ""

})

//Botão e função que elimina um Monumento
document.querySelector("#removeForm").addEventListener("submit", function (event) {
    removeMonument();
    //da reset na caixa de texto 
    document.querySelector("#removeMonument").value = ""
})

/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
    const labelUser = document.querySelector("#txtUserLogged")//label para o nome do utilizador logado e titulo
    labelUser.innerHTML = userOn;//adiciona à label o nome de utilizador logado
    let imgAvatar = ""//variavel para armazenar o src do avatar do user
    for (const user of users) {
        if (user.username === userOn) {//corre no array users ate encontrar o user logado
            imgAvatar = user.userImage//armazena o src do avatar na variavel
        }
    }
    const userAvatar = document.querySelector("#userAvatar")//vai buscar a img do avatar 
    userAvatar.src = imgAvatar//altera o avatar
}

//Adiciona na lista todos os monumentos existentes
monumentListLoad();

function monumentListLoad() {
    const monumentList = document.querySelector("#monumentList")
    let lista = ""
    for (let i = 0; i < monuments.length; i++) {
        const name = monuments[i].name;
        lista += `<p>${name}</p>`
    }
    monumentList.innerHTML = lista
}

//Adiciona na lista todos as sugestoes aceites
sugestionListLoad();

function sugestionListLoad() {//carrega para o container a lista das sugestoes aceites
    const addToList = document.querySelector("#sugestionList")//vai buscar o id do container
    let sugestionsList = `<h2 id="titleSugestions">Sugestões Aceites</h2>`//Titulo para o container
    for (let i = 0; i < acceptedSugests.length; i++) {
        sugestionsList += `<p>${acceptedSugests[i].monument}</p>`//adiciona cada sugestao a variavel que vai ser injetada no queryselector
    }
    addToList.innerHTML = sugestionsList//adiciona ao container a lista das sugestoes aceites
}

//função que adiciona um novo Monumento
function newMonument() {
    const id = monuments[monuments.length - 1]["id"] + 1
    const name = document.querySelector("#name").value
    const country = document.querySelector("#country").value
    const city = document.querySelector("#city").value
    const year = document.querySelector("#year").value
    const description = document.querySelector("#description").value
    const img = document.querySelector("#img").value
    const lvl = document.querySelector("#lvl").value
    const map = document.querySelector("#map").value

    let monumentExists = false//variavel para verificar se existe monumento
    let sugestionExists = false//variavel para verificar se existe sugestao
    for (const monument of monuments) {
        if (name.value === monument.name) {
            monumentExists = true//se o nome do monumento proposto ja existe no array, passa a true a variavel
        }
    }
    if (monumentExists === false) {//se o monumento nao existir
        for (const accepted of acceptedSugests) {
            if (accepted.monument === name) {
                sugestionExists = true//se o nome do sugestao proposta ja existe no array, passa a true a variavel
            }
        }
        if (sugestionExists === true) { //se existir nas sugestoes remove das sugestoes e adiciona ao monumentos
            let index = -1//variavel para obter a posicao da sugestao no array das sugestoes aceites, para posteriormente remove la
            for (const accepted of acceptedSugests) {
                index++;
                if (accepted.monument === name) {
                    acceptedSugests.splice(index, 1);//remove das sugestoes aceites
                    localStorage.setItem("accepted", JSON.stringify(acceptedSugests))//atualiza o array das sugestoes aceites na localStorage
                }
            }
            monuments.push(new Monument(id, name, year, img, description, city, country, lvl,false,[] , map))//adiciona a sugestao aceite ao array monumentos
            localStorage.setItem("monuments", JSON.stringify(monuments))//atualiza a localStorage de acordo com o array monumentos
            monumentListLoad();//atualiza a lista dos monumentos
            sugestionListLoad();//atualiza a lista das sugestoes
            alert("Monumento Adicionado!")//alerta o utilizador que o monumento foi adicionado
        } else {//caso a sugestao nao exista nas sugestoes aceites, entao não é necessario remover do array, apenas adicionar
            monuments.push(new Monument(id, name, year, img, description, city, country, lvl,false, [],map))//adiciona a sugestao aceite ao array monumentos
            localStorage.setItem("monuments", JSON.stringify(monuments))//atualiza a localStorage de acordo com o array monumentos
            monumentListLoad();//atualiza a lista dos monumentos
            sugestionListLoad();//atualiza a lista das sugestoes 
            alert("Monumento Adicionado!")//alerta o utilizador que o monumento foi adicionado
        }

    } else {
        alert("Este Monumento já existe!")//caso ja exista o monumento aparece um alert
    }
    event.preventDefault();
}

//Botão que elimina um Monumento
function removeMonument() {
    const removeMonument = document.querySelector("#removeMonument").value//obtem o valor da caixa de texto
    let index = -1//variavel para obter a posicao do monumento a remover
    for (const monument of monuments) {
        index++;
        if (removeMonument === monument.name) {//vai ao array compara o nome do monumento com o da caixa de texto
            monuments.splice(index, 1);//vai ao array e remove 1 elemento apartir da posicao obtida com a variavel descrita acima
            localStorage.setItem("monuments", JSON.stringify(monuments))//atualiza a localStorage com o array dos monumentos
            alert("Monumento Removido com sucesso!")//alerta que foi removido do monumento
            monumentListLoad();//atualiza a lista de monumentos
            sugestionListLoad();//atualiza a lista de sugestoes (por prevencao)
        }
    }
    event.preventDefault();
}