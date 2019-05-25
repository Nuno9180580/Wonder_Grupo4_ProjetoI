import User from "./userModel.js"

//array de utilizadores 
export let users = []

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const userAdmin = new User("admin", "admin", "admin")
    users.push(userAdmin)
}
//------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------FUNÇÕES--------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

//funcao para mudar os campos do card ao clicar em iniciar sessao
export function changeCardContent() {
    //variavel que procura a card para ser alterada
    const myCard = document.querySelector("#changeCard")

    myCard.innerHTML = `
        <div class="card-header">
          <h3>Iniciar Sessão</h3>
        </div>
        <div class="card-body">
          <form id="myForm">
          <label for="txtUsername">Nome de Utilizador</label>
            <div class="input-group form-group">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" id="txtUsername" placeholder="" required>
            </div>
            <label for="txtPass">Password</label>
            <div class="input-group form-group">
              <div class="input-group-prepend">
              </div>
              <input type="password" class="form-control" id="txtPass" placeholder="" required>
            </div>            
            <div class="form-group">
              <input type="submit" value="Iniciar Sessão" class="btn float-left login_btn" id="btnLogin">
            </div>
          </form>
        </div>
     `
    myCard.style.height = "330px";
}

//função para validar o registo para o landing
export function registerSubmit(txtUsername, txtEmail, txtPass, txtConfirmPass) {
    if (txtPass === txtConfirmPass) {
        let usernameExists = false;
        let emailExists = false;
        for (const user of users) {
            if (user.name === txtUsername) {
                userExists === true;
            } else if (user.email === txtEmail) {
                emailExists === true;
            }
        }

        if (usernameExists === false && emailExists === false) {
            alert(`Conta criada com sucesso!`)
            users.push(new User(txtUsername, txtEmail, txtPass, "1", "0", ""))
            localStorage.setItem("users", JSON.stringify(users))
            //redireciona para o form com o login
            changeCardContent();
        } else if (usernameExists === true) {
            alert("Nome de Utilizador já existe!")
        } else if (emailExists === true) {
            alert("Email já existe!")
        }
    } else {
        txtPass = ""
        txtConfirmPass = ""
        alert("As palavras passe não coincidem!")
    }
}

//função para validar o inicio de sessão para o landing
export function loginSubmit(txtUsername, txtPass) {
    let userExists = false
    for (const user of users) {
        if (user.name === txtUsername) {
            if (user.password === txtPass) {
                alert(`${txtUsername} Bem-vindo!`)
            } else {
                alert("Password incorreta!")
            }
        }
    }
}