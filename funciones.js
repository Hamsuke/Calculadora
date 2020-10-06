function init() {
    var resultado = document.getElementById('resultado');
    var sumar = document.getElementById('sumar');
    var restar= document.getElementById('restar');
    var dividision= document.getElementById('division');
    var multiplicacion=document.getElementById('multiplicacion');
    var uno=document.getElementById('uno');
    var dos=document.getElementById('dos');
    var tres=document.getElementById('tres');
    var cuatro=document.getElementById('cuatro');
    var cinco=document.getElementById('cinco');
    var seis=document.getElementById('seis');
    var siete=document.getElementById('siete');
    var ocho=document.getElementById('ocho');
    var nueve=document.getElementById('nueve');
    var cero=document.getElementById('cero');
    var igual=document.getElementById('igual');
    var punto=document.getElementById('punto');
    var operacion=document.getElementById('operacion');
    var clean=document.getElementById('clean');

    uno.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick=function (ev) {
        resultado.textContent = resultado.textContent + "0";
    }

    punto.onclick=function (ev) {
        resultado.textContent = resultado.textContent + ".";
    }
}

