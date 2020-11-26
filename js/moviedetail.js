window.addEventListener("load",function(){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`idShow`)
    var stringTipo = queryStringObj.get(`tipo`)
    var generoTipo = queryStringObj.get(`tipodegenero`)
    console.log(queryStringObj.get(`idShow`))
    var nombreGenero = queryStringObj.get(`nombredelgenero`)

    if (stringTipo == "pelicula") { 


fetch(`https://api.themoviedb.org/3/movie/${queryStringObjId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
        console.log(data);

    
    var despeli= document.querySelector ('#movied');
   
    
    for (let index = 0; index < data.results.length; index++) {
        var results = data.results[index];
    


        despeli.innerHTML += 
        `
        
        <div>
        <div class="titpeli">
            <h2>${results.name}</h2>
        </div>
        <div class="despeli">
            <h4>Sinopsis</h4>
            <p> ${results.overview}
            </p>
        </div>
        <div class="despeli">
            <h4>Elenco</h4>
            <ul> 
                <li>Robert Downey, Jr. </li>
                <li>Terrence Howard</li>
                <li>Jeff Bridges</li>
                <li>Gwyneth Paltrow</li>
                <li>Leslie Bibb</li>
                <li> Shaun Toub</li>
                <li> Faran Tahir</li>
            </ul>
        </div>


        </div>
        <div class="imagen">
        <img src="${imageneslink}${results.poster_path}" alt="" width="450px">
    </div>
        `     
       
    } 

})
	.catch(function(error){
	console.log('El error fué: ' + error); 
})






})