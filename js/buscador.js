window.addEventListener("load", function(){

    this.location.search
    let niidea = location.search
    
    let queryString = new URLSearchParams(niidea)
    
    let loBuscado = queryString.get("buscador");

    
    fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${loBuscado}8&page=1`)
        .then(function (response) {
        return response.json();

            }
        )

        .then(
            function (data) {
                let listadoResultados = document.querySelector("#resultadoB")

                let resultadoBusqueda = data.results
                console.log(resultadoBusqueda)


                resultadoBusqueda.forEach(function (resultados) {
                    listadoResultados.innerHTML +=
                `
                <a href=""><img src="${resultadoBusqueda.poster_path}" alt=""></a> 
                <h2>$</h2>
                `
                });
            }

        )
    
    
    })