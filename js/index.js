window.addEventListener('load', function(){

   

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
        console.log(data)

    
    var populares = document.querySelector ("#pop");
   
    
    for (let i = 0; i< data.results.length; i++) {
         var results = data.results[i];
        
    }


        populares.innerHTML += `
        
            <a href="movieDetails.html">
                <img src="${imageneslink}${results.poster_path}" alt="">
                <div class="uk-position-center uk-panel"></div>
            </a>     
          
        `     
        

})
	.catch(function(error){
	console.log('El error fué: ' + error); 
})





})