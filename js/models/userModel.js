/**
 * Classe para modelar um utilizador
 */
export default class User {
    constructor (username, email, password, level, experience, userImage, userType, alert, blocked, score) {
        this.username = username
        this.email = email
        this.password = password
        this.level = level
        this.experience = experience
        this.userImage = userImage
        this.userType = userType
        this.alert = alert
        this.blocked = blocked
        this.score = score

    }
}