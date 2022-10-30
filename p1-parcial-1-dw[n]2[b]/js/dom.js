function cambiarIcono(){

    if (cambiar == 0){
        let mostrarIcono = document.getElementsByClassName('switch')[0];
        mostrarIcono.innerHTML = `<div class="boton ocultar"><a onclick="ocultar(), cambiarIcono()">ocultar</a></div>`;
        cambiar = 1;
    } else {
        let mostrarIcono = document.getElementsByClassName('switch')[0];
        mostrarIcono.innerHTML = `<div class="boton mostrar"><a onclick="mostrar(), cambiarIcono()">mostrar</a></div>`;
        cambiar = 0;
    }

}

function ocultar(){
    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";
}

function verEstadistica(tipo){
    let estadistica = document.getElementById(`${tipo}`);
    estadistica.style.display = "none";
}

function limpiar(){
    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";
}

function resetear(){
    discos = [];
    disco = {};
    pistas = [];
    pista = {};

    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";

    alerta.innerHTML = `<p>${discos.length}</p>`;
    cambiar = 1;
    cambiarIcono();
}

function datos(){

    if(cambiarDatos == 1){
            document.getElementsByClassName('datos-cursada')[0].style.display = "none";
            cambiarDatos = 0;
        return;
    } else{
            document.getElementsByClassName('datos-estadistica')[0].style.display = "none";

            let stats = document.getElementsByClassName('datos-cursada')[0]
            stats.style.display = "block";
            stats.innerHTML = "";
            stats.innerHTML += `<h2>Datos</h2><p>Marcelo Anavia</p><hr><p>Programación 1</p><hr><p>Parcial 1</p>`
            cambiarDatos = 1;
    }
}

function estadistica(){

    mostrar();
    limpiar();

    if(cambiarEstadistica == 1){
            document.getElementsByClassName('datos-estadistica')[0].style.display = "none";
            cambiarEstadistica = 0;

            let bloques = document.getElementsByClassName('discos')[0];
            bloques.innerHTML = "";
        
            alerta.innerHTML = `<p>${discos.length}</p>`;
            cambiar = 1;
            cambiarIcono();
        return;
    } else{
            document.getElementsByClassName('datos-cursada')[0].style.display = "none";

            let stats = document.getElementsByClassName('datos-estadistica')[0]
            stats.style.display = "block";
            stats.innerHTML = "";
            stats.innerHTML += `<h2>Estadísticas</h2><p>Cantidad de discos: <strong>${discos.length} </strong></p><hr><p>Duración total: <strong>${discosDuracion} seg</strong></p><hr><p>Canción más larga: <strong>${pistaMax} seg</strong></p>`
            cambiarEstadistica = 1;

            let bloques = document.getElementsByClassName('discos')[0];
            bloques.innerHTML = "";
        
            alerta.innerHTML = `<p>${discos.length}</p>`;
            cambiar = 1;
            cambiarIcono();
    }



}