window.addEventListener ("load",function(){

    
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${apiKey}&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data)
    
        var comedia = document.querySelector("#comedia");

        for (let index = 0; index < data.results.length; index++) {
            var results = data.results[index];

            comedia.innerHTML +=
            `
                <li>
                    <a href="movieDetails.html"> <div><img src="${imageneslink}" alt=""> </div></a>
                </li>
            `
            
        }
})

    .catch(function(error){
    console.log('El error fué: ' + error);
    })


    
})