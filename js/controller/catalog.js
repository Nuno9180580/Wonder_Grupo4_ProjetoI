import Monument from "../models/monumentModel.js";
import Comment from "../models/commentsModel.js";
import {
  users,
  monuments,
  comments
} from "../models/Main.js";

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem("loggedUser");
const userOnTitle = sessionStorage.getItem('currentTitle')
let userLevel = 0; //variavel para o nivel do utilizador
let favOn = false //variavel para favorito
let filter = ""; //variavel para os filtros

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/




//Evento Click do Botão Ordem Alfabetica de A-Z
document.getElementById("btnAToZ").addEventListener("click", function () {
  aToZ();
  filter = "AZ"
});

//Evento Click do Botão Ordem Alfabetica de Z-A
document.getElementById("btnZToA").addEventListener("click", function () {
  zToA();
  filter = "ZA"
});

//Ao escrever na barra de pesquisa vai automaticamente procurar os Monumentos
document.querySelector("#searchBar").addEventListener("keyup", function () {
  searchMonument();
});

//Remove Os Filtros
document.querySelector("#btnClear").addEventListener("click", function () {
  location.reload();
  filter = "";
});

//Mostrar só os favoritos
document.querySelector("#btnFav").addEventListener("click", function () {
  favOn = true
  renderCatalog();
  toggleFav();

});
/*---------------------------------------------------------------------Funções ---------------------------------------------------------------*/

//Adiciona a Imagem e o Nome do utilizador na NavBar
navBarInfo();

function navBarInfo() {
  const labelUser = document.querySelector("#txtUserLogged"); //vai buscar a label para o nome de utilizador e o titulo
  if (userOn != "admin") { //se for crianca
    labelUser.innerHTML = userOn + ", " + userOnTitle; //adiciona o nome de utilizador e o titulo
  } else {
    labelUser.innerHTML = userOn //se for admin apenas mostra o nome "admin"
  }
  let imgAvatar = ""; //variavel para a src do avatar
  for (const user of users) {
    if (user.username === userOn) {
      imgAvatar = user.userImage; //armazena a src do avatar
    }
  }
  const userAvatar = document.querySelector("#userAvatar"); //vai buscar o elemento img do avatar
  userAvatar.src = imgAvatar; //altera a imagem para o avatar do user
}

//Função que retorna o nivel do user
getUserLvl();

function getUserLvl() {
  for (const user of users) {
    if (userOn == user.username) {
      userLevel = user.level; //percorre os users ate ao user logado e obtem para a variavel definida em cima, o nivel do user atual
    }
  }
}

//Função da barra de pesquisa
function searchMonument() {
  const searchBar = document.querySelector("#searchBar").value.toLowerCase(); //coloca o texto a pesquisar para minusculo para facilitar a comparacao
  for (const monument of monuments) {
    let monumentName = monument.name.toLowerCase(); //coloca cada nome do array dos monumentos para minusculo 
    if (monumentName.includes(searchBar)) { //se no nome do monumento incluir algo do texto a pesquisar
      renderCatalog(searchBar); //da render aos monumentos que correspondem ao texto a pesquisar
    }
  }
}

//Função que retorna o nome do Monumento
function getMonumentByName(name) {
  for (const monument of monuments) {
    if (monument.name === name) {
      return monument;
    }
  }
}

//Função Para ordenar de Z-A
function zToA() {
  monuments.sort(Monument.zToA); //da sort alfabeticamente
  localStorage.setItem("monumentosZA", JSON.stringify(monuments)); //cria na localStorage os monumentos ordenados de Z a A
  renderCatalog(); //da render do catalogo
  toggleFav(); //ativa a funcao para a estrela mudar de cor ao passar por cima
}

//Função Para ordenar de A-Z
function aToZ() {
  monuments.sort(Monument.aToZ); //da sort alfabeticamente
  localStorage.setItem("monumentosAZ", JSON.stringify(monuments)); //cria na localStorage os monumentos ordenados de A a Z
  renderCatalog(); //da render do catalogo
  toggleFav(); //ativa a funcao para a estrela mudar de cor ao passar por cima
}

//funcao para atualizar os Monumentos do catalogo
renderCatalog();

function renderCatalog(filtername = "", abc) {
  const myCatalog = document.querySelector("#myCatalog");
  let result = "";
  let i = 0;

  for (const monument of monuments) {
    if (monument.level > userLevel) { //apresenta os monumentos que sao do nivel do utilizador ou inferior
      continue;
    }

    if (filtername !== "" && !monument.name.toLowerCase().includes(filtername)) { //se existir alguma coisa a pesquisar, continua...
      continue;
    }
    if (favOn == true && !monument.usersFav.includes(userOn)) { //se existirem monumentos favoritados pelo user logado, continua...
      continue;
    }

    //criacao da linha
    if (i % 3 === 0) {
      result += `<br><div class = "row">`;
    }

    let isFavoritedImg = "../img/favEmpty.png";
    let dataFavorited = "False";
    if (monument.usersFav.indexOf(userOn) > -1) { //se o monumento estiver favoritado, altera a estrela para amarela
      dataFavorited = "True";
      isFavoritedImg = "../img/fav.png";
    }

    //geraçao do card
    result += `
            <div class="col-sm">
            <div id="cardOut" class="card" style="width: 22rem; height: 23.9rem;">
                <div id="cardIn" class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${
                      monument.photo
                    }">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${
                          monument.name
                        }</h5>
                        <div id="alignOptions">
                            <button type="button" id="${
                              monument.name
                            }" class="btn btn-info btn-lg view" data-toggle="modal" data-target="#myModal">Sabe Mais!</button>
                            <a id="likeCard">
                            <img class="fav-toggle fav-image image_on" data-favorited="${dataFavorited}" data-id="${
      monument.id
    }" width="60" height="auto" src="${isFavoritedImg}">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `;
    i++;
    //fecha a row
    if (i % 3 === 0) {
      result += `</div>`;
    }
    //codigo que bloqueia o botao comentar se o utilizador for o admin
    let userType = ""
    for (const user of users) {
      if (user.username === userOn) {
        userType = user.userType
      }
    }
    if (userType === "admin") { //depois de ler o array e procura o userType do user logado, se este for = admin, esconde o botao enviar comentario
      document.querySelector("#com").style.display = "none";
    }
  }
  myCatalog.innerHTML = result; //carrega para o catalogo todos os cards 

  //Botão que abre a Modal
  const btnsSeeMore = document.getElementsByClassName("view");
  for (const elem of btnsSeeMore) {
    elem.addEventListener("click", function () {
      const modalTitle = document.querySelector("#modalTitle");
      const modalImg = document.querySelector("#modalImg");
      const modalCityCountry = document.querySelector("#modalCityCountry");
      const modalYear = document.querySelector("#modalYear");
      const modalDescription = document.querySelector("#modalDescription");
      const modalComments = document.querySelector("#comments");
      const googleMaps = document.querySelector("#map");
      const myMonument = getMonumentByName(this.id); //obtem o id do monumento aberto
      modalTitle.innerHTML = myMonument.name;
      modalCityCountry.innerHTML = myMonument.city + ", " + myMonument.country;
      modalYear.innerHTML = myMonument.year;
      modalDescription.innerHTML = myMonument.description;
      modalImg.src = myMonument.photo;
      googleMaps.href = myMonument.linkMap
      //função que adiciona os comentarios nos respetivos monumentos
      renderComments();

      function renderComments() {
        let resultComment = "";
        let userType = ""
        for (const user of users) {
          if (user.username === userOn) {
            userType = user.userType
          }
        }
        if (userType === "criança") { //se o tipo de user logado for criança
          for (const comment of comments) {
            if (comment.monument === myMonument.name) { //percorre o array dos comments, se os comentarios forem do monumento aberto, carrega os comentarios
              if (i % 1 === 0) {
                resultComment += `<div class = "row" id="comentsName">`;
              }
              //geraçao do comentario &nbsp;
              resultComment += `<p><b>${comment.username}:</b> &nbsp;${
                comment.userComment
              } <br> ${comment.date}</p>`;
              i++;
              //fecha a row
              if (i % 1 === 0) {
                resultComment += `</div>`;
              }
            }
          }
          modalComments.innerHTML = resultComment; //adiciona os comments a modal
        } else { //se for admin, carrega na mesma os comments mas adiciona antes de cada um id único para depois ser removido se for o caso
          for (const comment of comments) {
            if (comment.monument === myMonument.name) {
              if (i % 1 === 0) {
                resultComment += `<div class = "row" id="comentsName">`;
              }
              //geraçao do comentario &nbsp;
              resultComment += `<p><b>${comment.id}, ${comment.username}:</b> &nbsp;${
                comment.userComment
              } <br> ${comment.date}</p>`;
              i++;
              //fecha a row
              if (i % 1 === 0) {
                resultComment += `</div>`;
              }
            }
          }
          modalComments.innerHTML = resultComment;
        }
      }

      //Botão que envia os comentários
      document.querySelector("#com").addEventListener("submit", function (event) {
        commentStorage();
        renderComments();
        event.preventDefault();
      });

      //função que guarda os comentarios num array
      function commentStorage() {
        const modalTitle = document.querySelector("#modalTitle").innerHTML; //vai buscar o nome do monumento
        const txtarea = document.querySelector("#txtarea").value; //vai buscar o comentario
        let today = new Date();
        let id = comments[comments.length - 1]["id"] + 1
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        let txtname = "";
        for (const user of users) {
          if (user.username === userOn) {
            txtname = user.username; //le o array users e guarda o nome do user logado
          }
        }
        comments.push(new Comment(id, txtname, txtarea, date, modalTitle)); //adiciona ao array comments o comentario com todas as informaçoes
        localStorage.setItem("comments", JSON.stringify(comments)); //atualiza na localStorage de acordo com o array
        document.querySelector("#txtarea").value = ""; //da reset a caixa de texto do comentario
      }
    });
  }
}

toggleFav();

function toggleFav() {
  let favsImgs = document.getElementsByClassName("fav-image");
  if (favsImgs) {
    const favsImgsArr = Array.from(favsImgs);

    favsImgsArr.forEach(element => {
      element.addEventListener("mouseover", function (elem) {
        if (element.dataset.favorited == "False") {
          element.src = "../img/fav.png";
        } else {
          element.src = "../img/favEmpty.png";
        }
      });
    });

    favsImgsArr.forEach(element => {
      element.addEventListener("mouseout", function (elem) {
        if (element.dataset.favorited == "False") {
          element.src = "../img/favEmpty.png";
        } else {
          element.src = "../img/fav.png";
        }
      });
    });
  }
  // toggle favorited
  let favsList = document.getElementsByClassName("fav-toggle");
  if (favsList) {
    const favsListArr = Array.from(favsList);
    favsListArr.forEach(element => {
      element.addEventListener("click", function (elem) {
        const monumentId = element.dataset.id;
        for (let monument of monuments) {
          if (monumentId == monument["id"]) {
            if (monument.usersFav.indexOf(userOn) > -1) {
              let indexU = monument.usersFav.indexOf(userOn);
              console.log("indexU", indexU);
              monument.usersFav.splice(indexU, 1);
              for (let user of users) {
                if (user.username === userOn) {
                  let indexM = user.monumentsFav.indexOf(monumentId);
                  console.log("indexM", indexM);
                  user.monumentsFav.splice(indexM, 1);
                }
              }

              element.dataset.favorited = "False";
              element.src = "../img/favEmpty.png";
            } else {
              monument.usersFav.push(userOn);
              for (let user of users) {
                if (user.username === userOn) {
                  user.monumentsFav.push(monumentId);
                }
              }
              element.dataset.favorited = "True";
              element.src = "../img/fav.png";
            }
          }
        }
        if (filter === "AZ") {
          localStorage.setItem("monumentosAZ", JSON.stringify(monuments));
        } else if (filter === "ZA") {
          localStorage.setItem("monumentosZA", JSON.stringify(monuments));
        } else {
          localStorage.setItem("monuments", JSON.stringify(monuments));
        }
        localStorage.setItem("users", JSON.stringify(users));
        // renderCatalog();
      });
    });
  }
}