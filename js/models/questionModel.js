export default class Question {
    constructor(question, imgQuestion, choiceA, choiceB, choiceC, choiceD, correct, level) {
        this.question = question
        this.imgQuestion = imgQuestion
        this.choiceA = choiceA
        this.choiceB = choiceB
        this.choiceC = choiceC
        this.choiceD = choiceD
        this.correct = correct
        this.level = level
    }
}