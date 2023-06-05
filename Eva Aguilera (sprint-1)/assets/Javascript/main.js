console.log(data);
let seccion = document.getElementById("contenedor");
console.log([seccion]);

function crearPlantilla(objeto) {
    return `
        <div class="card" style="width: 18rem; height: 25rem;">
            <img src="${objeto.image}" class="card-img-top" alt="Maraton">
            <div class="card-body">
                <h5 class="card-title">${objeto.name}</h5>
                <p class="card-text">${objeto.description}</p>
                <div class="boxbutton">
                    <h5>${objeto.price}</h5>
                    <a href="../pages/details.html" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
}

function imprimirDatos(array, place) {
    let template = ""

    for (let event of array) {
        template += crearPlantilla(event)
    }
    place.innerHTML += template
}
imprimirDatos(data.events, seccion)
