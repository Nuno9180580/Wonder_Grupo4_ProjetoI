import monument from "../models/monumentModel.js"
import monuments from "../models/Main.js"

const monument1 = new monument("Torre Eiffel", "1889", "../img/sample2.jpg","A Torre Eiffel é uma torre de ferro do século XIX e é o edifício mais alto de Paris.Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel.Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.", "Paris", "França" )
monuments.push(monument1)