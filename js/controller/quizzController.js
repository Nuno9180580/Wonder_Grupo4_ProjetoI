import {
    users
}
from "../models/Main.js"
import {
    questions
} from "../views/quizView.js"

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

let numberOfQuestions = questions.length -1;