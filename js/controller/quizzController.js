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

//quiz variaveis e valores
const start = document.querySelector("#startQuiz")
const quiz = document.querySelector("#quiz")
const question = document.querySelector("#question")
const questionImage = document.querySelector("#questionImg")
const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const choiceD = document.querySelector("#D")
const quizLevel = document.querySelector("#quizLevel")
const counter = document.querySelector("#counter")
const fillTimeBar = document.querySelector("#barFilling")


let count = 0;
let questionTime = 20 //20segundos para o contador
const barTimeWidth = 100; //100px de largura da barra do tempo
const barTimeUnit = barTimeWidth / questionTime;
let timer;

//obter o nivel do utilizador para corresponder ao niveis das perguntas
let userLevel = ""
for (const user of users) {
    if (user.username === userOn) {
        userLevel = user.level
    }
}

start.addEventListener("click", quizStart);

//-------------------------------------------FUNÇÕES---------------------------------------------------------//

//start quizz
function quizStart() {
    start.style.display = "none"
    renderQuestion();
    quiz.style.display = "block"
    renderCounter(); //começa o contador
    timer = setInterval(renderCounter, 1000) // executa a funcao de 1 em 1 segundo
}

//funcao para preencher o quiz
function renderQuestion() {
    //muda o nivel do quiz para corresponder ao nivel do utilizador
    quizLevel.innerHTML = userLevel;

    //cria array temporario para as questions do nivel do user
    let tempQuestions = []
    for (const question of questions) {
        if (question.level === userLevel) {
            tempQuestions.push(new Question(question.question, question.imgQuestion, question.choiceA, question.choiceB, question.choiceC, question.choiceD, question.correct, question.level))
            localStorage.setItem("tempQuestions", JSON.stringify(tempQuestions))
        }
    }
    //função que vai buscar pergunta aleatoria ao array temporario
    let range = tempQuestions.length - 1;
    let randomIndex = Math.floor((Math.random() * range) + 0);
    //função que carrega para o quiz a pergunta aleatoria
    question.innerHTML = `<p>${tempQuestions[randomIndex].question}</p>`
    questionImage.innerHTML = `<img src=${tempQuestions[randomIndex].imgQuestion}>`
    choiceA.innerHTML = tempQuestions[randomIndex].choiceA
    choiceB.innerHTML = tempQuestions[randomIndex].choiceB
    choiceC.innerHTML = tempQuestions[randomIndex].choiceC
    choiceD.innerHTML = tempQuestions[randomIndex].choiceD
}

//funcao para o contador do quiz
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count
        fillTimeBar.style.width = count * barTimeUnit + "px";
        count++;
    } else {
        count = 0
    }
}