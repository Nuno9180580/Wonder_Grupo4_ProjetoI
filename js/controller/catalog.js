import Monument from "../models/monumentModel.js"

// Define um array para guardar os objetos Question

export let monuments = []


// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.monuments) {
    monuments = JSON.parse(localStorage.monuments)
} else {
    // Só vai entrar aqui a primeira vez
    const mnt1 = new Monument("Torre Eiffel", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt2 = new Monument("Piramides", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt3 = new Monument("Big Ben", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt4 = new Monument("Stonehendge", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt5 = new Monument("Torre dos Clerigos", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt6 = new Monument("Torre de Belem", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt7 = new Monument("Estatua da Liberdade", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt8 = new Monument("Arco do Triunfo", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt9 = new Monument("Palacio da Pena", "1889", "../img/sample2.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    monuments.push(mnt1, mnt2, mnt3, mnt4, mnt5, mnt6, mnt7, mnt8, mnt9)
    localStorage.setItem("monuments", JSON.stringify(monuments))
}

const myCatalog = document.querySelector("#myCatalog")

//carrega as bandas todas na msm sem filtros
renderCatalog();
//funcao para atualizar as bandas do catalogo
function renderCatalog() 
{
    let result = "";
    let i = 0;
    for (const monument of monuments) {
        //criacao da linha
        if (i % 3 === 0) {
            result += `<br><div class = "row">`
        }
        //geraçao do card
        result += ` <div class="col-sm">
                <div class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${monument.photo}">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${monument.name}</h5>
                        <a href="#" class="btn btn-primary">Detalhes</a>
                    </div>
                </div>
            </div>`
        i++;
        if (i % 3 === 0) { //fecha a row
            result += `</div>`
        }
    }
    myCatalog.innerHTML =  result
}



