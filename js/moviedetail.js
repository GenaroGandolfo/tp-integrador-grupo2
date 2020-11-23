window.addEventListener("load",function(){
var apikey='811c43dae475e925f89e17499fd11f5c'

fetch(``)
.then(function(response){
return response.json();
})
.then(function(data){
   for (let index = 0; index < data.results.length; index++) {
       const element = data.results [index];
       

    
   }
   console.log(data);
})
.catch(function(error){
console.log('El error fué: ' + error);
})



})



// 811c43dae475e925f89e17499fd11f5c