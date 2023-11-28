// Simulador interactivo para comprar un auto

let nombreCliente = prompt("Ingrese su nombre").toUpperCase();//Pedimos nombre al Cliente

while(nombreCliente == ""){ //Si el string esta vacío, repite hasta que sea valido, es decir, su length sea mayor a 0
    nombreCliente = prompt("No valido!! 🤨🤔🤔, por favor ingrese su nombre").toUpperCase();
}

console.log(`Hola, Bienvenido ${nombreCliente} a la concesionaria: LegendaryMotors`);

let edad = parseInt(prompt("Ingrese su edad (Mayor de 18 años para ingresar)"))

const comprarAuto = (precioAuto, cantidadDinero) => {//Función Flecha que chequea que el dinero de el cliente sea mayor o igual al precio del auto en cuestión
    if(precioAuto<=cantidadDinero){
        return true;
    }else{
        return false;
    }
}

if(edad>=18){
    console.log(`Tienes ${edad}, por lo tanto eres mayor de edad, puedes seguir con la compra`);
    let cantidadDinero = parseInt(prompt("Continuemos Ingresando la cantidad de dinero que espera gastar en un auto (Cantidad Minima: $10000)")) // Pedimos dinero al Cliente
    if(cantidadDinero>=10000){//Si es mayor sigue corriendo el código, sino sale un clg y termina el simulador
        console.log(`Excelente ${nombreCliente}, dispones de $${cantidadDinero}`)
        let marcaElegida = parseInt(prompt("Por favor indique la marca de auto que desea:\n1.🚙Fiat Cronos $10000 \n2.🚙Chevrolet Voyage $30000 \n3.🚙Honda Civic $50000 \n4.🚙Ford Mustang $70000 \n5.🚙Lamborghini Huracan $100000"));//Menu de opciones
        let auto; // Variable no definida, para darle el auto que escogió el usuario
        let activado = true;
        while(activado){//Mientras sea true, que siga preguntando que auto quiere el usuario
            switch(marcaElegida){
                case 1:
                    if(comprarAuto(10000, cantidadDinero)){
                        auto = "Fiat Uno";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        activado=false;
                        console.log(`Felicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} 🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`Oh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar el auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                        }
                case 2:
                    if(comprarAuto(30000, cantidadDinero)){
                        auto = "Chevrolet Voyage";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        activado=false;
                        console.log(`Felicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} 🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`Oh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                        }
                case 3:
                    if(comprarAuto(50000, cantidadDinero)){
                        auto = "Honda Civic";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        activado=false;
                        console.log(`Felicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} 🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`Oh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                        }
                case 4:
                    if(comprarAuto(70000, cantidadDinero)){
                        auto = "Ford Mustang";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        activado=false;
                        console.log(`Felicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} 🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`Oh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                    }
                case 5:
                    if(comprarAuto(100000, cantidadDinero)){
                        auto = "Lamborghini Huracan";
                        alert(`Felicidades el ${auto} es tuyo!! 😎😎😎`)
                        activado=false;
                        console.log(`Felicidades ${nombreCliente} 🤑🤑, gracias por su compra del auto ${auto} 🚗, ya lo puede sacar a pasear, Vuelva pronto!!`);
                        break;
                    }else{
                        console.log(`Oh lo lamento ${nombreCliente}, no tienes el dinero suficiente para comprar un auto, pero no te preocupes, nosotros seguiremos aquí`);
                        activado=false;
                        break;
                    }
                default:
                    alert(`${nombreCliente}, no elegiste una opción valida!! 🤨🤔🤔`)
                    marcaElegida = parseInt(prompt("Por favor indique la marca de auto que desea:\n1.🚙Fiat Cronos $10000 \n2.🚙Chevrolet Voyage $30000 \n3.🚙Honda Civic $50000 \n4.🚙Ford Mustang $70000 \n5.🚙Lamborghini Huracan $100000"));//
                    break;
            }
        }
    }else{
        console.log(`Lo siento ${nombreCliente}, dinero insuficiente para realizar la compra minima`);
    }
}else{
    console.log(`Lo siento ${nombreCliente}, Eres menor de edad, y no puedes comprar un automóvil aquí`);
}