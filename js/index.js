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


        populares.innerHTML += 
        `
        <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@"   class="populares"  id="pop">
            <li>
                <a href="movieDetails.html">
                    <img src="${imageneslink}${results.poster_path}" alt="">
                </a>     
            </li> 
        </ul>
        `     
        

})
	.catch(function(error){
	console.log('El error fué: ' + error); 
})





})