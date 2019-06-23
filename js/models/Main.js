import User from "./userModel.js";
import Monument from "./monumentModel.js";
import Comment from "../models/commentsModel.js";

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
    description: "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris. Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.",
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
    linkMap: "https://goo.gl/maps/AscLChUumAVxLGyr6"

    
  },
  {
    name: "Big Ben",
    year: "1858 d.C.",
    photo: "../img/quizzMonuments/lvl1_ben.jpg",
    description: "Apesar do termo também ser usado para se referir à torre do relógio onde o sino está localizado, a estrutura é oficialmente conhecida como a Elizabeth Tower, rebatizada para comemorar o Jubileu de Diamante da Rainha Isabel II do Reino Unido. A edificação possui o segundo maior relógio de quatro faces do mundo, foi construída em estilo neogótico e tem 96 metros de altura. A torre foi concluída em 1858 e tornou-se um dos símbolos mais importantes do Reino Unido.",
    city: "Londres",
    country: "Reino Unido",
    level: "1",
    linkMap: "https://goo.gl/maps/uu2STt5ppm965VRC7"
  },
  {
    name: "Torre de Belém",
    year: "1519 d.C.",
    photo: "../img/quizzMonuments/lvl1_belem.jpg",
    description: "A Torre de Belém, oficialmente Torre de São Vicente, localiza-se na freguesia de Belém, concelho e distrito de Lisboa, em Portugal. Na margem direita do rio Tejo, onde existiu outrora a praia de Belém, era primitivamente cercada pelas águas em todo o seu perímetro. Ao longo dos séculos foi envolvida pela praia, até se incorporar hoje a terra firme. Um dos ex libris da cidade, o monumento é um ícone da arquitetura do reinado de D. Manuel I, numa síntese entre a torre de menagem de tradição medieval e o baluarte moderno, onde se dispunham peças de artilharia.",
    city: "Lisboa",
    country: "Portugal",
    level: "1",
    linkMap: "https://goo.gl/maps/XeNkR1LneKkuKNVTA"
  },
  {
    name: "Estátua da Liberdade",
    year: "1886 d.C.",
    photo: "../img/quizzMonuments/lvl1_liberty.jpg",
    description: "A estátua de cobre, projetada pelo escultor francês Frédéric Auguste Bartholdi, que se baseou no Colosso de Rodes, foi construída por Gustave Eiffel. Foi um presente dado aos Estados Unidos pelo povo da França. A estátua é de uma figura feminina vestida que representa Libertas, deusa romana, que carrega uma tocha e um tabula ansata (uma tabuleta que evoca uma lei) sobre a qual está inscrita a data da Declaração da Independência dos Estados Unidos, 4 de julho de 1776. Uma corrente quebrada encontra-se a sob pés. A estátua é um ícone da liberdade e dos Estados Unidos, além de ser um símbolo de boas-vindas aos imigrantes que chegam do exterior.",
    city: "New York",
    country: "E.U.A.",
    level: "1",
    linkMap: "https://goo.gl/maps/5rkWX7yX9zFfKVp26"
  },
  {
    name: "Palácio da Pena",
    year: "1910 d.C.",
    photo: "../img/PalacioDaPena.jpg",
    description: "Localiza-se na vila de Sintra, freguesia de São Pedro de Penaferrim, concelho de Sintra, no distrito de Lisboa. Representa uma das principais expressões do Romantismo arquitectónico do século XIX no mundo, constituindo-se no primeiro palácio nesse estilo na Europa, erguido cerca de 30 anos antes do Castelo de Neuschwanstein, na Baviera. Em 7 de julho de 2007 foi eleito como uma das Sete Maravilhas de Portugal.",
    city: "Sintra",
    country: "Portugal",
    level: "1",
    linkMap: "https://goo.gl/maps/p4ppM7RZesyNK1tu6"
  },
  {
    name: "Stonehenge",
    year: "3100/2150/2075 a.C.",
    photo: "../img/quizzMonuments/lvl2_henge.jpg",
    description: "Estrutura formada por círculos concêntricos de pedras que chegam a ter 5 metro de altura e a pesar quase 50 toneladas. Existem diversas lendas e mitos acerca da sua construção, creditada a diversos povos da Antiguidade.Encontram-se 3 períodos distintos de construção.",
    city: "Salisbury",
    country: "Inglaterra",
    level: "2",
    linkMap: "https://goo.gl/maps/MDeApWHYvcWeGkrTA"
  },
  {
    name: "Cristo Redentor",
    year: "1931 d.C.",
    photo: "../img/quizzMonuments/lvl2_cristo.jpg",
    description: "Estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a cidade do Rio de Janeiro. Símbolo do cristianismo brasileiro.  Em 2007 foi eleito como uma das sete maravilhas do mundo moderno. ",
    city: "Rio de Janeiro",
    country: "Brasil",
    level: "2",
    linkMap: "https://goo.gl/maps/jWHjeuWNB5ssxuYt5"
  },
  {
    name: "Torre dos Clérigos",
    year: "1763 d.C.",
    photo: "../img/quizzMonuments/lvl2_clerigos.jpg",
    description: "No ano de 1753, Nicolau Nasoni apresentou o projeto de uma torre sineira para o conjunto dos Clérigos, que haveria de substituir as duas torres inicialmente previstas para as fachadas laterais da igreja. Para além de servir como torre sineira, esta edificação teve outras utilizações ao longo dos anos: serviu para marcar o tempo (através de um disparo diário de pólvora seca que assinalava o meio dia); foi telégrafo comercial; foi utilizada como marco de orientação para as embarcações que rumavam no rio Douro, entre outros.",
    city: "Porto",
    country: "Portugal",
    level: "2",
    linkMap: "https://goo.gl/maps/pkfPVPv282pdduFW7"
  },
  {
    name: "Muralha da China",
    year: "206 a.C.",
    photo: "../img/quizzMonuments/lvl2_wall.jpg",
    description: "É uma das maravilhas do mundo moderno. Fortificações feitas de pedra, tijolo, terra, madeira e outros materiais, geralmente construída ao longo de uma linha através das fronteiras históricas do norte da China para proteger os Estados e Impérios chineses principalmente contra as invasões dos mongóis. Os próprios operários, quando morriam, eram usados como material para construir a muralha.",
    city: "China",
    country: "China",
    level: "2",
    linkMap: "https://goo.gl/maps/MAHSDYyyTZWVAPuG9"
  },
  {
    name: "Coliseu de Roma",
    year: "80 d.C.",
    photo: "../img/ColiseuDeRoma.jpg",
    description: "Construído com concreto e areia, é o maior anfiteatro já construído e está situado a leste do Fórum Romano. O Coliseu poderia abrigar entre 50 mil e 80 mil espectadores, com uma audiência média de cerca de 65 mil pessoas. O edifício era usado para combates de gladiadores e espetáculos públicos, tais como simulações de batalhas marítimas ( era inundado através de certos mecanismos), execuções, encenações de batalhas famosas e dramas baseados na mitologia clássica.",
    city: "Roma",
    country: "Itália",
    level: "2",
    linkMap: "https://goo.gl/maps/anV6iM7GJ1oUjjbg8"
  },
  {
    name: "Torre de Pisa",
    year: "1373 d.C.",
    photo: "../img/quizzMonuments/catalogo_pisa.jpg",
    description: "É uma torre sineira da catedral da cidade italiana de Roma. Está situada atrás da catedral e é a terceira estrutura mais antiga na praça da Catedral de Pisa. Embora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção devido a uma fundação mal construída e a um solo mal consolidado",
    city: "Roma",
    country: "Itália",
    level: "2",
    linkMap: "https://goo.gl/maps/4REX4BzYc8ekeb16A"
  },
  {
    name: "Notre-Dame",
    year: "1345 d.C.",
    photo: "../img/quizzMonuments/lvl3_notredame.jpg",
    description: "É uma das mais antigas catedrais francesas de estilo gótico. A sua construção deu-se início em 1163, dedicada à Virgem Maria, mãe de Jesus. Em 15 de abril de 2019 a catedral foi atingida por um violento incêndio causando danos ao teto, pináculo e rosáceas.",
    city: "Paris",
    country: "França",
    level: "3",
    linkMap: "https://goo.gl/maps/ojLTJyHFw6Vkeqic7"
  },
  {
    name: "Grande Esfinge",
    year: "2500 a.C.",
    photo: "../img/quizzMonuments/catalogo_esfinge.jpg",
    description: "É uma estátua que representa uma esfinge (uma criatura mítica com corpo de leão e cabeça humana) localizada no planalto de Gizé, na margem oeste do rio Nilo. Construído para o faraó Quéfren, este é o monumento monolítico mais antigo que nós conhecemos. Segundo a lenda, a criatura mítica propunha este enigma a que se cruzasse com ela: Que criatura tem quatro pernas de manhã, à tarde tem duas, e à noite tem três? Quem falhasse era devorado pela esfinge.",
    city: "Cairo",
    country: "Egipto",
    level: "3",
    linkMap: "https://goo.gl/maps/tJVtQRGfYCBCXRyq8"
  },
  {
    name: "Templo de Diana",
    year: "Primeiro século d.C.",
    photo: "../img/quizzMonuments/lvl3_diana.jpg",
    description: "Este monumento faz parte do centro histórico da cidade de Évora. Foi classificado como Patrimônio Mundial pela UNESCO. É um dos marcos mais famosos da cidade e um dos símbolos mais relevantes da presença romana em território português.",
    city: "Évora",
    country: "Portugal",
    level: "3",
    linkMap: "https://goo.gl/maps/Mpmjn3MTrKcfp3j16"
  },
  {
    name: "Burj Khalifa",
    year: "2010 d.C.",
    photo: "../img/quizzMonuments/lvl3_khalifa.jpg",
    description: "É de momento o maior arranha-céus construído por nós, com 828 metros de altura e 160 andares. O orçamento total do projeto girou á volta de 1,5 biliões de dólares!",
    city: "Dubai",
    country: "Emirados Árabes Unidos",
    level: "3",
    linkMap: "https://goo.gl/maps/2Sx5dgfJg8eh5H8o6"
  },
  {
    name: "Colosso de Ródes",
    year: "280 a.C.",
    photo: "../img/quizzMonuments/lvl3_rodes.jpg",
    description: "Foi uma das sete maravilhas do Mundo Antigo. Era uma estátua do deus grego do Sol, Hélios. Foi construído por Carés de Lindos para comemorar a vitória de Rodes contra os macedónios e, com 33 metros de altura, era considerado uma das mais altas estátuas do mundo antigo. Mais tarde destruído por um terramoto...",
    city: "Rodes",
    country: "Grécia",
    level: "3",
    linkMap: "https://goo.gl/maps/5tX1hVqaex8A3N5A9"
  },
  {
    name: "Taj Mahal",
    year: "1653 d.C.",
    photo: "../img/quizzMonuments/lvl3_mahal.jpg",
    description: "Anunciado em 2007 como uma das maravilhas do mundo moderno. A obra foi feita entre 1632 e 1653 com a força de cerca de 20 mil homens. O imperados Shah Jahan mandou construir este monumento de mármore branco em memória à sua esposa favorita, Aryumand Banu Begam. Ela morreu após dar à luz o 14º filho, tendo o Taj Mahal sido construído sobre seu túmulo, junto ao rio Yamuna. Simboliza amor e paixão.",
    city: "Agra",
    country: "Índia",
    level: "3",
    linkMap: "https://goo.gl/maps/rUH5Vn3j8tJFwc3k6"
  },
  {
    name: "Machu Picchu",
    year: "Século XV d.C.",
    photo: "../img/quizzMonuments/lvl4_picchu.jpg",
    description: "Anunciada em 2007 como uma das maravilhas do mundo moderno. Também chamada de Cidade Perdida dos Incas, Machu Picchu é uma cidade pré-colombiana bem conservada, localizada no topo de uma montanha, a 2400 metros de altitude, no vale do rio Urubamba. O lugar foi elevado à categoria de Património mundial pela UNESCO, tendo sido alvo de preocupações quanto ao turismo excessivo por ser um dos pontos históricos mais visitados do Peru.",
    city: "Urabamba",
    country: "Peru",
    level: "4",
    linkMap: "https://goo.gl/maps/PkeJrwrKKcBeiW5r6"
  },
  {
    name: "Mosteiro dos Jerónimos",
    year: " 1602 d.C.",
    photo: "../img/quizzMonuments/lvl4_jeronimos.jpg",
    description: "Este mosteiro é o mais notável conjunto monástico português do seu tempo e uma das principais igrejas-salão da Europa. A sua construção iniciou-se, por iniciativa do rei D. Manuel I no inicio do século XVI e prolongou-se por uma centena de anos, tendo sido dirigida por um conjunto notável de arquitetos. Tem, desde 2016, o estatuto de Panteão Nacional.",
    city: "Lisboa",
    country: "Portugal",
    level: "4",
    linkMap: "https://goo.gl/maps/vdPEpQYGd3xUTxb2A"
  },
  {
    name: "Estátua de Zeus",
    year: "1854 d.C.",
    photo: "../img/quizzMonuments/lvl4_zeus.jpg",
    description: "Esta maravilha do mundo Antigo media por volta de 13 metros de altura, o equivalente a um prédio de de cinco andares. Esculpido por Fídias, esta estátua era feita de marfim e ébano e repleta de pedras preciosas. Ela foi perdida e destruída durante o século V sem nenhuma cópia, sendo que os seus detalhes são apenas conhecidos através de antigas descrições.",
    city: "Olímpia",
    country: "Grécia",
    level: "4",
    linkMap: "https://goo.gl/maps/kkBgnRzJYB9CiVM78"
  },
  {
    name: "Ópera de Sydney",
    year: "1973 d.C.",
    photo: "../img/quizzMonuments/catalogo_sidney.jpg",
    description: "Também conhecida como Teatro de Sydney, é um dos edifícios de espetáculo mais marcantes a nível mundial e um dos símbolos da Austrália. Anualmente, os seus 8,2 milhões de visitantes geram mais de 520 milhões de euros.",
    city: "Sydney",
    country: "Austrália",
    level: "4",
    linkMap: "https://goo.gl/maps/EFUuegKXYRHUx344A"
  },
  {
    name: "Catedral São Basílio",    
    year: "1561 d.C.",
    photo: "../img/quizzMonuments/lvl4_kremlin.jpg",
    description: "É uma catedral ortodoxa russa erguida na Praça Vermelha em Moscovo entre 1555 e 1561. Marca o centro geométrico da cidade e o centro do seu crescimento.  A catedral faz parte do Kremlin e da Praça Vermelha, Patrimônio Mundial da UNESCO desde 1990.",
    city: "Moscovo",
    country: "Rússia",
    level: "4",
    linkMap: "https://goo.gl/maps/tR5batHyE6eYThGK9"
  },
  {
    name: "Casa da Música",
    year: "2005 d.C.",
    photo: "../img/quizzMonuments/lvl4_musica.jpg",
    description: " A Casa da Música é a principal sala de concertos localizada na Avenida da Boavista, no Porto.Foi projectada pelo arquitecto holandês Rem Koolhaas em 2001 concluíndo a sua construção em 2005. Transformou-se rapidamente num ícona da cidade",
    city: "Porto",
    country: "Portugal",
    level: "4",
    linkMap: "https://goo.gl/maps/dkbAw7H56QP118Gs5"
  },
  {
    name: "Mosteiro da Batalha",
    year: "1563 d.C.",
    photo: "../img/quizzMonuments/lvl5_batalha.jpg",
    description: "Também conhecido como Mosteiro de Santa Maria da Vitória, este monumento situa-se na vila de Batalha na província da Beira-Litoral. Mandado edificar em 1386 pelo rei D. João I como agradecimento à Virgem Maria pela vitória na batalha de Aljubarrota contra os castelhanos. Em 7 de Julho de 2007 foi eleito como uma das Sete Maravilhas de Portugal e mais tarde, em 2016, passou a ter o estatuto de Panteão Nacional.",
    city: "Batalha",
    country: "Portugal",
    level: "5",
    linkMap: "https://goo.gl/maps/3uXa5JnVtSNn8NaJA"
  },
  {
    name: "Templo de Ártemis",
    year: "550 a.C.",
    photo: "../img/quizzMonuments/lvl5_artemisNow.jpg",
    description: "Uma das sete maravilhas do Mundo Antigo. Era o maior templo do mundo antigo, e durante muito tempo o mais importante da civilização grega. Construído para a deusa grega Ártemis, deusa da caça e dos animais selvagens.Era composto por 127 colunas de mármore, com 20 metros de altura cada uma. Duzentos anos mais tarde foi destruído por um grande incêndio e reerguido por Alexandre, o Grande. Atualmente, após vários terramotos e vandalismo, apenas uma coluna do templo se mantêm de pé, reerguida por arqueólogos alemães no século XIX.",
    city: "Éfeso (atual Selçuk)",
    country: "Turquia",
    level: "5",
    linkMap: "https://goo.gl/maps/E3GzFZaAevty4yoi6"
  },
  {
    name: "Farol de Alexandria",
    year: "247 a.C.",
    photo: "../img/quizzMonuments/lvl5_faros.jpg",
    description: "Foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do Mundo Antigo, sendo que por muitos séculos foi uma das estruturas mais altas no planeta. Danificado por três terramotos entre os anos de 956 e 1323, tornou-se uma ruína abandonada.",
    city: "Ilha de Faros",
    country: "Egipto",
    level: "5",
    linkMap: "https://goo.gl/maps/JxL9QMHWtWLekSRB7"
  },
  {
    name: "Cidadela de Petra",
    year: "1941 d.C.",
    photo: "../img/quizzMonuments/lvl5_petra.jpg",
    description: "É uma cidadela histórica e arqueológica localizada no sul da Jordânia. A cidade é famosa pela sua arquitetura esculpida em rocha e pelo seu sistema complexo de canalização, contendo vários templo e até um anfiteatro. É também conhecida com a Cidade Rosa, devido à cor das pedras do local. Petra foi nomeada como uma das sete maravilhas do Mundo Moderno em 2007 e também foi escolhida como um dos 28 lugares para ver antes de morrer.",
    city: "Petra",
    country: "Jordânia",
    level: "5",
    linkMap: "https://goo.gl/maps/PwBHmbqWmHZ6QFrM7"
  },
  {
    name: "Templo de Kukulcán",
    year: "Século XII d.C.",
    photo: "../img/quizzMonuments/catalogo_itza.jpg",
    description: "Também conhecido como Pirâmide de Kukulcán e medindo 30 metros de altura, este templo pertence à cidade arqueológica de Chichén Itzá situada no estado de Yucatán, no México. Esta cidade funcionou como o centro político e económico da civilização Maia. Mais tarde, em 2007, Chichén Itzá foi classificada como uma das 7 marvilhas do Mundo Moderno e tornou-se património Mundial pela UNESCO. ",
    city: "Yucatán",
    country: "México",
    level: "5",
    linkMap: "https://goo.gl/maps/EZ2UY2u7foLhHNPS6"
  },
  {
    name: "Monte Rushmore",
    year: "1948 d.C.",
    photo: "../img/quizzMonuments/lvl5_rushmore.jpg",
    description: "É um monte onde estão esculpidos os rostos (15 a 21 metros de altura) de quatro Presidentes dos Estados Unidos: George Washington, o 1º presidente, Thomas Jefferson, autor da Declaração da Independência, Theodore Roosevel, que lutou pelo conhecimento e liberdade de Expressão e Abraham Lincoln, que lutou pela paz e pela igualdade no país durante a guerra civil. Localizado no estado de Dakota do Sul, este monumento é uma das atracções turísticas mais visitadas no país.",
    city: "Keystone",
    country: "E.U.A.",
    level: "5",
    linkMap: "https://goo.gl/maps/wJ9VkiNUZhVfYS5KA"
  },
  {
    name: "Jardins Suspensos da Babilónia",
    year: "Século VI/VII a.C.",
    photo: "../img/quizzMonuments/lvl6_jardins.jpg",
    description: "É uma das sete maravilhas do Mundo Antigo e aquela de que menos conhecimento se tem. Tradicionalmente, acredita-se que tenha sido construído na antiga cidade da Babilónia, próximo de onde atualmente se encontra a cidade de Hillah, no Iraque. Foi também sugerido que os Jardins Suspensos são puramente míticos, e que as descrições encontradas em documentos gregos e romanos antigos representam apenas um ideal romântico de um jardim oriental. Se ele de fato existiu, foi destruído após o primeiro século d.C..",
    city: "Hillah",
    country: "Iraque",
    level: "6",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Mausoléu de Halicarnasso",
    year: "350 a.C.",
    photo: "../img/quizzMonuments/lvl6_masoleu.jpg",
    description: "Esta maravilha de uma das sete do Mundo Antigo foi um túmulo construído entre 353 e 350 a.C. em Halicarnasso (atual Bodrum, Turquia) para Mausolo (governador do Império Aquemênida) e para a sua esposa (e irmã) Artemísa II de Cária. A estrutura foi desenhada pelos arquitetos gregos Sátiro e Pítis medindo 45 metros de altura. Desde aí, o termo mausoléu veio a ser usado genericamente para qualquer grande túmulo. A construção foi destruída por sismos sucessivos desde o século XII até ao século XV.",
    city: "Bodrum",
    country: "Turquia",
    level: "6",
    linkMap: "https://goo.gl/maps/iTfWCZ61dJfWnG4G9"
  },
  {
    name: "Angkor",
    year: "802 d.C.",
    photo: "../img/quizzMonuments/lvl6_angkor.jpg",
    description: "É o maior complexo religioso do mundo, composto por vários templos que se estendem por 64 km! Nomeado para uma das 7 maravilhas do Mundo Moderno e classificado como património Mundial pela UNESCO. Simboliza beleza e santidade. Nesta imagem encontramos o templo maior e mais bem preservado do complexo, Angkor Wat",
    city: "Angkor",
    country: "Camboja",
    level: "6",
    linkMap: "https://goo.gl/maps/tyytB5PBmtrMYQCLA"
  },
  {
    name: "Capela dos Ossos",
    year: "Século XVII d.C.",
    photo: "../img/quizzMonuments/lvl6_ossos.jpg",
    description: " Esta capela é um dos mais conhecidos monumentos do País. Está situada na Igreja de São Francisco e foi construída no século XVII. A capela é formada por 3 divisões de 18,70 m de comprimento e 11m de largura. As suas paredes e os oito pilares estão decorados com ossos e crânios ligados por cimento e na entrada encontra-se esta mensagem: Nós ossos que aqui estamos, pelos vossos esperamos.",
    city: "Évora",
    country: "Portugal",
    level: "6",
    linkMap: "https://goo.gl/maps/RCwCWaoeKLcD58LY7"
  },
  {
    name: "Atomium",
    year: "1958 d.C.",
    photo: "../img/quizzMonuments/lvl6_atomium.jpg",
    description: "Este monumento foi construído para a Expo 58 e, com 103 metros de altura, representa a molécula do Ferro da tabela periódica ampliado 165 milhões de vezes. As esferas de ferro estão ligadas por tubos com escadas no seu interior com um comprimento de cerca de 35 metros.",
    city: "Bruxelas",
    country: "Bélgica",
    level: "6",
    linkMap: "https://goo.gl/maps/TLsCR5cozMrsgesL8"
  },
  {
    name: "Os Moais",
    year: "Século I d.C.",
    photo: "../img/quizzMonuments/moais_sombra.jpg",
    description: "A Ilha de Páscoa é um dos lugares mais misteriosos da Terra e é o antigo lar de uma civilização polinésia que habitou a região há cerca de 2.000 anos. A civilização deixou na ilha um vasto número de vestígios em forma de moais gigantes que, segundo acreditam os cientistas, personalizam os antepassados dos antigos moradores da ilha. Muito ainda falta por se descobrir acerca desta civilização.",
    city: "Ilhas da Páscoa",
    country: "Argentina",
    level: "6",
    linkMap: "https://goo.gl/maps/q9u7vitbT7E6dnvt8"
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
  for (let dummyMonument of dummyMonuments) {  //dummyMonuments está em cima, serão usados para o catálogo  
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

    monuments.push(newMonument); //no array de monuments, dá push ao new monument que foi criado de acordo com os parametros em cima.
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