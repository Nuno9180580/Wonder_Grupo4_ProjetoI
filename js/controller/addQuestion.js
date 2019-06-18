import Question from "../models/questionModel.js"
import {
    users
}
from "../models/Main.js"
import {
    questions
} from "../views/quizView.js"

//Lê o Utilizador Ativo
const userOn = sessionStorage.getItem('loggedUser')

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//botão que adiciona uma pergunta
document.querySelector("#myForm").addEventListener("submit", function (event) {
    addQuestion();
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

//função que adiciona uma pergunta
function addQuestion() {
    const quest = document.querySelector("#quest").value
    const questImg = document.querySelector("#questImg").value
    const choiceA = document.querySelector("#choiceA").value
    const choiceB = document.querySelector("#choiceB").value
    const choiceC = document.querySelector("#choiceC").value
    const ChoiceD = document.querySelector("#choiceD").value
    const correctChoice = document.querySelector("#correctChoice").value
    const lvl = document.querySelector("#lvl").value

    let questionsExists = false
    for (const question of questions) {

        if (quest.value === question.question) {
            questionsExists = true
        }
    }
    if (questionsExists === false) {
        questions.push(new Question(quest, questImg, choiceA, choiceB, choiceC, ChoiceD, correctChoice, lvl))
        localStorage.setItem("questions", JSON.stringify(questions))
        alert("Pergunta Adicionada!")
    } else {
        alert("Pergunta já existe!")
    }
    event.preventDefault();
}