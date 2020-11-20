var apikey='811c43dae475e925f89e17499fd11f5c'

window.addEventListener("load" function(){}

fetch(`https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${apikey} &language=en-US&page=1`)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);
})
.catch(function(error){
console.log('El error fué: ' + error);
})



})



// 811c43dae475e925f89e17499fd11f5c