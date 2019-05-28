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
    const mnt2 = new Monument("Piramides de Gize", "1850 A.C", "../img/sample1.jpg", "PIRAMIDES", "Paris", "Egito")
    const mnt3 = new Monument("Big Ben", "1889", "../img/sample.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt4 = new Monument("Stonehendge", "1889", "../img/sample3.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt5 = new Monument("Torre dos Clerigos", "1889", "../img/sample5.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    const mnt6 = new Monument("Torre de Belem", "1889", "../img/sample4.jpg", "A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França")
    monuments.push(mnt1, mnt2, mnt3, mnt4, mnt5, mnt6)
    localStorage.setItem("monuments", JSON.stringify(monuments))
}

const myCatalog = document.querySelector("#myCatalog")

//Função Ordenar por ordem Alfabetica
/* function rearrange() {
    let monuments2 = []
    monuments2 = monuments
    monuments2.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log(monuments2)
    renderCatalog();

} */

function alphabeticalOrder(){
    monuments.sort(Monument.compare)
    localStorage.setItem("monumentos",JSON.stringify(monuments))
    renderCatalog();
}

//Evento Click do Botão Ordem Alfabetica
document.getElementById("btnAlpha").addEventListener("click", function () {
    alphabeticalOrder();

});






//carrega as bandas todas na msm sem filtros
renderCatalog();
//funcao para atualizar as bandas do catalogo
function renderCatalog() {
    let result = "";
    let i = 0;
    for (const monument of monuments) {
        //criacao da linha
        if (i % 3 === 0) {
            result += `<br><div class = "row">`
        }
        //geraçao do card
        result += ` 
            <div class="col-sm">
                <div class="card" style="width: 20rem;">
                    <img id="cardImg" class="card-img-top" src="${monument.photo}">
                    <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${monument.name}</h5>
                        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Detalhes</button>                        
                        <!-- Modal -->
                        <div id="myModal" class="modal fade" role="dialog">
                          <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <h4>${monument.name}</h4>
                                        <img id="cardImg" class="card-img-top" src="${monument.photo}">
                                        <h5>${monument.city},${monument.country}</h5>
                                        <h5>Ano: ${monument.year}</h5>
                                        <h5>Detalhes:</h5>
                                        <p>${monument.description}</p>
                                    </div>
                          
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>`
        i++;
        if (i % 3 === 0) { //fecha a row
            result += `</div>`
        }
    }
    myCatalog.innerHTML = result
}