let vari1;
let vari2;
let visor;

function somar(vari1,vari2){
    vari1 = parseFloat(document.getElementById("var1").value);
    vari2 = parseFloat(document.getElementById("var2").value);
    visor = vari1 + vari2;
    document.getElementById("visor").value = visor;
}

function diminuir(vari1,vari2){
    vari1 = parseFloat(document.getElementById("var1").value);
    vari2 = parseFloat(document.getElementById("var2").value);
    visor = vari1 - vari2;
    document.getElementById("visor").value = visor;
}

function multiplicar(vari1,vari2){
    vari1 = parseFloat(document.getElementById("var1").value);
    vari2 = parseFloat(document.getElementById("var2").value);
    visor = vari1 * vari2;
    document.getElementById("visor").value = visor;
}

function dividir(vari1,vari2){
    vari1 = parseFloat(document.getElementById("var1").value);
    vari2 = parseFloat(document.getElementById("var2").value);
    visor = vari1 / vari2;
    document.getElementById("visor").value = visor;
}

function limpar(vari1,vari2){
    visor = 0;
    document.getElementById("var1").value = "";
    document.getElementById("var2").value = "";
    document.getElementById("visor").value = visor;
}