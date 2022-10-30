function resetearAlerta(){
    if (discos.length == 0){
        return alert("No hay discos guardados");
    }

    let confirmar = confirm("¿Seguro querés refrescar la cantidad de discos?");
    if(confirmar == false){
        return;
    }

    alert(`Se refrescaron ${discos.length} discos`);
    resetear();
}

function guardarBusqueda(){
    guardarDiscos = discos;
    return guardarDiscos;
}

function info(){

    for(let disco of discos) {
        let pistas = disco.pistas;

        for(let pista of pistas) {
            if(pista.duracion > pistaMax) {
                pistaMax = pista.duracion;
            } 
        }
    }

    return pistaMax;

}
