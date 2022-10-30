let discos = [];
let disco = {};
let pistas = [];
let pista = {};

let busqueda = [];
let guardarDiscos = [];



disco.nombre = "Ni hablar";
disco.autor = "LEÑA";
disco.codigo = 1;
pista.nombre = "GRVD";
pista.duracion = 100;
pistas.push(pista);
pista = {};
pista.nombre = "Temporal";
pista.duracion = 170;
pistas.push(pista);
pista = {};
pista.nombre = "Dentro del espejo";
pista.duracion = 190;
pistas.push(pista);
pista = {};
pista.nombre = "Elipsis";
pista.duracion = 200;
pistas.push(pista);
pista = {};
pista.nombre = "Todo lo que implica";
pista.duracion = 150;
pistas.push(pista);
pista = {};
pista.nombre = "Mareas";
pista.duracion = 140;
pistas.push(pista);
pista = {};
pista.nombre = "De prepo";
pista.duracion = 250;
pistas.push(pista);
pista = {};
pista.nombre = "Lunar";
pista.duracion = 130;
pistas.push(pista);
pista = {};
disco.pistas = pistas;
discos.push(disco);
disco = {};
pista = {};
disco.cantidad = pistas.length;
pistas = [];

disco.nombre = "Diamond Life";
disco.autor = "Sade";
disco.codigo = 2;
pista.nombre = "Smooth Operator";
pista.duracion = 780;
pistas.push(pista);
pista = {};
pista.nombre = "Your love is King";
pista.duracion = 123;
pistas.push(pista);
pista = {};
pista.nombre = "Hang on to your love";
pista.duracion = 241;
pistas.push(pista);
pista = {};
pista.nombre = "Frankie's first affair";
pista.duracion = 125;
pistas.push(pista);
pista = {};
pista.nombre = "Cherry pie";
pista.duracion = 743;
pistas.push(pista);
pista = {};
pista.nombre = "Sally";
pista.duracion = 233;
pistas.push(pista);
pista = {};
pista.nombre = "I will be your friend";
pista.duracion = 236;
pistas.push(pista);
pista = {};
disco.pistas = pistas;
discos.push(disco);
disco = {};
pista = {};
disco.cantidad = pistas.length;
pistas = [];

let pistaMax = 0; 

let discosDuracion = 0;

let alerta = document.getElementsByClassName('alerta')[0];
alerta.innerHTML = `<p>${discos.length}</p>`;

let cambiar = 0;

let cambiarDatos = 0;

let cambiarEstadistica = 0;

function cargarDisco(){
    
    let nombre = validarString("Introducir nombre del DISCO");
    let autor = validarString("Introducir nombre del AUTOR");
    let codigo = validarCodigo("Introducir CÓDIGO del disco (1 a 999)");

    disco.nombre = nombre;
    disco.autor = autor;
    disco.codigo = codigo;

    let pistaNombre;
    let pistaDuracion;

    let confirmar;

    do {

        pistaNombre = validarString("Introducir NOMBRE de la canción");
        pista.nombre = pistaNombre

        pistaDuracion = validarCancion("Introducir DURACIÓN de la canción (0 a 7200)");
        pista.duracion = pistaDuracion;
        
        pistas.push(pista);
        
        pista = {};
        
        confirmar = confirm("¿Seguir introduciendo pistas?");
    } while(confirmar == true);
    
    disco.pistas = pistas;
    discos.push(disco);
    disco = {};
    pista = {};
    disco.cantidad = pistas.length;
    pistas = [];
    
    alerta.innerHTML = `<p>${discos.length}</p>`;
}

function mostrar(){

    if(discos.length == 0){
        alert("Nada que mostrar");
        cambiar = 0;
        cambiarIcono();
    }
    limpiar();
    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of discos) {

        let html = `<div class="disco ${disco.codigo}">`;
        html += `<img src="img/disco.png" class="discoimg" id="img${disco.codigo}">`;
        html += `
            <h2 class="nombre">${disco.nombre}</h2>
            <p class="autor">${disco.autor}</p>
            <p class="codigo">#${disco.codigo}</p>`;
        
        let pistas = disco.pistas;
        
        let pistasCantidad = 0;
        let discoDuracion = 0;
        let duracionMax = 0;

        


        for(let pista of pistas) {
            html += `<div class="row">`;
            html += `<p class="nombrepista">${pista.nombre}</p>`;

            info();
            if(pista.duracion == pistaMax){
                html += `<p class="duracion mas-largo">${pista.duracion} seg</p>`;
            } else if(pista.duracion > 180){
                html += `<p class="duracion largo">${pista.duracion} seg</p>`;
            } else {
                html += `<p class="duracion">${pista.duracion} seg</p>`;
            }

            html += `</div>`;
        
            if(pista.duracion > duracionMax) {
                duracionMax = pista.duracion;
            } 

            pistasCantidad++
            discoDuracion += pista.duracion;

            
        }
        
        discosDuracion += discoDuracion;
        //extra

        html += `<p class="pistas">Pistas: (${pistasCantidad}) </p>`;

        html += `<div class="contenedor-datos" id="dato${disco.codigo}" onclick="verEstadistica()"> `;
        html += `<p>Cantidad de pistas: <strong>${pistasCantidad}</strong></p><hr>`;
        html += `<p>Duración del disco: <strong>${discoDuracion} seg</strong></p><hr>`;
        html += `<p>Mayor duración: <strong>${duracionMax} seg</strong></p> <hr>`;
        html += `<p class="ultimo-dato">Promedio de duración: <strong>${(discoDuracion / pistasCantidad).toFixed(1)} seg</strong></p>`;
        html += `</div>`;

        html += `</div>`;
        bloques.innerHTML += html;

    }   
}

function buscar(){
    guardarBusqueda();
    busqueda = [];

    let buscar = parseInt(prompt("Ingresar código del disco"));

    for(let disco of discos) {
        if(buscar == disco.codigo){
            busqueda.push(disco);
        }
    }

    if (busqueda.length == 0){
        return alert("No se encontro");
    }

    resetear();

    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of busqueda) {

        let html = `<div class="disco ${disco.codigo}">`;
        html += `<img src="img/disco.png" class="discoimg" id="img${disco.codigo}">`;
        html += `
            <h2 class="nombre">${disco.nombre}</h2>
            <p class="autor">${disco.autor}</p>
            <p class="codigo">#${disco.codigo}</p>`;
        
        let pistas = disco.pistas;
        
        let pistasCantidad = 0;
        let discoDuracion = 0;
        let duracionMax = 0;


        for(let pista of pistas) {
            html += `<div class="row">`;
            html += `<p class="nombrepista">${pista.nombre}</p>`;

            info();
            if(pista.duracion == pistaMax){
                html += `<p class="duracion mas-largo">${pista.duracion} seg</p>`;
            } else if(pista.duracion > 180){
                html += `<p class="duracion largo">${pista.duracion} seg</p>`;
            } else {
                html += `<p class="duracion">${pista.duracion} seg</p>`;
            }

            html += `</div>`;
        
            if(pista.duracion > duracionMax) {
                duracionMax = pista.duracion;
            } 

            pistasCantidad++
            discoDuracion += pista.duracion;

            
        }
    
        //extra

        html += `<p class="pistas">Pistas: (${pistasCantidad}) </p>`;

        html += `<div class="contenedor-datos" id="dato${disco.codigo}" onclick="verEstadistica()"> `;
        html += `<p>Cantidad de pistas: <strong>${pistasCantidad}</strong></p><hr>`;
        html += `<p>Duración del disco: <strong>${discoDuracion} seg</strong></p><hr>`;
        html += `<p>Mayor duración: <strong>${duracionMax} seg</strong></p> <hr>`;
        html += `<p class="ultimo-dato">Promedio de duración: <strong>${(discoDuracion / pistasCantidad).toFixed(1)} seg</strong></p>`;
        html += `</div>`;

        html += `</div>`;
        bloques.innerHTML += html;

    }
    discos = guardarDiscos;
    alerta.innerHTML = `<p>${discos.length}</p>`;

    
}
