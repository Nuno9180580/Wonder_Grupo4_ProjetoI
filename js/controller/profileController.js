import {
  users
} from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')
const userOnTitle = sessionStorage.getItem('currentTitle')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img1").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img1") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img2").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img2") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img3").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img3") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img4").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img4") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img5").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img5") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img6").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img6") //vai buscar o id da imagem a ser clicada
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src //altera a imagem para a escolhida no array users
      localStorage.setItem("users", JSON.stringify(users)) //atualiza o array na localStorage
    }
  }
  location.reload();
  event.preventDefault();
})

//botao de mudar a palavra passe
document.querySelector("#submitNewPass").addEventListener("click", function (event) {
  changePass();
  event.preventDefault();
})

/* ---------------------------------------------------------------------Funções--------------------------------------------------------*/

//Função que adiciona a informaçaõ do utilizador no perfil
renderUserInfo();

function renderUserInfo() {
  //vai buscar todos os campos para preencher
  const labelUser = document.querySelector("#txtUserLogged")
  const cardTitle = document.querySelector("#cardTitle")
  const userAvatar = document.querySelector("#userAvatar")
  const userLvl = document.querySelector("#currentLvl")
  const userTitle = document.querySelector("#currentTitle")
  const userExp = document.querySelector("#xpBar")
  const userImg = document.querySelector("#cardImg")
  const userEmail = document.querySelector("#emailAdress")
  const userPass = document.querySelector("#passWord")
  const scoreUser = document.querySelector("#scoreLabel")
  cardTitle.innerHTML = userOn;
  if (userOn != "admin") {//se for criança
    labelUser.innerHTML = userOn + ", " + userOnTitle;//atualiza a label na navBar para o nome de utilizador e titulo
  } else {// se for admin
    labelUser.innerHTML = userOn//atualiza a label na navBar para o nome de utilizador(admin)
  }
  //variaveis para as informaçoes obtidas do user
  let imgAvatar = ""
  let userLvl2 = ""
  let userXP = ""
  let email = ""
  let pass = ""
  let userScore = ""
  for (const user of users) {
    if (user.username === userOn) {//encontra o user logado e carrega todas as informaçoes para as variaveis definidas acima
      imgAvatar = user.userImage
      userLvl2 = user.level
      userXP = user.experience
      email = user.email
      pass = user.password
      userScore = user.score
    }
  }
  //injeta todas as informaçoes na pagina
  userImg.src = imgAvatar
  userExp.innerHTML = userXP + " XP"
  userExp.style.width = userXP + "px";
  userAvatar.src = imgAvatar
  userLvl.innerHTML = "Nível: " + userLvl2
  if (userOn != "admin") {//se for criança aparece o titulo no card do perfil
    userTitle.innerHTML = userOnTitle
  } else {//se for admin nao aparece titulo
    userTitle.innerHTML = ""
  }
  userEmail.value = email;
  userPass.value = pass;
  scoreUser.innerHTML = "Pontuação: " + userScore
}

//Função que alterna as cores da Barra de experiencia
xpBarColor();

function xpBarColor() {
  const userExp = document.querySelector("#xpBar")//obtem a barra de experiencia
  let userXP = 0
  for (const user of users) {
    if (user.username === userOn) {//encontra o user logado e carrega o xp dele para a variavel
      userXP = user.experience
    }
  }
  if (userXP <= 200) {//alteracao das cores de acordo com o xp do user
    userExp.style.backgroundColor = "red";

  } else if (userXP >= 200 && userXP <= 550) {
    userExp.style.backgroundColor = "#ffa812";

  } else {
    userExp.style.backgroundColor = "#0aac20";
  }
}

//Funçao que muda a palavra passe
function changePass() {
  const nowPass = document.querySelector("#nowPass")//campo de texto da palavra passe antiga
  const newPass = document.querySelector("#newPass")//campo de texto da palavra passe nova
  for (const user of users) {
    if (user.username === userOn) {//encontra o utilizador logado
      if (user.password === nowPass.value) {//verifica se a palavra passe atual e antiga coincidem
        if (newPass.value != nowPass.value) {//verifica se a nova palavra passe é diferente da atual
          user.password = newPass.value//atualiza a palavra passe no array
          alert("Alteracão Feita!")
        } else {
          alert("A senha não pode ser igual à atual!")
        }
      } else {
        alert("A senha atual não é essa!")
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users))//atualiza o array na localStorage de acordo com o array
}