const contenedor = document.getElementById("contenedor-details")
let nuevoArregloEventos;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(data => data.json())
    .then( data => {
      nuevoArregloEventos = data.events;
      const urlParams = location.search;
      const params = new URLSearchParams(urlParams)
      const id = params.get ("id")
      const eventoFiltrado = nuevoArregloEventos.find(evento => evento._id == id)
      imprimirDetails(eventoFiltrado)
})
.catch(err => console.log(err))


function imprimirDetails(idObjeto) {
  const plantilla = 
`<div class="card" style="width: 30rem;">
    <img src="${idObjeto.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${idObjeto.name}</h5>
      <p class="card-text">${idObjeto.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Date:</strong>  ${idObjeto.date}</li>
      <li class="list-group-item"><strong>Category:</strong>  ${idObjeto.category}</li>
      <li class="list-group-item"><strong>Place:</strong>  ${idObjeto.place}</li>
      <li class="list-group-item"><strong>Capacity:</strong>  ${idObjeto.capacity}</li>
      <li class="list-group-item"><strong>Assistance:</strong>  
       ${idObjeto.assistance}</li>
      <li class="list-group-item"><strong>Price: </strong>   ${idObjeto.price}</li>
     </ul>
</div>`

contenedor.innerHTML = plantilla;
}





