import {
    users
}
from "../models/Main.js"
import Trophy from "../models/trophiesModel.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

let trophies = []

//se existir atualiza o array
if (localStorage.trophies) {
    trophies = JSON.parse(localStorage.trophies);
}

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

const btn1 = document.querySelector("#btn1").addEventListener("click", function () {
    xp100Medal()
    medal1Acquired()
})
const btn2 = document.querySelector("#btn2").addEventListener("click", function () {
    xp200Medal()
    medal2Acquired()
})
const btn3 = document.querySelector("#btn3").addEventListener("click", function () {
    xp300Medal()
    medal3Acquired()
})
const btn4 = document.querySelector("#btn4").addEventListener("click", function () {
    xp400Medal()
    medal4Acquired()
})
const btn5 = document.querySelector("#btn5").addEventListener("click", function () {
    xp500Medal()
    medal5Acquired()
})
const btn6 = document.querySelector("#btn6").addEventListener("click", function () {
    xp1000Medal()
    medal6Acquired()
})

/* ---------------------------------------------------------------------Funções--------------------------------------------------------------*/
//funcao para ao entrar verificar que medalhas devem aparecer marcadas
checkForMedals()

function checkForMedals() {
    for (const trophy of trophies) {
        if (userOn === trophy.username) {
            console.log(trophy.medal)
            switch (trophy.medal) {
                case "xp100Medal":
                    xp100Medal();
                    break;
                case "xp200Medal":
                    xp200Medal();
                    break;
                case "xp300Medal":
                    xp300Medal();
                    break;
                case "xp400Medal":
                    xp400Medal();
                    break;
                case "xp500Medal":
                    xp500Medal();
                    break;
                case "xp1000Medal":
                    xp1000Medal();
                    break;
                default: //nao faz nada
                    break;
            }
        }
    }
}

//funcao click na 1ª medalha guarda user e medal na localStorage
function xp100Medal() {
    const img = document.querySelector("#img1")
    const changeBorder = document.querySelector("#cardImg1")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 100) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn1").style.visibility = "hidden"; //esconde o botao
    }
}
//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal1Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 100) {
        trophies.push(new Trophy(userOn, "xp100Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}

//funcao click na 2ª medalha guarda user e medal na localStorage
function xp200Medal() {
    const img = document.querySelector("#img2")
    const changeBorder = document.querySelector("#cardImg2")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 200) {
        img.src = "../img/medal2.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn2").style.visibility = "hidden"; //esconde o botao
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal2Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 200) {
        trophies.push(new Trophy(userOn, "xp200Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}

//funcao click na 3ª medalha guarda user e medal na localStorage
function xp300Medal() {
    const img = document.querySelector("#img3")
    const changeBorder = document.querySelector("#cardImg3")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 300) {
        img.src = "../img/medal3.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn3").style.visibility = "hidden"; //esconde o botao
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal3Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 300) {
        trophies.push(new Trophy(userOn, "xp300Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}

//funcao click na 4ª medalha guarda user e medal na localStorage
function xp400Medal() {
    const img = document.querySelector("#img4")
    const changeBorder = document.querySelector("#cardImg4")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 400) {
        img.src = "../img/medal4.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn4").style.visibility = "hidden"; //esconde o botao
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal4Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 400) {
        trophies.push(new Trophy(userOn, "xp400Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}

//funcao click na 5ª medalha guarda user e medal na localStorage
function xp500Medal() {
    const img = document.querySelector("#img5")
    const changeBorder = document.querySelector("#cardImg5")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 500) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn5").style.visibility = "hidden"; //esconde o botao
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal5Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 500) {
        trophies.push(new Trophy(userOn, "xp500Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}

function xp1000Medal() {
    const img = document.querySelector("#img6")
    const changeBorder = document.querySelector("#cardImg6")
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP === 1000) {
        img.src = "../img/medal1.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn6").style.visibility = "hidden"; //esconde o botao
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function medal6Acquired() {
    let XP = ""
    for (const user of users) {
        if (user.username === userOn) {
            XP = user.experience
        }
    }
    if (XP >= 1000) {
        trophies.push(new Trophy(userOn, "xp1000Medal"))
        localStorage.setItem("trophies", JSON.stringify(trophies))
    }
}


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