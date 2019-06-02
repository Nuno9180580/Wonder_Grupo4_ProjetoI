import Monument from "../models/monumentModel.js"
import {
    users,
    monuments
}
from "../models/Main.js"

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

