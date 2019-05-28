export default class Monument {
    constructor(name, year, photo, description, city, country) {
        this.name = name
        this.year = year
        this.photo = photo
        this.description = description
        this.city = city
        this.country = country
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
}