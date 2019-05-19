//botao register para validar o registo
const myCard = document.querySelector("#changeCard")
//botao login para ter os campos necessarios
const changeToLogin = document.querySelector("#btnChangeToLogin")
//form para ser validado o registo
const myForm = document.querySelector("#myForm")

//clica no botao iniciar sessao e altera os campos do form
changeToLogin.addEventListener("click", function () {
    changeCardContent()
})

//clica e valida o registo
myForm.addEventListener("submit", function (event) {
    event.preventDefault()
})



//---------------------------------------------------------//
//--------------------FUNCTIONS----------------------------//
//---------------------------------------------------------//

//funcao para mudar os campos do card ao clicar em iniciar sessao
function changeCardContent() {
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
              <input type="text" class="form-control" id="txtUsername">
            </div>
            <label for="txtPass">Password</label>
            <div class="input-group form-group">
              <div class="input-group-prepend">
              </div>
              <input type="password" class="form-control" id="txtPass">
            </div>            
            <div class="form-group">
              <input type="submit" value="Iniciar Sessão" class="btn float-left login_btn" id="btnLogin">
            </div>
          </form>
        </div>
     `
    myCard.style.height = "330px";
}

//função para validar o registo
function registerSubmit() {
    //obter os valores dos campos
    const txtUsername = document.querySelector("txtUsername").value
    const txtEmail = document.querySelector("txtEmail").value
    const txtPass = document.querySelector("txtPass").value
    const txtConfirmPass = document.querySelector("txtConfirmPass").value

    //se os campos nao tiverem vazios
    if (txtUsername != "") {
        if (txtEmail != "") {
            if (txtPass != "") {

            }
        }
    }
}

//função para validar o inicio de sessão
function loginSubmit() {
    //obter os valores dos campos
    const txtUsername = document.querySelector("txtUsername").value
    const txtPass = document.querySelector("txtPass").value

    //se os campos nao tiverem vazios
    if (txtUsername != "") {
            if (txtPass != "") {

            }
    }
}