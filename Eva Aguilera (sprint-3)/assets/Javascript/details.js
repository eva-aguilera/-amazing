const contenedor = document.getElementById("contenedor-details")

const params = new URLSearchParams (location.search)

const id = params.get ("id")

const idEncontrado = data.events.find(event => event._id == id)

contenedor.innerHTML = 

`<div class="card" style="width: 30rem;">
    <img src="${idEncontrado.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${idEncontrado.name}</h5>
      <p class="card-text">${idEncontrado.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Date:</strong>  ${idEncontrado.date}</li>
      <li class="list-group-item"><strong>Category:</strong>  ${idEncontrado.category}</li>
      <li class="list-group-item"><strong>Place:</strong>  ${idEncontrado.place}</li>
      <li class="list-group-item"><strong>Capacity:</strong>  ${idEncontrado.capacity}</li>
      <li class="list-group-item"><strong>Assistance:</strong>  
       ${idEncontrado.assistance}</li>
      <li class="list-group-item"><strong>Price: </strong>   ${idEncontrado.price}</li>
     </ul>
</div>`







//template card 

