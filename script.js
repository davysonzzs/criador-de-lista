var tn = document.getElementById("item")
var btna = document.getElementById("add")
var btnb = document.getElementById("rdd")
var limpar = document.getElementById("lim")
var resul = document.getElementById("oi")

btna.addEventListener('click', () => {
    var tt = String(tn.value)
    resul.innerHTML += `<li>${tt}</li>`
})

btnb.addEventListener('click', () =>{
    var itens = resul.getElementsByTagName("li");
    if(itens.length > 0){
        resul.removeChild(itens[itens.length - 1]);
    }
})

limpar.addEventListener('click', () =>{
    resul.innerHTML = ``
})