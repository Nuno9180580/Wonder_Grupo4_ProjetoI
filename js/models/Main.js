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
    level: "1",
    linkMap: "https://goo.gl/maps/HSgN9pkz3EgzChBy9"
  },
  {
    name: "Pirâmides de Gizé",
    year: "1850 a.C.",
    photo: "../img/quizzMonuments/lvl1_gize.jpg",
    description: "A Necrópole de Gizé, também chamada de Pirâmides de Gizé, é um sítio arqueológico localizado no planalto de Gizé, nos arredores do Cairo. Este complexo de monumentos antigos inclui os três complexos de pirâmides conhecidas como as Grandes Pirâmides. É, de longe, a mais antiga das maravilhas do mundo antigo e a única que ainda existe.",
    city: "Cairo",
    country: "Egito",
    level: "1",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"

    
  },
  {
    name: "Big Ben",
    year: "1858 d.C.",
    photo: "../img/quizzMonuments/lvl1_ben.jpg",
    description: "Apesar do termo também ser usado para se referir à torre do relógio onde o sino está localizado, a estrutura é oficialmente conhecida como a Elizabeth Tower, rebatizada para comemorar o Jubileu de Diamante da Rainha Isabel II do Reino Unido. A edificação possui o segundo maior relógio de quatro faces do mundo, foi construída em estilo neogótico e tem 96 metros de altura. A torre foi concluída em 1858 e tornou-se um dos símbolos mais importantes do Reino Unido.",
    city: "Londres",
    country: "Reino Unido",
    level: "1",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Torre de Belém",
    year: "1519 d.C.",
    photo: "../img/quizzMonuments/lvl1_belem.jpg",
    description: "A Torre de Belém, oficialmente Torre de São Vicente, localiza-se na freguesia de Belém, concelho e distrito de Lisboa, em Portugal. Na margem direita do rio Tejo, onde existiu outrora a praia de Belém, era primitivamente cercada pelas águas em todo o seu perímetro. Ao longo dos séculos foi envolvida pela praia, até se incorporar hoje a terra firme. Um dos ex libris da cidade, o monumento é um ícone da arquitetura do reinado de D. Manuel I, numa síntese entre a torre de menagem de tradição medieval e o baluarte moderno, onde se dispunham peças de artilharia.",
    city: "Lisboa",
    country: "Portugal",
    level: "1",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Estátua da Liberdade",
    year: "1886 d.C.",
    photo: "../img/quizzMonuments/lvl1_liberty.jpg",
    description: "A estátua de cobre, projetada pelo escultor francês Frédéric Auguste Bartholdi, que se baseou no Colosso de Rodes, foi construída por Gustave Eiffel. Foi um presente dado aos Estados Unidos pelo povo da França. A estátua é de uma figura feminina vestida que representa Libertas, deusa romana, que carrega uma tocha e um tabula ansata (uma tabuleta que evoca uma lei) sobre a qual está inscrita a data da Declaração da Independência dos Estados Unidos, 4 de julho de 1776. Uma corrente quebrada encontra-se a sob pés. A estátua é um ícone da liberdade e dos Estados Unidos, além de ser um símbolo de boas-vindas aos imigrantes que chegam do exterior.",
    city: "New York",
    country: "E.U.A.",
    level: "1",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Palácio da Pena",
    year: "1910 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Localiza-se na vila de Sintra, freguesia de São Pedro de Penaferrim, concelho de Sintra, no distrito de Lisboa. Representa uma das principais expressões do Romantismo arquitectónico do século XIX no mundo, constituindo-se no primeiro palácio nesse estilo na Europa, erguido cerca de 30 anos antes do Castelo de Neuschwanstein, na Baviera. Em 7 de julho de 2007 foi eleito como uma das Sete Maravilhas de Portugal.",
    city: "Sintra",
    country: "Portugal",
    level: "1",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Stonehenge",
    year: "3100/2150/2075 a.C.",
    photo: "../img/quizzMonuments/lvl2_henge.jpg",
    description: "Estrutura formada por círculos concêntricos de pedras que chegam a ter 5 metro de altura e a pesar quase 50 toneladas. Existem diversas lendas e mitos acerca da sua construção, creditada a diversos povos da Antiguidade.Encontram-se 3 períodos distintos de construção.",
    city: "Salisbury",
    country: "Inglaterra",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Cristo Redentor",
    year: "1931 d.C.",
    photo: "../img/quizzMonuments/lvl2_cristo.jpg",
    description: "Estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a cidade do Rio de Janeiro. Símbolo do cristianismo brasileiro.  Em 2007 foi eleito como uma das sete maravilhas do mundo moderno. ",
    city: "Rio de Janeiro",
    country: "Brasil",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Torre dos Clérigos",
    year: "1763 d.C.",
    photo: "../img/quizzMonuments/lvl2_clerigos.jpg",
    description: "No ano de 1753, Nicolau Nasoni apresentou o projeto de uma torre sineira para o conjunto dos Clérigos, que haveria de substituir as duas torres inicialmente previstas para as fachadas laterais da igreja. Para além de servir como torre sineira, esta edificação teve outras utilizações ao longo dos anos: serviu para marcar o tempo (através de um disparo diário de pólvora seca que assinalava o meio dia); foi telégrafo comercial; foi utilizada como marco de orientação para as embarcações que rumavam no rio Douro, entre outros.",
    city: "Porto",
    country: "Portugal",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Muralha da China",
    year: "206 a.C.",
    photo: "../img/quizzMonuments/lvl2_wall.jpg",
    description: "É uma das maravilhas do mundo moderno. Fortificações feitas de pedra, tijolo, terra, madeira e outros materiais, geralmente construída ao longo de uma linha através das fronteiras históricas do norte da China para proteger os Estados e Impérios chineses principalmente contra as invasões dos mongóis. Os próprios operários, quando morriam, eram usados como material para construir a muralha.",
    city: "China",
    country: "China",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Construído com concreto e areia, é o maior anfiteatro já construído e está situado a leste do Fórum Romano. O Coliseu poderia abrigar entre 50 mil e 80 mil espectadores, com uma audiência média de cerca de 65 mil pessoas. O edifício era usado para combates de gladiadores e espetáculos públicos, tais como simulações de batalhas marítimas ( era inundado através de certos mecanismos), execuções, encenações de batalhas famosas e dramas baseados na mitologia clássica.",
    city: "Roma",
    country: "Itália",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Torre de Pisa",
    year: "1373 d.C.",
    photo: "../img/quizzMonuments/catalogo_pisa.jpg",
    description: "É uma torre sineira da catedral da cidade italiana de Pisa. Está situada atrás da catedral e é a terceira estrutura mais antiga na praça da Catedral de Pisa. Embora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção devido a uma fundação mal construída e a um solo mal consolidado",
    city: "Pisa",
    country: "Itália",
    level: "2",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Notre-Dame",
    year: "1345 d.C.",
    photo: "../img/quizzMonuments/lvl3_notredame.jpg",
    description: "É uma das mais antigas catedrais francesas de estilo gótico. Iniciada sua construção no ano de 1163, é dedicada à Virgem Maria, mãe de Jesus. Em 15 de abril de 2019 a catedral foi atingida por um violento incêndio causando danos ao teto, pináculo e rosáceas.",
    city: "Paris",
    country: "França",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Grande Esfinge",
    year: "2500 a.C.",
    photo: "../img/quizzMonuments/catalogo_esfinge.jpg",
    description: "É uma estátua que representa uma esfinge (uma criatura mítica com corpo de leão eccabeça humana) localizada no planalto de Gizé, na margem oeste do rio Nilo. Construído para o faraó Quéfren, este é o monumento monolítico mais antigo que nós conhecemos. Segundo a lenda, a criatura mítica propunha este enigma a que se cruzasse com ela: Que criatura tem quatro pernas de manhã, à tarde tem duas, e à noite tem três? Quem falhasse era devorado pela esfinge.",
    city: "Cairo",
    country: "Egipto",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Templo de Diana",
    year: "Primeiro século d.C.",
    photo: "../img/quizzMonuments/lvl3_diana.jpg",
    description: "Este monumento faz parte do centro histórico da cidade de Évora. Foi classificado como Patrimônio Mundial pela UNESCO. É um dos marcos mais famosos da cidade e um dos símbolos mais relevantes da presença romana em território português.",
    city: "Évora",
    country: "Portugal",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Burj Khalifa",
    year: "2010 d.C.",
    photo: "../img/quizzMonuments/lvl3_khalifa.jpg",
    description: "É de momento o maior arranha-céus construído por nós, com 828 metros de altura e 160 andares. O orçamento total do projeto girou á volta de 1,5 biliões de dólares!",
    city: "Dubai",
    country: "Emirados Árabes Unidos",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Colosso de Ródes",
    year: "280 a.C.",
    photo: "../img/quizzMonuments/lvl3_rodes.jpg",
    description: "Foi uma das sete maravilhas do mundo antigo. Era uma estátua do deus grego do Sol, Hélios. Foi construído por Carés de Lindos para comemorar a vitória de Rodes contra os macedónios e, com 33 metros de altura, era considerado uma das mais altas estátuas do mundo antigo. Mais tarde destruído por um terramoto...",
    city: "Rodes",
    country: "Grécia",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Taj Mahal",
    year: "1653 d.C.",
    photo: "../img/quizzMonuments/lvl3_mahal.jpg",
    description: "Anunciado em 2007 como uma das maravilhas do mundo moderno. A obra foi feita entre 1632 e 1653 com a força de cerca de 20 mil homens. O imperados Shah Jahan mandou construir este monumento de mármore branco em memória à sua esposa favorita, Aryumand Banu Begam. Ela morreu após dar à luz o 14º filho, tendo o Taj Mahal sido construído sobre seu túmulo, junto ao rio Yamuna. Simboliza amor e paixão.",
    city: "Agra",
    country: "Índia",
    level: "3",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Machu Picchu",
    year: "Século XV d.C.",
    photo: "../img/quizzMonuments/lvl4_picchu.jpg",
    description: "Anunciada em 2007 como uma das maravilhas do mundo moderno. Também chamada de Cidade Perdida dos Incas, Machu Picchu é uma cidade pré-colombiana bem conservada, localizada no topo de uma montanha, a 2400 metros de altitude, no vale do rio Urubamba. O lugar foi elevado à categoria de Património mundial pela UNESCO, tendo sido alvo de preocupações quanto ao turismo excessivo por ser um dos pontos históricos mais visitados do Peru.",
    city: "Urabamba",
    country: "Peru",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Mosteiro dos Jerónimos",
    year: " 1602 d.C.",
    photo: "../img/quizzMonuments/lvl4_jerónimos.jpg",
    description: "Este mosteiro é o mais notável conjunto monástico português do seu tempo e uma das principais igrejas-salão da Europa. A sua construção iniciou-se, por iniciativa do rei D. Manuel I no inicio do século XVI e prolongou-se por uma centena de anos, tendo sido dirigida por um conjunto notável de arquitetos. Tem, desde 2016, o estatuto de Panteão Nacional.",
    city: "Lisboa",
    country: "Portugal",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Estátua de Zeus",
    year: "1854 d.C.",
    photo: "../img/quizzMonuments/lvl4_zeus.jpg",
    description: "Esta maravilha do mundo Antigo media por volta de 13 metros de altura, o equivalente a um prédio de de cinco andares. Esculpido por Fídias, esta estátua era feita de marfim e ébano e repleta de pedras preciosas. Ela foi perdida e destruída durante o século V sem nenhuma cópia, sendo que os seus detalhes são apenas conhecidos através de antigas descrições.",
    city: "Olímpia",
    country: "Grécia",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "4",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Monte Rushmore",
    year: "1941 d.C.",
    photo: "../img/MonteRushmore.jpg",
    description: "Lorem Ipsum",
    city: "Keystone",
    country: "Estados Unidos da América",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Lorem Ipsum",
    city: "Roma",
    country: "Itália",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Palácio da Pena",
    year: "1854 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Lorem Ipsum",
    city: "Sintra",
    country: "Portugal",
    level: "5",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
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
      "../img/AvatarAdmin.jpg",
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
      dummyMonument["level"],
      dummyMonument["usersFav"],
      dummyMonument["favorited"],
      dummyMonument["linkMap"]


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
  const com = new Comment(0, "", "", "", "");
  comments.push(com);
  localStorage.setItem("comments", JSON.stringify(comments));
}

//define o array para as sugestions
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
export function registerSubmit(id, txtUsername, txtEmail, txtPass, txtConfirmPass) {
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
      users.push(new User(id, txtUsername, txtEmail, txtPass, 1, 0, "../img/AvatarFields.jpg", "criança", 0, 0, 0));
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