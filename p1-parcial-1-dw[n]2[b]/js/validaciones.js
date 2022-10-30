function validarCodigo(msg){

    let codigo;
    do {
        codigo = parseInt(prompt(msg));
        var flagCodigo = true;

        if (isNaN(codigo)){
            alert("Debe ser numero");
            flagCodigo = false;
        } else if (codigo < 1 || codigo > 999) {
            alert("Debe estar entre 1 y 999");
            flagCodigo = false;
        }

        for(let i = 0; i < discos.length; i++){
            if(discos[i].codigo == codigo){
                alert("Codigo repetido");
                flagCodigo = false;
            }
        }

        
    } while (!flagCodigo);

    return codigo;
}

function validarString(msg){
    let string;
    do {

        string = prompt(msg);
        var flagString = true;

        if(string.length == 0){
            alert("Tenés que poner algo");
            flagString = false;
        }

    } while (!flagString);

    return string;
}

function validarCancion(msg){
    let cancion;
    do {

        cancion = parseInt(prompt(msg));

        var flagCancion = true;
        if (isNaN(cancion)){

            alert("Debe ser numero");
            flagCancion = false;
        } else if (cancion < 0 || cancion > 7200){

            alert("Debe estar entre 0 y 7200");
            flagCancion = false;
        }
    } while (!flagCancion);

    return cancion;
}
