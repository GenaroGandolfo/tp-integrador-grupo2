window.addEventListener('load', function(){


    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
        console.log(data);

    
    var trending = document.querySelector ("#trend");
   
    
    for (let index = 0; index < data.results.length; index++) {
        var results = data.results[index];
    


        trending.innerHTML += 
        `
        
        <li>
            <a href="movieDetails.html"> <div><img src="${imageneslink}${results.poster_path}" alt="${results.name}"> </div></a>
        </li>
    
        `     
       
    } 

})
	.catch(function(error){
	console.log('El error fué: ' + error); 
})

})
