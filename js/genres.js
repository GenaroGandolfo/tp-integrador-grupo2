window.addEventListener('load', function(){
    
    var titulo = document.querySelector('.titulo');
    var peliculas = document.querySelector('.imagenesPelicula');
    var series = document.querySelector('.imagenesSerie');
    var tituloSeries = document.querySelector('.series');
    var carruselPeli = document.querySelector('#carruselPeli')
  
    let idEntrante = location.search;
    console.log(idEntrante);
    let idEntranteObj = new URLSearchParams(idEntrante);
    console.log(idEntranteObj);
    let id = idEntranteObj.get('id');
    console.log(id)

    let nombre = idEntranteObj.get('name');
    console.log(nombre)


    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(response){
        return response.json();
    })
   
        .then (function (data){ 
            console.log(data) 
            for(let index = 0; index<data.results.length; index++){
                var results = data.results[index];
                titulo.innerHTML = `${nombre} Movies`
                carruselPeli.innerHTML += `

                
                    <li>
                        <div class="uk-panel">
                            <a href="detalles.html?id=${results.id}">
                            <div class="imagnesCarrusel"><img src="${imageneslink + results.backdrop_path} " alt="${results.title}"><h3>${results.title}</h3></div></a>
                                
                                <div class="uk-position-center uk-panel"></div>
                        </div>
                    </li>
                
            
            `


            }


        })
        .then (function (data){ 
            console.log(data)
            for(let index = 0; index< data.results.length; index++){
                var results = data.results[index];
                tituloSeries.innerHTML = `${nombre} TV Shows`
                series.innerHTML += `<a href="detalles.html?id=${results.id}"><div class=""><img src="${imageneslink + results.backdrop_path} " alt="${results.name}"></div></a>`

            }
            
   
    
        })
})