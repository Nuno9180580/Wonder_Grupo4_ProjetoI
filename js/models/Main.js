import User from "./user.js"

//array de utilizadores 
export const users = []

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    //const user1 = new User("admin", "admin", "admin")
    //const user2 = new User("maria", "9876", "", "", "", "")
    //users.push(user1, user2, user3)
}