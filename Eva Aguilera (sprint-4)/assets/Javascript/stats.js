const tbody1 = document.getElementById('tbody1');
const tbody2 = document.getElementById('tbody2');
const tbody3 = document.getElementById('tbody3');

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    
    let eventosArray = data.events; // guarda  el array de data events
    let date = data.currentDate; // guarda la fecha del eventos
    eventosArray = eventosArray.filter(evento => evento.date < date); //filtra un evento con fecha y la fecha no es igual a la actual retorna un false
    const eventossFiltrados = eventosArray.filter(evento => evento.date < date);  //esta constante guarda la funcion de filtrar un evento 
    console.log(data.events);
    console.log(eventossFiltrados);

    //REDUCE = ejecuta una función reductora sobre cada elemento de un array,

    // Tabla-1
    let mayorAsistencia = eventosArray.reduce((acc, act) => { 
      if ((act.assistance / act.capacity) > (acc.assistance / acc.capacity)) {
        return act;
      } else {
        return acc;
      }
    });

    let menorAsistencia = eventosArray.reduce((acc, act) => {
      if ((act.assistance / act.capacity) < (acc.assistance / acc.capacity)) {
        return act;
      } else {
        return acc;
      }
    });

    let mayorCapacidad = eventosArray.reduce((acc, act) => {
      if (act.capacity > acc.capacity) {
        return act;
      } else {
        return acc;
      }
    });

    function Tabla1(mayorAsistencia, menorAsistencia, mayorCapacidad) {
      let plantilla = `        
      <tr>
        <td>${mayorAsistencia.name}: ${((mayorAsistencia.assistance / mayorAsistencia.capacity) * 100).toFixed(2)}%</td>
        <td>${menorAsistencia.name}: ${((menorAsistencia.assistance / menorAsistencia.capacity) * 100).toFixed(2)}%</td>
        <td>${mayorCapacidad.name}: ${mayorCapacidad.capacity}</td>
      </tr>`;
      tbody1.innerHTML = plantilla;
    }
    Tabla1(mayorAsistencia, menorAsistencia, mayorCapacidad);

    // Tabla-2 (Upcoming)
    let nuevoArregloEventos = data.events;
    console.log(nuevoArregloEventos);

    function filtrarUpcoming(arreglo){
      const filtroUpcomingEvents = arreglo.filter(evento => evento.date > "2023-03-10")
      return filtroUpcomingEvents;
    }

    const EventosUpcoming = filtrarUpcoming(nuevoArregloEventos);
    const categoriasUpcoming = [...new Set(EventosUpcoming.map(event => event.category))].map(category => EventosUpcoming.filter(event => event.category === category));
    console.log(categoriasUpcoming);

    let categoriaEventosUpcoming = [];

    for (const category of categoriasUpcoming) {
      let revenue = category.reduce((acc, act) => act.price * act.estimate + acc, 0);
      let percentajeAssistance = (category.reduce((acc, act) => (((act.estimate / act.capacity) * 100) + acc), 0) / category.length).toFixed(2);

      let nombreCategoria = category[0].category;

      let obj = {
        "category": nombreCategoria,
        "revenue": revenue,
        "percentaje": percentajeAssistance
      };
      categoriaEventosUpcoming.push(obj);
    }
    console.log(categoriaEventosUpcoming);

    function Tabla2(categorias, tbody2) {
      let plantilla = '';

      for (const categoria of categorias) {
        plantilla += `        
          <tr>
            <td>${categoria.category}</td>
            <td>${categoria.revenue}</td>
            <td>${categoria.percentaje}%</td>
          </tr>`;
      }
      tbody2.innerHTML = plantilla;
    }
    Tabla2(categoriaEventosUpcoming, tbody2);

    //Tabla-3-past-events-------------------------------------------------------------------------------------------

    function filtrarPast(arreglo){
      const filtroPastEventos = arreglo.filter(evento => evento.date < "2023-03-10")
      return filtroPastEventos;
    }
    const EventosPast = filtrarPast(nuevoArregloEventos);//ARRAY FILTRADOR DE EVENTOS UPCOMING

    const categoriasPast = [...new Set(EventosPast.map(event => event.category))].map(category => EventosPast.filter(event => event.category === category));

      let categoriaEventosPast = [];

      for (const category of categoriasPast) {
        let revenue = category.reduce((acc, act) => act.price * act.assistance + acc, 0)//el acc arranca de 0
        let percentajeAssistance = (category.reduce((acc, act) => (((act.assistance/act.capacity)*100)+acc), 0)/category.length).toFixed(2)
        let nombreCategoria = category[0].category
        let obj = {
          "category": nombreCategoria,
          "revenue": revenue,
          "percentaje": percentajeAssistance
        }
        categoriaEventosPast.push(obj);
      }

      function Tabla3(categorias, tbody3){
        let plantilla = '';
      
        for (const categoria of categorias) {
          plantilla += `        
              <tr>
                <td>${categoria.category}</td>
                <td>${categoria.revenue}</td>
                <td>${categoria.percentaje}%</td>
              </tr>`;
        }
        tbody3.innerHTML = plantilla;
      }

      Tabla3(categoriaEventosPast, tbody3)



  })
  .catch(error => {   
    console.error('Error:', error);
  });

