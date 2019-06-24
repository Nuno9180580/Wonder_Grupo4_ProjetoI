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
    const labelUser = document.querySelector("#txtUserLogged")//vai buscar a label para ser adicionado o nome de utilizador ( admin )
    labelUser.innerHTML = userOn;//adiciona o nome a label
    let imgAvatar = ""//variavel para a src do avatar
    for (const user of users) {
        if (user.username === userOn) {
            imgAvatar = user.userImage//guarda a src do avatar
        }
    }
    const userAvatar = document.querySelector("#userAvatar")//vai buscar a img para o avatar
    userAvatar.src = imgAvatar//define a imagem como avatar
}

//função que adiciona uma pergunta
function addQuestion() {
    //vai buscar todos os valores de todas as caixas de texto
    const quest = document.querySelector("#quest").value
    const questImg = document.querySelector("#questImg").value
    const choiceA = document.querySelector("#choiceA").value
    const choiceB = document.querySelector("#choiceB").value
    const choiceC = document.querySelector("#choiceC").value
    const ChoiceD = document.querySelector("#choiceD").value
    const correctChoice = document.querySelector("#correctChoice").value
    const lvl = document.querySelector("#lvl").value

    let questionsExists = false//variavel para se existe a pergunta
    for (const question of questions) {
        if (quest.value === question.question) {
            questionsExists = true//corre o array, se existir pergunta, torna a variavel a true
        }
    }
    if (questionsExists === false) {//se a pergunta nao existe
        questions.push(new Question(quest, questImg, choiceA, choiceB, choiceC, ChoiceD, correctChoice, lvl))//adiciona a pergunta e atualiza o array
        localStorage.setItem("questions", JSON.stringify(questions))//atualiza a localStorage com a nova pergunta no array
        alert("Pergunta Adicionada!")//alerta o admin que foi adicionada a pergunta
    } else {
        alert("Pergunta já existe!")//alerta o admin que a pergunta ja existe
    }
    event.preventDefault();
}