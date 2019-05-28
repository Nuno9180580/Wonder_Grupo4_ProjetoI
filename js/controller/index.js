const data = sessionStorage.getItem('loggedUser')
const labelUser = document.querySelector("#txtUserLogged")
labelUser.innerHTML = data;

const userAvatar = document.querySelector("#userAvatar")
userAvatar.src = "../img/Perfil_Side_Icon.png"
///const userLogged = document.querySelector("#txtUserLogged")
