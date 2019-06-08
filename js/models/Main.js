import User from "./userModel.js";
import Monument from "./monumentModel.js";
import Comment from "../models/commentsModel.js";
import Sugestion from "../models/sugestionsModel.js";

const dummyUsers = [{
    username: "admin",
    email: "admin@admin.com",
    password: "admin",
    level: 6,
    experience: 3000,
    userType: "admin",
    alert: 0,
    blocked: 0,
    score: 0
  },
  {
    username: "hello",
    email: "hello@hello.com",
    password: "hello",
    level: 6,
    experience: 3000,
    userType: "criança",
    alert: 0,
    blocked: 0,
    score: 20
  }
];

const dummyMonuments = [{
    name: "Torre Eiffel",
    year: "1889 d.C.",
    photo: "../img/TorreEiffel.jpg",
    description: "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.",
    city: "Paris",
    country: "França",
    level: "1"
  },
  {
    name: "Pirâmides de Gizé",
    year: "1850 a.C.",
    photo: "../img/PiramidesDeGize.jpg",
    description: "Lorem Ipsum",
    city: "Cairo",
    country: "Egito",
    level: "1"
  },
  {
    name: "Big Ben",
    year: "1859 d.C.",
    photo: "../img/BigBen.jpg",
    description: "Lorem Ipsum",
    city: "Londres",
    country: "Reino Unido",
    level: "1"
  },
  {
    name: "Stonehendge",
    year: "3001 a.C.",
    photo: "../img/Stonehendge.jpg",
    description: "Lorem Ipsum",
    city: "Salisbury",
    country: "Reino Unido",
    level: "1"
  },
  {
    name: "Torre dos Clérigos",
    year: "1750 d.C.",
    photo: "../img/TorreDosClerigos.jpg",
    description: "Lorem Ipsum",
    city: "Porto",
    country: "Portugal",
    level: "1"
  },
  {
    name: "Torre de Belém",
    year: "1519 d.C.",
    photo: "../img/TorreDeBelem.jpg",
    description: "Lorem Ipsum",
    city: "Lisboa",
    country: "Portugal",
    level: "1"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "2"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "2"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "2"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "2"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "2"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "2"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "3"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "3"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "3"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "3"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "3"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "3"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "4"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "4"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "4"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "4"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "4"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "4"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "5"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "5"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "5"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "5"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "5"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "5"
  }
];

//array de utilizadores
export let users = [];

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente

if (localStorage.users) {
  users = JSON.parse(localStorage.users);
} else {
  let idCount = 0;
  for (let dummyUser of dummyUsers) {
    idCount = idCount + 1;
    let newUser = new User(
      idCount,
      dummyUser["username"],
      dummyUser["email"],
      dummyUser["password"],
      dummyUser["level"],
      dummyUser["experience"],
      "../img/Perfil_Side_Icon.png",
      dummyUser["userType"],
      dummyUser["alert"],
      dummyUser["blocked"],
      dummyUser["score"]
    );

    users.push(newUser);
  }

  localStorage.setItem("users", JSON.stringify(users));
}

// Define um array para guardar os objetos monuments
export let monuments = [];

// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.monuments) {
  monuments = JSON.parse(localStorage.monuments);
} else {
  // Só vai entrar aqui a primeira vez
  let idCount = 0;
  for (let dummyMonument of dummyMonuments) {
    idCount = idCount + 1;
    let newMonument = new Monument(
      idCount,
      dummyMonument["name"],
      dummyMonument["year"],
      dummyMonument["photo"],
      dummyMonument["description"],
      dummyMonument["city"],
      dummyMonument["country"],
      dummyMonument["level"]
    );

    monuments.push(newMonument);
  }

  localStorage.setItem("monuments", JSON.stringify(monuments));
}

// Define um array para guardar os objetos comments
export let comments = [];
if (localStorage.comments) {
  comments = JSON.parse(localStorage.comments);
} else {
  const com = new Comment("", "", "", "");
  comments.push(com);
  localStorage.setItem("comments", JSON.stringify(comments));
}
export let sugestions = [];
if (localStorage.sugestions) {
  sugestions = JSON.parse(localStorage.sugestions);
} else {
  localStorage.setItem("sugestions", JSON.stringify(sugestions));
}

//------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------FUNÇÕES--------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

//função para validar o registo para o landing
export function registerSubmit(id,txtUsername, txtEmail, txtPass, txtConfirmPass) {
  let usernameExists = false;
  let emailExists = false;
  if (txtPass === txtConfirmPass) {
    for (const user of users) {
      if (user.username === txtUsername) {
        usernameExists = true;
      }
      if (user.email === txtEmail) {
        emailExists = true;
      }
    }
    if (usernameExists === false && emailExists === false) {
      alert("Conta criada com sucesso!");
      users.push(new User(id, txtUsername,txtEmail,txtPass,1,0,"../img/AvatarFields.jpg","criança",0,0,0));
      localStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("loggedUser", txtUsername);
      window.location.href = "../html/index.html"; //redireciona para apagina login
    }
    if (usernameExists === true) {
      document.querySelector("#txtUsername").value = "";
      alert("Nome de Utilizador já existe!");
    } else if (emailExists === true) {
      document.querySelector("#txtEmail").value = "";
      alert("Email já existe!");
    }
  } else {
    alert("As palavras passe não coincidem!");
    document.querySelector("#txtPass").value = "";
    document.querySelector("#txtConfirmPass").value = "";
  }
}

//função para validar o inicio de sessão para o landing
export function loginSubmit(txtUsername, txtPass) {
  let existUser = false;
  let userType = "";
  for (const user of users) {
    if (user.username === txtUsername && user.password === txtPass) {
      sessionStorage.setItem("loggedUser", txtUsername);
      userType = user.userType;
      existUser = true;
      if (user.blocked === 0) {
        alert(`Bem-vindo ${txtUsername}!`);
        if (userType == "admin") {
          window.location.href = "../html/backOffice.html"; //redireciona para a pagina principal
        } else {
          window.location.href = "../html/index.html"; //redireciona para a pagina principal
        }
      } else {
        alert("Conta Bloqueada!");
      }
    }
  }
  if (existUser === false) {
    alert("Dados incorretos!");
    document.querySelector("#txtUsername").value = "";
    document.querySelector("#txtPass").value = "";
  }
  return existUser;
}

//função para efetuar logout
export function logout() {
  alert("Sessão terminada.");
  sessionStorage.removeItem("loggedUser");
  window.location.href = "../html/landingRegister.html";
}