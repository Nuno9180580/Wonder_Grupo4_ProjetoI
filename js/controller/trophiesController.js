import {
    users
}
from "../models/Main.js"
import Trophy from "../models/trophiesModel.js"
import Title from "../models/titlesModel.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

let trophies = []

//se existir atualiza o array
if (localStorage.trophies) {
    trophies = JSON.parse(localStorage.trophies);
}

let titles = []

//se existir atualiza o array
if (localStorage.titles) {
    titles = JSON.parse(localStorage.titles);
}

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//botoes das medalhas
document.querySelector("#btn1").addEventListener("click", function () {
    xp100Medal()
    medal1Acquired()
})
document.querySelector("#btn2").addEventListener("click", function () {
    xp200Medal()
    medal2Acquired()
})
document.querySelector("#btn3").addEventListener("click", function () {
    xp300Medal()
    medal3Acquired()
})
document.querySelector("#btn4").addEventListener("click", function () {
    xp400Medal()
    medal4Acquired()
})
document.querySelector("#btn5").addEventListener("click", function () {
    xp500Medal()
    medal5Acquired()
})
document.querySelector("#btn6").addEventListener("click", function () {
    xp1000Medal()
    medal6Acquired()
})

//botoes dos titulos
document.querySelector("#title2").addEventListener("click", function () {
    lvl2Title()
    title2Acquired()
})
document.querySelector("#title3").addEventListener("click", function () {
    lvl3Title()
    title3Acquired()
})
document.querySelector("#title4").addEventListener("click", function () {
    lvl4Title()
    title4Acquired()
})
document.querySelector("#title5").addEventListener("click", function () {
    lvl5Title()
    title5Acquired()
})
document.querySelector("#title6").addEventListener("click", function () {
    lvl6Title()
    title6Acquired()
})

/* ---------------------------------------------------------------------Funções--------------------------------------------------------------*/
//funcao para ao entrar verificar que medalhas devem aparecer marcadas
checkForMedals()

function checkForMedals() {
    for (const trophy of trophies) {
        if (userOn === trophy.username) {
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

//funcao para ao entrar verificar que titulos devem aparecer marcados
checkForTitles()

function checkForTitles() {
    for (const title of titles) {
        if (userOn === title.username) {
            console.log(title.name)
            switch (title.name) {
                case "lvl2":
                    lvl2Title();
                    break;
                case "lvl3":
                    lvl3Title();
                    break;
                case "lvl4":
                    lvl4Title();
                    break;
                case "lvl5":
                    lvl5Title();
                    break;
                case "lvl6":
                    lvl6Title();
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
        document.querySelector("#btn1").style.display = "none" //esconde o botao
        document.querySelector("#xp1").style.display = "block"
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
        document.querySelector("#btn2").style.display = "none"; //esconde o botao
        document.querySelector("#xp2").style.display = "block"
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
        document.querySelector("#btn3").style.display = "none"; //esconde o botao
        document.querySelector("#xp3").style.display = "block"
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
        document.querySelector("#btn4").style.display = "none"; //esconde o botao
        document.querySelector("#xp4").style.display = "block"
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
        img.src = "../img/medal5.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn5").style.display = "none"; //esconde o botao
        document.querySelector("#xp5").style.display = "block"
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
    if (XP >= 1000) {
        img.src = "../img/medal6.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#btn6").style.display = "none"; //esconde o botao
        document.querySelector("#xp6").style.display = "block"
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

//LVL2
//carrega para o array e localStorage a informaçao dos titulos adquiridos
function lvl2Title() {
    const img = document.querySelector("#imgT2")
    const changeBorder = document.querySelector("#cardImgT2")
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 2) {
        img.src = "../img/title2.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#title2").style.display = "none"; //esconde o botao
        document.querySelector("#lvl2").style.display = "block"
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function title2Acquired() {
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 2) {
        titles.push(new Title(userOn, "lvl2"))
        localStorage.setItem("titles", JSON.stringify(titles))
    }
}

//LVL3
//carrega para o array e localStorage a informaçao dos titulos adquiridos
function lvl3Title() {
    const img = document.querySelector("#imgT3")
    const changeBorder = document.querySelector("#cardImgT3")
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 3) {
        img.src = "../img/title3.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#title3").style.display = "none"; //esconde o botao
        document.querySelector("#lvl3").style.display = "block"
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function title3Acquired() {
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 3) {
        titles.push(new Title(userOn, "lvl3"))
        localStorage.setItem("titles", JSON.stringify(titles))
    }
}

//LVL4
//carrega para o array e localStorage a informaçao dos titulos adquiridos
function lvl4Title() {
    const img = document.querySelector("#imgT4")
    const changeBorder = document.querySelector("#cardImgT4")
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 4) {
        img.src = "../img/title4.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#title4").style.display = "none"; //esconde o botao
        document.querySelector("#lvl4").style.display = "block"
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function title4Acquired() {
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 4) {
        titles.push(new Title(userOn, "lvl4"))
        localStorage.setItem("titles", JSON.stringify(titles))
    }
}

//LVL5
//carrega para o array e localStorage a informaçao dos titulos adquiridos
function lvl5Title() {
    const img = document.querySelector("#imgT5")
    const changeBorder = document.querySelector("#cardImgT5")
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 5) {
        img.src = "../img/title5.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#title5").style.display = "none"; //esconde o botao
        document.querySelector("#lvl5").style.display = "block"
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function title5Acquired() {
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 5) {
        titles.push(new Title(userOn, "lvl5"))
        localStorage.setItem("titles", JSON.stringify(titles))
    }
}

//LVL5
//carrega para o array e localStorage a informaçao dos titulos adquiridos
function lvl6Title() {
    const img = document.querySelector("#imgT6")
    const changeBorder = document.querySelector("#cardImgT6")
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 6) {
        img.src = "../img/title6.png"
        changeBorder.style.border = "3px solid #eb2020";
        document.querySelector("#title6").style.display = "none"; //esconde o botao
        document.querySelector("#lvl6").style.display = "block"
    }
}

//carrega para o array e localStorage a informaçao das medalhas adquiridas
function title6Acquired() {
    let level = ""
    for (const user of users) {
        if (user.username === userOn) {
            level = user.level
        }
    }
    if (level >= 6) {
        titles.push(new Title(userOn, "lvl6"))
        localStorage.setItem("titles", JSON.stringify(titles))
    }
}