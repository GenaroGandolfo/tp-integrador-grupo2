window.addEventListener("load", function(){

    var apiKey='811c43dae475e925f89e17499fd11f5c'

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=811c43dae475e925f89e17499fd11f5c&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
    console.log(data);
    for (let index = 0; index < data.results.length; index++) {
        var results = data.results[index]; 
        
    populares.innerHTML+=

    `<li>
    <a href="movieDetails.html"> <div><img src="imagenes/soncomoninos.jpg" alt="Son como niños"> </div></a> 
    </li>`

}
})
	.catch(function(error){
	console.log('El error fué: ' + error);
})

})