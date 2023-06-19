export function imprimirCheckboxs(categorias, checkbox){
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

export function crearEventos(objeto){
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
   //filtro cruzado
   export function filtroCruzado(eventos, categoria, texto){
     let eventosFiltrados = eventos;
     if (categoria.length > 0) {
       eventosFiltrados = eventos.filter(evento => categoria.includes(evento.category));
     }
     if (texto) {
       eventosFiltrados = eventosFiltrados.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()));
     }
     return eventosFiltrados;
   }
