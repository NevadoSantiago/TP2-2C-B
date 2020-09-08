const simbolosCierre =
    [
        "}", "]", ")"
    ]

function verificarPar(e,s){
    switch(e){
        case "{":
            if(s == "}") return true;
            else return false;
        case "[":
            if(s == "]") return true;
            else return false;
        case "(":
             if(s == ")") return true;
            else return false;
            
    }
}

function isBalanced(s) {
    var array = Array.from(s)
    var contador = 0;
    var esIncorrecto = false
    while (contador < array.length && !esIncorrecto) {
        var tamaño = tamañoArrayApertura(array)
        contador = tamaño * 2 + contador;
        for (var i = 0; i < tamaño; i++) {
            if (!verificarPar(array[i],array[tamaño*2-i-1])) {
                esIncorrecto = true
            }
        }
    }
    if(esIncorrecto) return "NO"
    else return "YES"
}
function comprobarNoEsCierre(simbolo) {
    var esCierre = false
    simbolosCierre.forEach(cierre => {
        if (cierre == simbolo) {
            esCierre = true;
        }
    });
    return esCierre
}
function tamañoArrayApertura(array) {
    var contador = 0;
    var seCerro = false
    while (contador < array.length && !seCerro) {
        if (comprobarNoEsCierre(array[contador])) {
            seCerro = true;
        } else {
            contador++
        }
    }
    return contador
}



// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES'); 
