window.addEventListener('load',function(){


    var detalle = document.querySelector(`.detalle`)
  
    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    console.log(queryStringObj.get(`id`))
    var mediaType = queryStringObj.get(`type`)




    

    fetch(`https://api.themoviedb.org/3/movie/${queryStringObjId}?api_key=${apiKey}&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        detalle.innerHTML += 
        `
        
        <div>
            <div class="titulo">
                <h2>${data.title} </h2>
            </div>
            <div class="sinopsis">
                <h4> Synopsis </h4>
                <p>${data.overview}
                </p>
            </div>
            <div class="Rating">
                <h4>Rating</h4>
                <p>
                ${data.vote_average}
                </p>
        
            </div>
        </div>    
           
        <div class="imagen">
        <img src="${imageneslink + data.poster_path}" alt="" width="450px">
        </div>
        
    `

  
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

/*else if (mediaType == 'serie'){
fetch(`https://api.themoviedb.org/3/tv/${queryStringObjId}?api_key=${apiKey}&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

    })
    detalle.innerHTML +=
    `<section class="detalle">
        <div>
            <div class="titulo">
                <h2>${data.name} </h2>
            </div>
            <div class="sinopsis">
                <h4> Synopsis </h4>
                <p>${data.overview}
                </p>
            </div>
            <div class="Rating">
                <h4>Rating</h4>
                <p>
                ${data.vote_average}
                </p>
        
            </div>
                <div class="fecha">
                    <h4>Release Date</h4>
                <p>
                    ${data.vote_average}
                </p>
    
        </div>
            
        </div>    
           
        <div class="imagen">
        <img src="${imageneslink + data.poster_path}" alt="" width="450px">
        </div>
    </section>`
    }*/
})