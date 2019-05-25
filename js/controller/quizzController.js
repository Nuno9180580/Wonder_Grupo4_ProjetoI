import Question from "../models/questionModel.js" 

// Define um array para guardar os objetos Question

export let questions = []


// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.questions) {
   questions = JSON.parse(localStorage.questions)
} else {
    // Só vai entrar aqui a primeira vez
    const ask1 = new Question("muse", "Pop-Rock", "http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg", "The best band ever", "xxx")
    const ask2 = new Question("RadioHead", "Pop-Rock", "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg", "The best band ever", "xxx")
    const ask3 = new Question("James", "Pop-Rock", "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg", "The best band ever", "xxx")
    const ask4 = new Question("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "The best band ever", "xxx")
    questions.push(ask1, ask2, ask3, ask4)
    localStorage.setItem("questions", JSON.stringify(questions))
}