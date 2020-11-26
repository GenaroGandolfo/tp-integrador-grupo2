window.addEventListener('load', function(){

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(function(response){
        return response.json();
    })


    .then(function(data){
        console.log(data);

    let listaDeGeneros = document.querySelector('#listaDeGeneros');

         for (let i = 0; i < data.genres.length; i++) {
            
            
            listaDeGeneros.innerHTML +=

            `<a href="genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}"><h2>${data.genres[i].name}</h2></a>`
        }
    })

    .catch(function(error){
        console.log('El error fué: ' + error); 
    })

})