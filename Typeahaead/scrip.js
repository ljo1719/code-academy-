let input = document.getElementById ("lista_input");

let lista = document.getElementById ("lista");

input.addEventListener ("input", (event)=> {

    lista.style.display ="block";

    let key = event.target.value;

    if (key.length>0){
        search (key);
    }
});

const search = (key) => {

    fetch(`https://restcountries.eu/rest/v2/name/${key}?fields=name`)
        .then( res => res.json())
        .then ( data => {
            
            if (Array.isArray(data)){

                arma_lista(

                    data.map((item)=>{
                    return item.name;
                })
        );
} 

else {
    arma_lista ()
}

    })
    .catch(e => {console.log(e)})
}

const arma_lista = (items = []) => {

    lista.innerHTML = "";

    items.map( (item) => {
        lista.innerHTML += `<li>${item}</li>`
    })
}


lista.addEventListener("click",(e)=> {

    if (e.target && e.target.nodeName == "LI"){
        input.value = e.target.innerHTML;
        arma_lista ();
    }
}); 
