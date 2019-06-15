import {
  users
} from "../models/Main.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')
const userOnTitle = sessionStorage.getItem('currentTitle')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img1").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img1")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img2").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img2")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img3").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img3")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img4").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img4")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img5").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img5")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
    }
  }
  location.reload();
  event.preventDefault();
})

//Ao clicar na imagem a imagem passa a ser a imagem de perfil
document.querySelector("#img6").addEventListener("click", function (event) {
  const newImg = document.querySelector("#img6")
  for (const user of users) {
    if (user.username === userOn) {
      user.userImage = newImg.src
      localStorage.setItem("users", JSON.stringify(users))
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
  labelUser.innerHTML = userOn + ", " + userOnTitle;
  let imgAvatar = ""
  let userLvl2 = ""
  let userXP = ""
  let email = ""
  let pass = ""
  let userScore = ""
  for (const user of users) {
    if (user.username === userOn) {
      imgAvatar = user.userImage
      userLvl2 = user.level
      userXP = user.experience
      email = user.email
      pass = user.password
      userScore = user.score
    }
  }
  userImg.src = imgAvatar
  userExp.innerHTML = userXP + " XP"
  userExp.style.width = userXP + "px";
  userAvatar.src = imgAvatar
  userLvl.innerHTML = "Nível: " + userLvl2
  userTitle.innerHTML = userOnTitle
  userEmail.value = email;
  userPass.value = pass;
  scoreUser.innerHTML = "Pontuação: " + userScore
}

//Função que alterna as cores da Barra de experiencia
xpBarColor();

function xpBarColor() {
  const userExp = document.querySelector("#xpBar")
  let userXP = 0
  for (const user of users) {
    if (user.username === userOn) {
      userXP = user.experience
    }
  }
  if (userXP <= 200) {
    userExp.style.backgroundColor = "red";

  } else if (userXP >= 200 && userXP <= 550) {
    userExp.style.backgroundColor = "#ffa812";

  } else {
    userExp.style.backgroundColor = "#0aac20";
  }
}

//Funçao que muda a palavra passe
function changePass() {
  const nowPass = document.querySelector("#nowPass")
  const newPass = document.querySelector("#newPass")
  for (const user of users) {
    if (user.username === userOn) {
      if (user.password === nowPass.value) {
        if (newPass.value != nowPass.value) {
          user.password = newPass.value
          alert("alteracao feita")
        } else {
          alert("a senha não pode ser igual à atual!")
        }
      } else {
        alert("a senha atual não é essa!")
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users))
}