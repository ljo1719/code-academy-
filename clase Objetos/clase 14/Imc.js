function calcularIMC () {
    const nombre = document.querySelector("#name").value;
    const peso = document.querySelector("#weight").value;
    const altura = document.querySelector("#height").value;

    const IMC = +peso / ((+altura) * (+altura)) ;
    
    const result = document.querySelector("#resultado");
    result.innerHTML = `El IMC de ${nombre} es : ${IMC}`;
    
}