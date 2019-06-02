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
    const mnt1 = new Monument("Torre Eiffel", "1889 d.C.", "../img/TorreEiffel.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt2 = new Monument("Pirâmides de Gizé", "1850 a.C.", "../img/PiramidesDeGize.jpg", "Lorem Ipsum", "Cairo", "Egito")
    const mnt3 = new Monument("Big Ben", "1859 d.C.", "../img/BigBen.jpg", "Lorem Ipsum", "Londres", "Reino Unido")
    const mnt4 = new Monument("Stonehendge", "3001 a.C.", "../img/Stonehendge.jpg", "Lorem Ipsum", "Salisbury", "Reino Unido")
    const mnt5 = new Monument("Torre dos Clérigos", "1750 d.C.", "../img/TorreDosClerigos.jpg", "Lorem Ipsum", "Porto", "Portugal")
    const mnt6 = new Monument("Torre de Belém", "1519 d.C.", "../img/TorreDeBelem.jpg", "Lorem Ipsum", "Lisboa", "Portugal")
    const mnt7 = new Monument("Monte Rushmore", "1941 d.C.", "../img/MonteRushmore.jpg", "Lorem Ipsum", "Keystone", "Estados Unidos da América")
    const mnt8 = new Monument("Coliseu de Roma", "80 d.C.", "../img/ColiseuDeRoma.jpg", "Lorem Ipsum", "Roma", "Itália")
    const mnt9 = new Monument("Palácio da Pena", "1854 d.C.", "../img/PalacioDaPena.jpg", "Lorem Ipsum", "Sintra", "Portugal")
    monuments.push(mnt1, mnt2, mnt3, mnt4, mnt5, mnt6, mnt7, mnt8, mnt9)
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
function renderCatalog(filtername = "") {
    const myCatalog = document.querySelector("#myCatalog")
    let result = "";
    let i = 0;
    for (const monument of monuments) {
        if (filtername !== "" && !monument.name.toLowerCase().startsWith(filtername)) {
            continue;
        }
        //criacao da linha
        if (i % 3 === 0) {
            result += `<br><div class = "row">`
        }
        //geraçao do card
        result += ` 
            <div class="col-sm">
            <div id="cardOut" class="card" style="width: 22rem; height: 23.6rem;">
                <div id="cardIn" class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${monument.photo}">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${monument.name}</h5>
                        <button type="button" id="${monument.name}" class="btn btn-info btn-lg view" data-toggle="modal" data-target="#myModal">Detalhes</button>                                               
                        </div>
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




document.querySelector("#searchBar").addEventListener("keyup", function () {
    searchMonument();
})


document.querySelector("#btnSearch").addEventListener("click", function () {
    renderCatalog();
    const searchBar = document.querySelector("#searchBar")
    searchBar.value = "";

})



document.querySelector("#com").addEventListener("submit", function (event) {
    const coments = document.querySelector("#coments")
    const txtarea = document.querySelector("#txtarea").value

    let txtname = "";
    let result = ""

    for (const user of users) {
        if (user.username === userOn) {
            txtname = user.username
        }
        result = `<p> ${txtname}: ${txtarea} </p>`
    }

    coments.innerHTML = result;
    event.preventDefault();

})

