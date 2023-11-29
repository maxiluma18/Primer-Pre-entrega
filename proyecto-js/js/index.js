// Simulador interactivo para comprar un auto
const cumpleEdad = (edad, edadPermitida) =>{//Función Flecha que chequea que la edad del cliente sea mayor o igual a la edad permitida
    if(edad>=edadPermitida){
        return true;
    }else{
        return false;
    }
}

const comprarAuto = (precioAuto, cantidadDinero) => {//Función Flecha que chequea que el dinero de el cliente sea mayor o igual al precio del auto en cuestión
    if(precioAuto<=cantidadDinero){
        return true;
    }else{
        return false;
    }
}

const colorAutomovil=(colorAuto, auto)=>{//Función Flecha que pinta el auto de un color
    let color;
    let verdadero=true;
    while(verdadero){
        switch(colorAuto){
            case 1:
                alert(`Buenísimo, el color del ${auto} es rojo`);
                color = "Rojo";
                verdadero=false;
                return color;
            case 2:
                alert(`Buenísimo, el color del ${auto} es azul`);
                color = "Azul";
                verdadero=false;
                return color;
            case 3:
                alert(`Buenísimo, el color del ${auto} es negro`);
                color = "Negro";
                verdadero=false;
                return color;
            case 4:
                alert(`Buenísimo, el color del ${auto} es blanco`);
                color = "Blanco";
                verdadero=false;
                return color;
            default:
                colorAuto = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                break;
        }
    }
}

let nombreCliente = prompt("Ingrese su nombre").toUpperCase();//Pedimos nombre al Cliente

while(nombreCliente == ""){ //Si el string esta vacío, repite hasta que sea valido, es decir, su length sea mayor a 0
    nombreCliente = prompt("No valido!! 🤨🤔🤔, por favor ingrese su nombre").toUpperCase();
}

console.log(`Hola, Bienvenido ${nombreCliente} a la concesionaria: LegendaryMotors`);

const edadPermitida = 16;
let edad = parseInt(prompt("Ingrese su edad (16 años o más para ingresar)"))


if(cumpleEdad(edad, edadPermitida)){
    console.log(`\nTienes ${edad} años, por lo tanto, puedes seguir con la compra`);
    let cantidadDinero = parseInt(prompt("Continuemos Ingresando la cantidad de dinero que espera gastar en un auto (Cantidad Minima: $1000)")) // Pedimos dinero al Cliente
    if(cantidadDinero>=1000){//Si es mayor sigue corriendo el código, sino sale un clg y termina el simulador
        console.log(`\nExcelente ${nombreCliente}, dispones de $${cantidadDinero}`)
        let marcaElegida = parseInt(prompt("Por favor indique la marca de auto que desea:\n1.🚙Fiat Uno $1000 \n2.🚙Chevrolet Voyage $3000 \n3.🚙Honda Civic $5000 \n4.🚙Ford Mustang $7000 \n5.🚙Lamborghini Huracan $10000"));//Menu de opciones
        let auto; // Variable no definida, para darle el auto que escogió el usuario
        let activado = true;
        while(activado){//Mientras sea true, que siga preguntando que auto quiere el usuario
            switch(marcaElegida){
                case 1:
                    if(comprarAuto(1000, cantidadDinero)){
                        auto = "Fiat Uno";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`);
                        console.log(`\nAhora el ${auto} es tuyo`);
                        activado=false;
                        let colorElegido = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                        let color = colorAutomovil(colorElegido, auto);//color = al color que escogio el usuario
                        console.log(`\nFelicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} color ${color}🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }
                case 2:
                    if(comprarAuto(3000, cantidadDinero)){//Si devuelve true sigue, sino va al else
                        auto = "Chevrolet Voyage";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        console.log(`\nAhora el ${auto} es tuyo`);
                        activado=false;
                        let colorElegido = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                        let color = colorAutomovil(colorElegido, auto);
                        console.log(`\nFelicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} color ${color}🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`\nOh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                        }
                case 3:
                    if(comprarAuto(5000, cantidadDinero)){
                        auto = "Honda Civic";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        console.log(`\nAhora el ${auto} es tuyo`);
                        activado=false;
                        let colorElegido = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                        let color = colorAutomovil(colorElegido, auto);
                        console.log(`\nFelicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} color ${color}🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`\nOh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                        }
                case 4:
                    if(comprarAuto(7000, cantidadDinero)){
                        auto = "Ford Mustang";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        console.log(`\nAhora el ${auto} es tuyo`);
                        activado=false;
                        let colorElegido = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                        let color = colorAutomovil(colorElegido, auto);
                        console.log(`\nFelicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} color ${color}🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`\nOh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                    }
                case 5:
                    if(comprarAuto(10000, cantidadDinero)){
                        auto = "Lamborghini Huracan";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        console.log(`\nAhora el ${auto} es tuyo`);
                        activado=false;
                        let colorElegido = parseInt(prompt("Ahora escoge de que color te gustaría que fuera tu auto:\n1.Rojo🔴 \n2.Azul🔵 \n3.Negro⚫ \n4.Blanco⚪"));
                        let color = colorAutomovil(colorElegido, auto);
                        console.log(`\nFelicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} color ${color}🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`\nOh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                    }
                default:
                    alert(`${nombreCliente}, no elegiste una opción valida!! 🤨🤔🤔`)
                    marcaElegida = parseInt(prompt("Por favor indique la marca de auto que desea:\n1.🚙Fiat Uno $1000 \n2.🚙Chevrolet Voyage $3000 \n3.🚙Honda Civic $5000 \n4.🚙Ford Mustang $7000 \n5.🚙Lamborghini Huracan $10000"));//
                    break;
            }
        }
    }else{
        console.log(`\nLo siento ${nombreCliente}, dinero insuficiente para realizar la compra minima, Hasta Pronto!!`);
    }
}else{
    console.log(`\nLo siento ${nombreCliente}, no cumples con el mínimo de edad, Hasta Pronto!!`);
}