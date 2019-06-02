import {
    users
}
from "../models/Main.js"
import {
    questions
} from "../views/quizView.js"
import Question from "../models/questionModel.js"

//avatar e nome da pessoa logada
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

//quizz code
const start = document.querySelector("#startQuiz")
const quiz = document.querySelector("#quiz")
const questionImage = document.querySelector("#questionImg")
const question = document.querySelector("#question")
const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const choiceD = document.querySelector("#D")
const quizLevel = document.querySelector("#quizLevel")
const counter = document.querySelector("#counter")
const fillTimeBar = document.querySelector("#barFilling")

//obter o nivel do utilizador para corresponder ao niveis das perguntas
let userLevel = ""
for (const user of users) {
    if (user.username === userOn) {
        console.log(user.level)
        userLevel = user.level
    }
}
//criar array temporario para as questions do nivel do user
let TempQuestions = []
for (const question of questions) {
    if (question.level === userLevel) {
        TempQuestions.push(new Question(question.question, question.imgQuestion, question.choiceA, question.choiceB, question.choiceC, question.choiceD, question.correct, question.level))
        localStorage.setItem("questions", JSON.stringify(TempQuestions))
    }
}

//CHAMA UMA QUESTAO ALEATORIA
/* let range = TempQuestions.length - 1;
let randomIndex = Math.floor((Math.random() * range) + 0); */
let numberOfQuestions = questions.length - 1;

//1. buscar um monumento random
//2. ler a imagem do monumento
//3. vai buscar uma pergunta random
//4. substitui o identificador da resposta e imagem pelo respetivo monumento
//perguntar ao stor os passos para o quiz