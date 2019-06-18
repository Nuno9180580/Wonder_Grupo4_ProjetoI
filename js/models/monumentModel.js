export default class Monument {
  constructor(id, name, year, photo, description, city, country, level, favorited = "False", usersFav = []) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.photo = photo;
    this.description = description;
    this.city = city;
    this.country = country;
    this.level = level;
    this.favorited = favorited;
    this.usersFav = usersFav;
  }
  static aToZ(mntA, mntB) {   //procurar de A a Z++
    if (mntA.name < mntB.name) {
      return -1;
    }
    if (mntA.name > mntB.name) {
      return 1;
    }
    return 0;
  }
  static zToA(mntA, mntB) {  //procurar de Z a A
    if (mntA.name > mntB.name) {
      return -1;
    }
    if (mntA.name < mntB.name) {
      return 1;
    }
    return 0;
  }
  static favoritedMnmt(mnmtA, mnmtB) {   
    const favA = mnmtA.usersFav
    const favB = mnmtB.usersFav

    if (favA.length > favB.length) {
      return -1;
    }
    if (favA.length < favB.length) {
      return 1;
    }
    return 0;
  }
}