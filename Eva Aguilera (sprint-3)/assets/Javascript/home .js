//REFERENCIAS
const $seccion = document.getElementById('contenedor');
const $checkBoxes = document.getElementById('form-checkbox');                 //variable con sus elmentos html
const $buscador = document.getElementById('Busqueda');
// let arregloEventos = data.eventos; //ARRAY TOTAL

let nuevoArregloEventos;     //variable que tiene como valor lo que se encuentra en data

nuevoArregloEventos = data.events;
const nuevasCategorias = [...new Set(nuevoArregloEventos.map(evento => 
  //[... es un operadodor spread con set obtendra el nuevo array de las 7 categorias]
evento.category))]
imprimirCheckboxs(nuevasCategorias, $checkBoxes)   
template(nuevoArregloEventos, $seccion)

function crearEventos(objeto){
    return `<div class="card col-11 col-md-4 col-xl-3 ">
              <img id="imgCards" src="${objeto.image}" class="hcard card-img-top" alt="img">
              <div class="card-body">
                <h5 class="card-title">${objeto.name}</h5>
                <p class="card-text"> Price: ${objeto.description} </p>
                <div class = "div-precioBoton">
                  <p class="card-text"> Price: ${objeto.price} </p>
                  <a href="./assets/pages/details.html?id=${objeto._id}" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div> 
  `
  }
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
function imprimirCheckboxs(categorias, checkbox){
    let plantilla = '';
    for (const categoria of categorias) {
      plantilla += `
      <div class="divInputLabel">
        <input type="checkbox" name="CheckBox" id="${categoria}" class="classCheckbox">
        <label for="${categoria}">${categoria}</label>
      </div>`;
    }
    checkbox.innerHTML = (plantilla);
  }

//EVENTOS
const filterevents = () => {
  const arregloCheckboxsID = [...$checkBoxes.querySelectorAll('input:checked')].map(evento => evento.id);
  const eventosFiltrados = filtroCruzado(nuevoArregloEventos, arregloCheckboxsID, $buscador.value)
  template(eventosFiltrados, $seccion)
}
$checkBoxes.addEventListener("click",filterevents ) 

$buscador.addEventListener("input",filterevents)

//filtro cruzado
 function filtroCruzado(eventos, categoria, texto){
    let eventosFiltrados = eventos;
    if (categoria.length > 0) {
      eventosFiltrados = eventos.filter(evento => categoria.includes(evento.category));
    }
    if (texto) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()));
    }
    return eventosFiltrados;
  }
