import Monument from "../models/monumentModel.js"
import Comment from "../models/commentsModel.js"
import {
    users,
    monuments,
    comments
}
from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')
let userLevel = 0



/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Evento Click do Botão Ordem Alfabetica de A-Z
document.getElementById("btnAToZ").addEventListener("click", function () {
    aToZ();
});

//Evento Click do Botão Ordem Alfabetica de Z-A
document.getElementById("btnZToA").addEventListener("click", function () {
    zToA();
});

//Ao escrever na barra de pesquisa vai automaticamente procurar os Monumentos
document.querySelector("#searchBar").addEventListener("keyup", function () {
    searchMonument();
})

//Remove Os Filtros
document.querySelector("#btnClear").addEventListener("click", function () {
    renderCatalog();
})


/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
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
}

//Função que retorna o nivel do user
getUserLvl();

function getUserLvl() {
    for (const user of users) {
        if (userOn == user.username) {
            userLevel = user.level
        }
    }
}


//Função da barra de pesquisa
function searchMonument() {
    const searchBar = document.querySelector("#searchBar").value.toLowerCase()
    for (const monument of monuments) {
        let monumentName = monument.name.toLowerCase()
        if (monumentName.includes(searchBar)) {
            renderCatalog(searchBar)
        }
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

//funcoes para mudar as imagens quando hover ou não
function hover(source) {
    source.src = "../img/fav.png"
}

function unhover(source) {
    element.src = "../img/favEmpty.png"
}

//Função Para ordenar de Z-A
function zToA() {
    monuments.sort(Monument.zToA)
    localStorage.setItem("monumentosZA", JSON.stringify(monuments))
    renderCatalog();
}

//Função Para ordenar de A-Z
function aToZ() {
    monuments.sort(Monument.aToZ)
    localStorage.setItem("monumentosAZ", JSON.stringify(monuments))
    renderCatalog();
}

//funcao para atualizar os Monumentos do catalogo
renderCatalog();

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
            <div id="cardOut" class="card" style="width: 22rem; height: 23.9rem;">
                <div id="cardIn" class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${monument.photo}">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${monument.name}</h5>
                        <div id="alignOptions">
                            <button type="button" id="${monument.name}" class="btn btn-info btn-lg view" data-toggle="modal" data-target="#myModal">Sabe Mais!</button>     
                            <a id="likeCard">
                            <img class="image_on" width="60" height="auto" src="../img/favEmpty.png"><img class="image_off" width="60" height="auto" src="../img/fav.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `
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
            const modalComments = document.querySelector("#comments")
            const myMonument = getMonumentByName(this.id)
            modalTitle.innerHTML = myMonument.name
            modalCityCountry.innerHTML = myMonument.city + ", " + myMonument.country
            modalYear.innerHTML = myMonument.year
            modalDescription.innerHTML = myMonument.description
            modalImg.src = myMonument.photo;

            //função que adiciona os comentarios nos respetivos monumentos
            renderComments();

            function renderComments() {
                let resultComment = ""
                for (const comment of comments) {
                    if (comment.monument === myMonument.name) {
                        if (i % 1 === 0) {
                            resultComment += `<div class = "row" id="comentsName">`
                        }
                        //geraçao do comentario &nbsp;
                        resultComment += `<p><b>${comment.username}:</b> &nbsp;${comment.userComment} <br> ${comment.date}</p>`
                        i++;
                        //fecha a row
                        if (i % 1 === 0) {
                            resultComment += `</div>`
                        }
                    }
                }
                modalComments.innerHTML = resultComment
            }

            //Botão que envia os comentários
            document.querySelector("#com").addEventListener("submit", function (event) {
                commentStorage();
                renderComments();
                event.preventDefault();
            })

            //função que guarda os comentarios num array
            function commentStorage() {
                const modalTitle = document.querySelector("#modalTitle").innerHTML
                const txtarea = document.querySelector("#txtarea").value
                let today = new Date();
                let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                let txtname = "";
                for (const user of users) {
                    if (user.username === userOn) {
                        txtname = user.username
                    }
                }
                comments.push(new Comment(txtname, txtarea, date, modalTitle))
                localStorage.setItem("comments", JSON.stringify(comments))
                document.querySelector("#txtarea").value = ""
            }
        })
    }
}