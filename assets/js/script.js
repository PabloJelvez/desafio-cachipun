//Variables para los contadores generales
let contadorHumano = 0;
let contadorMaquina = 0;
let contadorEmpates = 0;



//Función para validar que el ingreso de las opciones sea correcta
function eleccionJugador(){
    let eleccion = prompt("Elige y escibe una de las siguientes opciones:\n1.- piedra \n2.- papel \n3.- tijeras");
    eleccion = eleccion.toLowerCase();
    let elecciones = ["piedra", "papel", "tijeras"];
    let repite = true;
    while(repite){
        if(elecciones.includes(eleccion)){
            alert("Elección correcta.");
            repite = false;
        }else{
            eleccion = prompt("Elección incorrecta, vuelva a intentar. Elige una opción:\n1.- piedra.\n2.- papel\n3.-tijeras")
        }
    }
    return eleccion;
}

//Función para la elección aleatoria de la jugada de la maquina
function eleccionMaquina(){
    let jugadas = ["piedra", "papel", "tijeras"];
    let jugadaAleatoria = Math.floor(Math.random() * 3);
    return jugadas[jugadaAleatoria];
}

//Función para determinar quien es el ganador de la jugada
function resultados(eleccionUsuario, eleccionMaquinaTexto){
    if(eleccionUsuario === eleccionMaquinaTexto){
        alert("Ambos eligieron lo mismo: Es un empate");
        contadorEmpates++;
    } else if((eleccionUsuario === "piedra" && eleccionMaquinaTexto === "tijeras") ||
     (eleccionUsuario === "papel" && eleccionMaquinaTexto === "piedra") ||
     (eleccionUsuario === "tijeras" && eleccionMaquinaTexto === "papel")
     ){
        alert(`Tu elegiste ${eleccionUsuario} y la máquina sacó ${eleccionMaquinaTexto}: Ganaste`);
        contadorHumano++;
    } else {
        alert(`Tu elegiste ${eleccionUsuario} y la máquina sacó ${eleccionMaquinaTexto}: ¡Perdiste!`);
        contadorMaquina++;
    }
    return
}

//Función para resetear los contadores despues de finalizadas las jugadas ingresadas por el usuario
function resetContadores(){
     contadorHumano = 0;
     contadorMaquina = 0;
     contadorEmpates = 0;
    }

//Función principal donde se ejecuta el ciclo de la cantidad de jugadas ingresadas por el usuario, muestra el resultado final y resetea los contadores generales
function main(){
    let numJugadas = Number(prompt("Ingresa el número de jugadas que deseas:"));
    alert("Iniciamos el juego");
    for (let i = 0; i < numJugadas; i++) {
        let eleccionUsuario = eleccionJugador();
        let eleccionMaquinaTexto = eleccionMaquina();
        resultados(eleccionUsuario, eleccionMaquinaTexto);
    };

    alert(`Juego finalizado, el resultado final es: \n Humano: ${contadorHumano} \n Maquina: ${contadorMaquina} \n Empates: ${contadorEmpates} `);
    if(contadorHumano > contadorMaquina){
        alert("Felicidades le has ganado a la máquina.");
    } else if (contadorHumano < contadorMaquina){
        alert("Lo siento, perdiste, la máquina es la ganadora.")
    } else {
        alert("Es un empate, no hay ganadores.")
    }
    resetContadores();
}
