let texto = "";
let word;

while ((word = prompt("ingrese una palabra")) != null){
    if (texto ==="") {
        texto = word;
} else {
    texto = texto + "-" + word;
}
}
document.write(texto)