export default class User {
  constructor(id, username, email, password, level, experience, userImage, userType, alert, blocked, score, monumentsFav = []) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.level = level;
    this.experience = experience;
    this.userImage = userImage;
    this.userType = userType;
    this.alert = alert;
    this.blocked = blocked;
    this.score = score;
    this.monumentsFav = monumentsFav;
  }
  static highScore(scoreA, scoreB) {
    if (scoreA.score > scoreB.score) {
      return -1;
    }
    if (scoreA.score < scoreB.score) {
      return 1;
    }
    return 0;
  }
}

