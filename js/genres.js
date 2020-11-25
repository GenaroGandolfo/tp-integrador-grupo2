window.addEventListener ("load",function(){

    
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
    
        var comedia = document.querySelector("#comedia");

        for (let index = 0; index < 10; index++) {
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