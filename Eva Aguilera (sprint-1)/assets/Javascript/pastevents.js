const eventosPasadosContenedor = document.getElementById('eventos-pasados-contenedor');

for (let i = 0; i < data.events.length; i++) {
    const evento = data.events[i];
    const eventoDate = new Date(evento.date);

    if (eventoDate.getFullYear() === 2022) {
        const eventoTemplate = `
            <div class="card" style="width: 18rem; height: 25rem;">
                <img src="${evento.image}" class="card-img-top" alt="Maraton">
                <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <div class="boxbutton">
                        <h5>${evento.price}</h5>
                        <a href="../pages/details.html" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`;
        eventosPasadosContenedor.innerHTML += eventoTemplate;
    }
}




