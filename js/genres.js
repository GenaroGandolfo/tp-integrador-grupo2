window.addEventListener('load', function(){
    var titulo = document.querySelector('.titulo');
    var peliculas = document.querySelector('.imagenesPelicula');
    var series = document.querySelector('.imagenesSerie');
    var tituloSeries = document.querySelector('.series');
    
   /*
    //var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`idShow`)
    var stringTipo = queryStringObj.get(`tipo`)
    var generoTipo = queryStringObj.get(`tipodegenero`)
    console.log(queryStringObj.get(`id`))
    var nombreGenero = queryStringObj.get(`nombredelgenero`)
    */
    let idEntrante = location.search;
    console.log(idEntrante);
    let idEntranteObj = new URLSearchParams(idEntrante);
    console.log(idEntranteObj);
    let id = idEntranteObj.get('id');
    console.log(id)
    //Traer nombre
    let nombre = idEntranteObj.get('name');
    console.log(nombre)
    //Fetch peliculas genero
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(response){
        return response.json();
    })
   
        .then (function (data){ 
            console.log(data) 
            for(let index = 0; index<data.results.length; index++){
                var results = data.results[index];
                titulo.innerHTML = `${nombre} Movies`
                peliculas.innerHTML += `<a href="detallesPeliculas.html?id=${results.id}"><div class="peliculasBloque"><img src="${imageneslink + results.backdrop_path} " alt="${results.title}"></div></a>`

            }


        })
        .then (function (data){ 
            console.log(data)
            for(let index = 0; index< data.results.length; index++){
                var results = data.results[index];
                tituloSeries.innerHTML = `${nombre} TV Shows`
                series.innerHTML += `<a href="detallesSeries.html?id=${results.id}"><div class=""><img src="${imageneslink + results.backdrop_path} " alt="${results.name}"></div></a>`

            }
            
   
    
        })
})