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
const endQuiz = document.querySelector("#gameOverQuiz")
const quiz = document.querySelector("#quiz")
const levelShow = document.querySelector("#levelContainer")
const timerShow = document.querySelector("#timerContainer")
const question = document.querySelector("#question")
const questionImage = document.querySelector("#questionImg")
const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const choiceD = document.querySelector("#D")
const quizLevel = document.querySelector("#quizLevel")
const counter = document.querySelector("#counter")
const fillTimeBar = document.querySelector("#barFilling")
let userScore = 0;
const checkA = document.querySelector("#choiceA")
const checkB = document.querySelector("#choiceB")
const checkC = document.querySelector("#choiceC")
const checkD = document.querySelector("#choiceD")
const restartContainer = document.querySelector("#restartContainer")
const restartImg = document.querySelector("#restartImg")
const maxLevel = document.querySelector("#showMaxLevel")
const setBackgroudColor = document.querySelector("#containerChangeColor")

let count = 0;
let questionTime = 20 //20segundos para o contador
const barTimeWidth = 110; //100px de largura da barra do tempo
const barTimeUnit = barTimeWidth / questionTime;
let timer;

//obter o nivel do utilizador para corresponder ao niveis das perguntas
let userLevel = ""
for (const user of users) {
    if (user.username === userOn) {
        userLevel = user.level
    }
}
let countQuestions = 0 // 5 questoes no máximo a ser respondidas
let tempQuestions = []
let randomIndex = -1;

start.addEventListener("click", quizStart); //botao para comecar o quiz
//botoes para as escolhas
checkA.addEventListener("click", function () {
    checkAnswer("A")
})
checkB.addEventListener("click", function () {
    checkAnswer("B")
})
checkC.addEventListener("click", function () {
    checkAnswer("C")
})
checkD.addEventListener("click", function () {
    checkAnswer("D")
})

//-------------------------------------------FUNÇÕES---------------------------------------------------------//

//start quizz
function quizStart() {
    if (userLevel === 6) {
        console.log("dsadsiahdsa")
        start.style.display = "none" //esconde o botao de iniciar quiz
        maxLevel.style.display = "block"
        setBackgroudColor.style.backgroundColor = "#a8c7ff"
    } else {
        countQuestions = 0;
        start.style.display = "none" //esconde o botao de iniciar quiz
        renderQuestion(); //da render na questao para o quiz
        console.log("renderquest start done")
        quiz.style.display = "block" //mostra o quiz no centro
        levelShow.style.display = "block" //mostra o container do nivel
        timerShow.style.display = "block" //mostra o container do timer
        restartContainer.style.display = "none" //esconde o container de restart/continuar quiz
        renderCounter(); //começa o contador
        timer = setInterval(renderCounter, 1000) // executa a funcao de 1 em 1 segundo
    }
}

//funcao para preencher o quiz
function renderQuestion() {
    //muda o nivel do quiz para corresponder ao nivel do utilizador
    quizLevel.innerHTML = userLevel;
    //cria array temporario para as questions do nivel do user
    for (const question of questions) {
        if (question.level === userLevel) {
            tempQuestions.push(new Question(question.question, question.imgQuestion, question.choiceA, question.choiceB, question.choiceC, question.choiceD, question.correct, question.level))
            localStorage.setItem("tempQuestions", JSON.stringify(tempQuestions))
        }
    }
    randomIndex++;
    //função que carrega para o quiz a pergunta aleatoria
    question.innerHTML = `<p>${tempQuestions[randomIndex].question}</p>`
    questionImage.innerHTML = `<img src=${tempQuestions[randomIndex].imgQuestion}>`
    choiceA.innerHTML = tempQuestions[randomIndex].choiceA
    choiceB.innerHTML = tempQuestions[randomIndex].choiceB
    choiceC.innerHTML = tempQuestions[randomIndex].choiceC
    choiceD.innerHTML = tempQuestions[randomIndex].choiceD
    countQuestions++
}

//funcao para o contador do quiz
function renderCounter() {
    //contador inicia até ao tempo máximo
    if (count <= questionTime) {
        counter.innerHTML = count
        fillTimeBar.style.width = count * barTimeUnit + "px";
        count++;
    } else {
        count = 0
        //quiz fecha e abre página de game over
        clearInterval(timer);
        endQuiz.style.display = "block" //mostra o botao de iniciar quiz
        quiz.style.display = "none" //esconde o quiz no centro
        endQuiz.innerHTML = `
        <img src="${imgAvatar}" id="endQuiz">
        <p id="endScore">Pontuação: ${userScore}</p>
        <p id="endLabel">FIM DO JOGO!</p>
        `
        levelShow.style.display = "none" //esconde o container do nivel
        timerShow.style.display = "none" //esconde o container do timer      
        restartImg.src = "../img/tryagain.png"
        restartContainer.style.display = "block" //esconde o container de restart/continuar quiz
    }
}

//função que verifica a resposta
function checkAnswer(answer) {
    //se escolher a opçao correta enquanto nao responder
    console.log(countQuestions)
    count = 0;
    if (countQuestions < 5) {
        console.log(answer)
        console.log(tempQuestions[randomIndex].correct)
        if (answer === tempQuestions[randomIndex].correct) {
            //aumenta o contador das questoes
            userScore++;
            renderQuestion();
            console.log("renderquest on check done")
        } else { //falta se acertar tudo
            //quiz fecha e abre página de game over
            clearInterval(timer);
            endQuiz.style.display = "block" //mostra o botao de iniciar quiz
            quiz.style.display = "none" //esconde o quiz no centro
            endQuiz.innerHTML = `
                    <img src="${imgAvatar}" id="endQuiz">
                    <p id="endScore">Pontuação: ${userScore}</p>
                    <p id="endLabel">FIM DO JOGO!</p>
                    `
            levelShow.style.display = "none" //esconde o container do nivel
            timerShow.style.display = "none" //esconde o container do timer
            restartImg.src = "../img/tryagain.png"
            restartContainer.style.display = "block" //esconde o container de restart/continuar quiz
        }
    } else {
        //atribui o score na mesma
        userScore++;
        //quiz fecha e abre página de game over
        clearInterval(timer);
        endQuiz.style.display = "block" //mostra o botao de iniciar quiz
        quiz.style.display = "none" //esconde o quiz no centro
        endQuiz.innerHTML = `
                <img src="${imgAvatar}" id="endQuiz">
                <p id="endScore">Pontuação: ${userScore}</p>
                <p id="endLabel">Parabéns, passaste ao próximo nível!</p>
                `
        levelShow.style.display = "none" //esconde o container do nivel
        timerShow.style.display = "none" //esconde o container do timer
        restartImg.src = "../img/nextlvl.png"
        restartContainer.style.display = "block" //esconde o container de restart/continuar quiz

        //utilizador passa para o próximo nivel
        for (const user of users) {
            //atribui XP de acordo com o nivel em que esta
            if (user.username === userOn) {
                if (user.level === 1) {
                    user.experience = user.experience + 50;
                } else if (user.level === 2) {
                    user.experience = user.experience + 100;
                } else if (user.level === 3) {
                    user.experience = user.experience + 200;
                } else if (user.level === 4) {
                    user.experience = user.experience + 275;
                } else if (user.level === 5) {
                    user.experience = user.experience + 375;
                }
                //passa para o proximo nivel
                user.level = user.level + 1;
                //recebe o score para possivelmente coloca lo no podio
                user.score = userScore + user.score + 15;
                //atualiza a informaçao para a localStorage
                localStorage.setItem("users", JSON.stringify(users))
                console.log(user.level)
            }
        }
    }
}