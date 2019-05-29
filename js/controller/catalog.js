import Monument from "../models/monumentModel.js"
import {
    users
}
from "../models/Main.js"


// Define um array para guardar os objetos Question

export let monuments = []


// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.monuments) {
    monuments = JSON.parse(localStorage.monuments)
} else {
    // Só vai entrar aqui a primeira vez
    const mnt1 = new Monument("Torre Eiffel", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt2 = new Monument("Piramides de Gize", "1850 A.C", "../img/sample1.jpg", "PIRAMIDES", "Cairo", "Egito")
    const mnt3 = new Monument("Big Ben", "1889", "../img/sample.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt4 = new Monument("Stonehendge", "1889", "../img/sample3.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt5 = new Monument("Torre dos Clerigos", "1889", "../img/sample5.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt6 = new Monument("Torre de Belem", "1889", "../img/sample4.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    monuments.push(mnt1, mnt2, mnt3, mnt4, mnt5, mnt6)
    localStorage.setItem("monuments", JSON.stringify(monuments))
}


function alphabeticalOrder() {
    monuments.sort(Monument.compare)
    localStorage.setItem("monumentos", JSON.stringify(monuments))
    renderCatalog();
}

//Evento Click do Botão Ordem Alfabetica
document.getElementById("btnAlpha").addEventListener("click", function () {
    alphabeticalOrder();

});






//carrega as bandas todas na msm sem filtros
renderCatalog();
//funcao para atualizar as bandas do catalogo
function renderCatalog(filtername="") {
    const myCatalog = document.querySelector("#myCatalog")
    let result = "";
    let i = 0;
    for (const monument of monuments) {
        if(filtername !== "" && !monument.name.toLowerCase().startsWith(filtername)){
            continue;
        }
        //criacao da linha
        if (i % 3 === 0) {
            result += `<br><div class = "row">`
        }
        //geraçao do card
        result += ` 
            <div class="col-sm">
                <div class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${monument.photo}">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${monument.name}</h5>
                        <button type="button" id="${monument.name}" class="btn btn-info btn-lg view" data-toggle="modal" data-target="#myModal">Detalhes</button>                                               
                    </div>
                </div>
            </div>`
        i++;
        if (i % 3 === 0) { //fecha a row
            result += `</div>`
        }
    }
    myCatalog.innerHTML = result

    const btnsSeeMore = document.getElementsByClassName("view")
    for (const elem of btnsSeeMore) {
        elem.addEventListener("click", function () {
            const modalTitle = document.querySelector("#modalTitle")
            const modalImg = document.querySelector("#modalImg")
            const modalCityCountry = document.querySelector("#modalCityCountry")
            const modalYear = document.querySelector("#modalYear")
            const modalDescription = document.querySelector("#modalDescription")

            const myMonument = getMonumentByName(this.id)
            modalTitle.innerHTML = myMonument.name
            modalCityCountry.innerHTML = myMonument.city + ", " + myMonument.country
            modalYear.innerHTML = myMonument.year
            modalDescription.innerHTML = myMonument.description
            modalImg.src = myMonument.photo;
        })
    }

}

function getMonumentByName(name) {
    for (const monument of monuments) {
        if (monument.name === name) {
            return monument

        }

    }
}

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




function searchMonument() {
    const searchBar = document.querySelector("#searchBar").value.toLowerCase()
    for (const monument of monuments) {
        let monumentName = monument.name.toLowerCase()
        if (monumentName.startsWith(searchBar)) {
            renderCatalog(searchBar)
        }
    }
}


document.querySelector("#myBtn3").addEventListener("click", function(){
    searchMonument();
})

document.querySelector("#myBtn4").addEventListener("click", function(){
    renderCatalog();
    const searchBar = document.querySelector("#searchBar")
    searchBar.value = "";    

})