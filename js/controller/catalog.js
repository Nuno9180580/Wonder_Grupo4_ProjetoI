import Monument from "../models/monumentModel.js"
import {
    users,
    monuments
}
from "../models/Main.js"

//Função que lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')
let userLevel = 0
for (const user of users) {
    if (userOn == user.username) {
        userLevel = user.level
    }
}

//Evento Click do Botão Ordem Alfabetica de A-Z
document.getElementById("btnAToZ").addEventListener("click", function () {
    aToZ();

});
//Função Para ordenar de A-Z
function aToZ() {
    monuments.sort(Monument.aToZ)
    localStorage.setItem("monumentosAZ", JSON.stringify(monuments))
    renderCatalog();
}


//Evento Click do Botão Ordem Alfabetica de Z-A
document.getElementById("btnZToA").addEventListener("click", function () {
    zToA();

});
//Função Para ordenar de Z-A
function zToA() {
    monuments.sort(Monument.zToA)
    localStorage.setItem("monumentosZA", JSON.stringify(monuments))
    renderCatalog();
}


/* document.querySelector("#europe").addEventListener("click", function () {
   
    let europe = monuments.filter(monument => monument.category === "Europa");

}) */

//carrega os Monumentos todos 
renderCatalog();
//funcao para atualizar os Monumentos do catalogo
function renderCatalog(filtername = "") {

    const myCatalog = document.querySelector("#myCatalog")
    let result = "";
    let i = 0;
    for (const monument of monuments) {
        if (monument.level > userLevel) {
            continue;
        }
        if (filtername !== "" && !monument.name.toLowerCase().includes(filtername)) {
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
        //fecha a row
        if (i % 3 === 0) {
            result += `</div>`
        }
    }
    myCatalog.innerHTML = result

    //Botão que abre a Modal
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

//Função que retorna o nome do Monumento
function getMonumentByName(name) {
    for (const monument of monuments) {
        if (monument.name === name) {
            return monument

        }

    }
}





//Adiciona a Imagem e o Nome do utilizador na NavBar
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



//Função da SearchBar
function searchMonument() {
    const searchBar = document.querySelector("#searchBar").value.toLowerCase()
    for (const monument of monuments) {
        let monumentName = monument.name.toLowerCase()
        if (monumentName.includes(searchBar)) {
            renderCatalog(searchBar)
        }
    }
}



//Ao escrever na searchBar vai automaticamente procurar os Monumentos
document.querySelector("#searchBar").addEventListener("keyup", function () {
    searchMonument();
})

//Remove Os Filtros
document.querySelector("#btnClear").addEventListener("click", function () {
    renderCatalog();

})


//Comentarios
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