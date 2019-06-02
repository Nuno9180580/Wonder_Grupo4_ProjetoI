import Question from "../models/questionModel.js"

import {
    users
}
from "../models/Main.js"

import {
    questions
} from "../views/quizView.js"

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

document.querySelector("#myForm").addEventListener("submit", function (event) {
    const quest = document.querySelector("#quest").value
    const lvl = document.querySelector("#lvl").value

    let questionsExists = false
    for (const question of questions) {

        if (quest.value === question.question) {
            questionsExists = true
        }
    }
    if (questionsExists === false) {
        questions.push(new Question(quest,"","","","","","",lvl))
        localStorage.setItem("questions", JSON.stringify(questions))
        alert("Pergunta Adicionada!")
    } else {
        alert("Pergunta já existe!")
    }
    event.preventDefault();
})

