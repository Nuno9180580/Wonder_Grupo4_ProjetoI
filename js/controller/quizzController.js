import {
    users
}
from "../models/Main.js"
import {
    questions
} from "../views/quizView.js"
import Question from "../models/questionModel.js"

//vai buscar o utilizador logado no momento
const userOn = sessionStorage.getItem('loggedUser')
//vai buscar o titulo do utilizador logado
const userOnTitle = sessionStorage.getItem('currentTitle')
//vai buscar a label para ser mostrado o utilizador
const labelUser = document.querySelector("#txtUserLogged")
//da o nome de utilizador a label na navbar
if (userOn != "admin") {
    labelUser.innerHTML = userOn + ", " + userOnTitle;
} else {
    labelUser.innerHTML = userOn
}

let imgAvatar = "" //variavel a ser usada em baixo
for (const user of users) { //percorre o array users para ir buscar o user logado
    if (user.username === userOn) {
        imgAvatar = user.userImage //variavel que transporta o caminho do avatar do user logado
    }
}
const userAvatar = document.querySelector("#userAvatar") //vai buscar a imagem para o avatar do user logado
userAvatar.src = imgAvatar //relaciona o caminho do avatar com a imagem onde vai ser mostrado na navbar

//quiz variaveis e valores
const start = document.querySelector("#startQuiz") //imagem para clicar e começar quiz
const endQuiz = document.querySelector("#gameOverQuiz") //design para o game over do quiz
const quiz = document.querySelector("#quiz") //quiz para ser mostrado/escondido
const levelShow = document.querySelector("#levelContainer") //container do nivel a ser mostrado
const timerShow = document.querySelector("#timerContainer") //container do tempo a ser mostrado
const question = document.querySelector("#question") //pergunta do quiz
const questionImage = document.querySelector("#questionImg") //imagem do quiz
const choiceA = document.querySelector("#A") //button group de cada escolha
const choiceB = document.querySelector("#B") //button group de cada escolha
const choiceC = document.querySelector("#C") //button group de cada escolha
const choiceD = document.querySelector("#D") //button group de cada escolha
const quizLevel = document.querySelector("#quizLevel") //preencher o nivel do utilizador
const counter = document.querySelector("#counter") //contador onde vai ser mostrado o tempo
const fillTimeBar = document.querySelector("#barFilling")
let userScore = 0; //variavel para o score do utilizador
const checkA = document.querySelector("#choiceA") //escolhas para definir texto
const checkB = document.querySelector("#choiceB") //escolhas para definir texto
const checkC = document.querySelector("#choiceC") //escolhas para definir texto
const checkD = document.querySelector("#choiceD") //escolhas para definir texto
const restartContainer = document.querySelector("#restartContainer") //container para tentar novamente
const restartImg = document.querySelector("#restartImg") //variavel para escolher imgem -tentar novamente/proximo nivel
const showNewMonuments = document.querySelector("#newMonuments") //container de alerta dos novos monumentos
const maxLevel = document.querySelector("#showMaxLevel") //imagem do nivel maximo
const setBackgroudColor = document.querySelector("#containerChangeColor") //muda o backgroundColor no nivel maximo
let count = 0; //para o contador do tempo
let questionTime = 20 //20segundos para o contador
const barTimeWidth = 110; //100px de largura da barra do tempo
const barTimeUnit = barTimeWidth / questionTime;
let timer;
let countQuestions = 0 // 5 questoes no máximo a ser respondidas
let tempQuestions = []
let nextQuest = -1;
//obter o nivel do utilizador para corresponder ao niveis das perguntas
let userLevel = ""
for (const user of users) {
    if (user.username === userOn) {
        userLevel = user.level
    }
}

/* ---------------------------------------------------------------------EventListeners--------------------------------------------------------*/

//botao para comecar o quiz
start.addEventListener("click", quizStart);

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

/* ---------------------------------------------------------------------Funções-------------------------------------------------------------*/

//funcao que inicia o quiz
function quizStart() {
    if (userLevel === 6) { // se o nivel do utilizador for 6 mostra design do nivel maximo
        start.style.display = "none" //esconde o botao de iniciar quiz
        maxLevel.style.display = "block" //design no nivel maximo a ser mostrado
        setBackgroudColor.style.backgroundColor = "#a8c7ff"
    } else {
        //inicia o quiz com o numero de questoes a 0
        countQuestions = 0;
        start.style.display = "none" //esconde o botao de iniciar quiz
        renderQuestion(); //da render na questao para o quiz
        quiz.style.display = "block" //mostra o quiz no centro
        levelShow.style.display = "block" //mostra o container do nivel
        timerShow.style.display = "block" //mostra o container do timer
        restartContainer.style.display = "none" //esconde o container de restart/continuar quiz
        renderCounter(); //começa o contador
        timer = setInterval(renderCounter, 1000) // executa a funcao do contador de 1 em 1 segundo
    }
}

//funcao para preencher o quiz
function renderQuestion() {
    //muda o nivel do quiz para corresponder ao nivel do utilizador
    quizLevel.innerHTML = userLevel;
    //cria array temporario para as questions do nivel do user
    for (const question of questions) { //vai correr o array das questoes
        if (question.level === userLevel) { //quando a questao tiver o mesmo nivel que o utilizador, carrega para o array temporario
            tempQuestions.push(new Question(question.question, question.imgQuestion, question.choiceA, question.choiceB, question.choiceC, question.choiceD, question.correct, question.level))
            localStorage.setItem("tempQuestions", JSON.stringify(tempQuestions)) //manda o array para a localStorage
        }
    }
    nextQuest++;
    //carrega para o container do quiz todas as informaçoes necessarias a serem mostradas
    question.innerHTML = `<p>${tempQuestions[nextQuest].question}</p>`
    questionImage.innerHTML = `<img src=${tempQuestions[nextQuest].imgQuestion}>`
    choiceA.innerHTML = tempQuestions[nextQuest].choiceA
    choiceB.innerHTML = tempQuestions[nextQuest].choiceB
    choiceC.innerHTML = tempQuestions[nextQuest].choiceC
    choiceD.innerHTML = tempQuestions[nextQuest].choiceD
}

//funcao para o contador do quiz
function renderCounter() {
    //contador inicia até ao tempo máximo
    if (count <= questionTime) { //enquanto o timer for menos que o tempo maximo
        counter.innerHTML = count //coloca o timer no container respetivo(esquerda da pagina)
        fillTimeBar.style.width = count * barTimeUnit + "px"; //a barra vai enchendo a medida necessaria de modo a preencher ao fim do tempo
        count++; //aumenta o contador
    } else { // se acabar o tempo
        count = 0
        //quiz fecha e abre página de game over
        clearInterval(timer);
        endQuiz.style.display = "block" //mostra o botao de iniciar quiz
        quiz.style.display = "none" //esconde o quiz no centro
        //preenche a informação do design de fim de jogo
        endQuiz.innerHTML = `
        <img src="${imgAvatar}" id="endQuiz">
        <p id="endScore">Pontuação: ${userScore}</p>
        <p id="endLabel">FIM DO JOGO!</p>
        `
        levelShow.style.display = "none" //esconde o container do nivel
        timerShow.style.display = "none" //esconde o container do timer      
        restartImg.src = "../img/tryagain.png" //mete no container a imagem para tentar novamente
        restartContainer.style.display = "block" //mostra o container de restart/continuar quiz
    }
}

//função que verifica a resposta
function checkAnswer(answer) {
    //se escolher a opçao correta enquanto nao responder
    count = 0;
    //aumenta o contador das questoes (maximo 5)
    countQuestions++
    //primeiro if para se a questao for a quinta, se estiver correta mostrar o design de passar de nivel
    if (countQuestions === 5) {
        //verifica como diz em cima se a quinta pergunta esta correta(apenas a quinta pergunta aqui!)
        if (answer === tempQuestions[nextQuest].correct) {
            //atribui o score na mesma
            userScore++;
            //funcao que mostra alert personalizado
            swal({
                title: "Acertaste!",
                icon: "success",
                button: "Continuar!",
            });
            //reinicia o timer
            clearInterval(timer);
            //quiz fecha e abre página de game over
            endQuiz.style.display = "block" //mostra o botao de iniciar quiz
            quiz.style.display = "none" //esconde o quiz no centro
            //preenche a informação do design de passar de nivel 
            endQuiz.innerHTML = `
                    <img src="${imgAvatar}" id="endQuiz">
                    <p id="endScore">Pontuação: ${userScore}</p>
                    <img src="../img/newLvl${userLevel+1}.png" id="newLvl">
                    `
            levelShow.style.display = "none" //esconde o container do nivel
            timerShow.style.display = "none" //esconde o container do timer
            restartImg.src = "../img/nextlvl.png" //mete no container a imagem para jogar o proximo nivel
            restartContainer.style.display = "block" //esconde o container de restart/continuar quiz
            showNewMonuments.style.display = "block" //mostra o container de notificacao de novos monumentos
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
                }
            }
        } else { // este else serve para caso na quinta pergunta o utilizador errar, mostrar o design de acabou o quiz
            //reinicia o timer
            clearInterval(timer);
            //quiz fecha e abre página de game over
            endQuiz.style.display = "block" //mostra o botao de iniciar quiz
            quiz.style.display = "none" //esconde o quiz no centro
            //preenche a informação do design de fim de jogo
            endQuiz.innerHTML = `
                       <img src="${imgAvatar}" id="endQuiz">
                       <p id="endScore">Pontuação: ${userScore}</p>
                       <p id="endLabel">FIM DO JOGO!</p>
                       `
            levelShow.style.display = "none" //esconde o container do nivel
            timerShow.style.display = "none" //esconde o container do timer
            restartImg.src = "../img/tryagain.png" //mete no container a imagem para tentar novamente
            restartContainer.style.display = "block" //esconde o container de restart/continuar quiz
        }
    } else if (countQuestions < 6) { // este else if serve para todas as questoes anteriores a quinta
        //se nas perguntas anteriores a quinta, o utilizador acertar
        if (answer === tempQuestions[nextQuest].correct) {
            //aumenta o contador do score do utilizador
            userScore++;
            //funcao que mostra alert personalizado
            swal({
                title: "Acertaste!",
                icon: "success",
                button: "Continuar!",
            });
            //da render a question para o container
            renderQuestion();
        } else { //este else é usado caso nas perguntas (exceto a quinta pergunta) a resposta esteja errada
            //reinicia o timer
            clearInterval(timer);
            //quiz fecha e abre página de game over
            endQuiz.style.display = "block" //mostra o botao de iniciar quiz
            quiz.style.display = "none" //esconde o quiz no centro
            //preenche a informação do design de fim de jogo
            endQuiz.innerHTML = `
                    <img src="${imgAvatar}" id="endQuiz">
                    <p id="endScore">Pontuação: ${userScore}</p>
                    <p id="endLabel">FIM DO JOGO!</p>
                    `
            levelShow.style.display = "none" //esconde o container do nivel
            timerShow.style.display = "none" //esconde o container do timer
            restartImg.src = "../img/tryagain.png" //mete no container a imagem para tentar novamente
            restartContainer.style.display = "block" //esconde o container de restart/continuar quiz
        }
    }
}