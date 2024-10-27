let palabra = "loro";
let traducir = " ";


switch (palabra) {
    case "perro":
        traducir = "Dog";
        break;
    case "gato":
        traducir = "Cat";
        break;
    case "puerta":
        traducir = "Door";
        break;
    case "ventana":
        traducir = "Window";
        break;
    case "mesa":
        traducir = "Table";
        break;

    default: 
    traducir = "La palabra ingresada es incorrecta";
    
        break;
}
console.log(traducir);
