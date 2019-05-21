/**
 * Classe para modelar um utilizador
 */
export default class User {
    constructor (username, email, password, level, experience) {
        this.username = username
        this.email = email
        this.password = password
        this.level = level
        this.experience = experience
    }
}