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
            <a href="detalles.html?${results.id}"> <div><img src="${imageneslink + results.poster_path}" alt="${results.name}"> </div></a>
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
            <a href="detalles.html?&id=${results1.id}"> <div><img src="${imageneslink + results1.poster_path}" alt="${results1.name}"> </div></a>
        </li>
    
        `     
       
    } 
})
	.catch(function(error){
	console.log('El error fué: ' + error);
})



fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
    console.log(data);
    

    var tvpopular = document.querySelector ("#tvpopular");

    for (let index = 0; index < data.results.length; index++) {
        var results2 = data.results[index];
    


        tvpopular.innerHTML += 
        `
        
        <li>
            <a href="detalles.html?id=${results2.id}"> <div><img src="${imageneslink + results2.poster_path}" alt="${results2.name}"> </div></a>
        </li>
    
        `     
       
    } 
})
	.catch(function(error){
	console.log('El error fué: ' + error);
})


})

// hola //
