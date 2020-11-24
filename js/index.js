window.addEventListener('load', function(){

    var apiKey  ='811c43dae475e925f89e17499fd11f5c';
    var imageneslink ='https://image.tmdb.org/t/p/w500';

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
        console.log(data)

    
    var populares = document.querySelector ("#pop");
   
    
    for (let index = 0; index < data.results.length; index++) {
         var results = data.results[index];
        
    }


        populares.innerHTML += 
        `
        
            <a href="movieDetails.html"> 
            <div> <img src="${imageneslink}${results.poster_path}" alt="${results.title}"> </div> 
            <div class="uk-position-center uk-panel"></div>
            </a> 
        
        `     
        

})
	.catch(function(error){
	console.log('El error fué: ' + error); 
})





})