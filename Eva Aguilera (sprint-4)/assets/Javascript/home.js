import {crearEventos, imprimirCheckboxs, filtroCruzado} from "./funciones.js";

//REFERENCIAS
const $seccion = document.getElementById('contenedor');
const $checkBoxes = document.getElementById('form-checkbox');                 //variable con sus elmentos html
const $buscador = document.getElementById('Busqueda');
// let arregloEventos = data.eventos; //ARRAY TOTAL

let nuevoArregloEventos;     //variable que tiene como valor lo que se encuentra en data

fetch(' https://mindhub-xj03.onrender.com/api/amazing')
    .then(data => data.json())
    .then( data => { 
    nuevoArregloEventos = data.events
const nuevasCategorias = [...new Set(nuevoArregloEventos.map(evento => 
  //[... es un operadodor spread con set obtendra el nuevo array de las 7 categorias]
evento.category))]
imprimirCheckboxs(nuevasCategorias, $checkBoxes)   
template(nuevoArregloEventos, $seccion)


  function template(arreglo){
    let plantilla = '';
    if(arreglo.length === 0){
      $seccion.innerHTML = `<h2>¡sorry! this event can't be found</h2>`
    }
    else{
      for (const evento of arreglo) {
        plantilla += crearEventos(evento);
      }
      $seccion.innerHTML = (plantilla);
    }
  }
//EVENTOS
const filterevents = () => {
  const arregloCheckboxsID = [...$checkBoxes.querySelectorAll('input:checked')].map(evento => evento.id);
  const eventosFiltrados = filtroCruzado(nuevoArregloEventos, arregloCheckboxsID, $buscador.value)
  template(eventosFiltrados, $seccion)
}
$checkBoxes.addEventListener("click",filterevents ) 

$buscador.addEventListener("input",filterevents)

})
.catch(err => console.log(err))
