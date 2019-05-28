const userLogged = document.querySelector("#txtUserLogged")

const x = JSON.parse(sessionStorage.loggedUser);
userLogged.innerHTML = x