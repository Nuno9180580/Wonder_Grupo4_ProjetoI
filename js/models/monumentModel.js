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
    static compare(mntA, mntB) {
        if (mntA.name < mntB.name) {
            return -1;
        }
        if (mntA.name > mntB.name) {
            return 1;
        }
        return 0;
    }
    static compare2(mntA, mntB) {
        if (mntA.name > mntB.name) {
            return -1;
        }
        if (mntA.name < mntB.name) {
            return 1;
        }
        return 0;
    }
    static europeCategory(mnt) {
        if (mnt.category !== "Europa") {
            return 1;
        }
        if (mnt.category === "Europa") {
            return -1;
        }
        return 0;
    }
}