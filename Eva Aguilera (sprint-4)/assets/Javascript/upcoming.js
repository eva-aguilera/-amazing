const $div = document.getElementById('eventos-futuros-contenedor');
const $seccion = document.getElementById('contenedor');
const $checkBoxes = document.getElementById('form-checkbox');
const $buscador = document.getElementById('Busqueda');

let nuevoArregloEventos;

nuevoArregloEventos = data.events;
const nuevasCategorias = [...new Set(nuevoArregloEventos.map(evento => evento.category))]
const nuevoArregloEventosUpcoming = filtrarUpcoming(nuevoArregloEventos);//ARRAY FILTRADOR DE EVENTOS UPCOMING

imprimirCheckboxs(nuevasCategorias, $checkBoxes)
template(nuevoArregloEventosUpcoming, $div)

//EVENTOS
const filterevents = () => {
  const arregloCheckboxsID = [...$checkBoxes.querySelectorAll('input:checked')].map(evento => evento.id);
  const eventosFiltrados = filtroCruzado(nuevoArregloEventos, arregloCheckboxsID, $buscador.value)
  template(eventosFiltrados, $seccion)
}
$checkBoxes.addEventListener("click",filterevents ) 

$buscador.addEventListener("input",filterevents)

function filtrarUpcoming(arreglo){
const filtroUpcomingEvents = arreglo.filter(evento => evento.date > "2023-03-10")
return filtroUpcomingEvents;
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
function crearEventos(objeto){
return `<div class="card col-11 col-md-4 col-xl-3 ">
      <img id="imgCards" src="${objeto.image}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text"> Price: ${objeto.description} </p>
        <div class = "div-precioBoton">
          <p class="card-text"> Price: ${objeto.price} </p>
          <a href="./details.html?id=${objeto._id}" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div> 
`
}
function template(arreglo){
let plantilla = '';
if(arreglo.length === 0){
$div.innerHTML = `<h2>¡sorry! this event can't be found </h2>`
}
else{
for (const evento of arreglo) {
plantilla += crearEventos(evento);
}
$div.innerHTML = (plantilla);
}
}
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








