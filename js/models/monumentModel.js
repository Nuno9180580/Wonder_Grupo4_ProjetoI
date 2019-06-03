export default class Monument {
    constructor(name, year, photo, description, city, country, level, category) {
        this.name = name
        this.year = year
        this.photo = photo
        this.description = description
        this.city = city
        this.country = country
        this.level = level
        this.category = category

    }
    static aToZ(mntA, mntB) {
        if (mntA.name < mntB.name) {
            return -1;
        }
        if (mntA.name > mntB.name) {
            return 1;
        }
        return 0;
    }
    static zToA(mntA, mntB) {
        if (mntA.name > mntB.name) {
            return -1;
        }
        if (mntA.name < mntB.name) {
            return 1;
        }
        return 0;
    }

}