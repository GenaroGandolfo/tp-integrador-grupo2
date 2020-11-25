addEventListener('load', function(){


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


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
    console.log(data);
    

    var popular = document.querySelector ("#popular");

    for (let index = 0; index < data.results.length; index++) {
        var results1 = data.results[index];
    


        popular.innerHTML += 
        `
        
        <li>
            <a href="movieDetails.html"> <div><img src="${imageneslink}${results1.poster_path}" alt="${results1.name}"> </div></a>
        </li>
    
        `     
       
    } 
})
	.catch(function(error){
	console.log('El error fué: ' + error);
})



})
