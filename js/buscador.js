window.addEventListener("load",function(){

    var queryStringObj = new URLSearchParams(location.search);

    var buscar = queryStringObj.get("buscar");

    var search = document.querySelector("buscar");

    search.innerHTML = "buscando" + buscar

    







})