// Enums
// Se utilizan para una coleccion de datos finitos

//Esta forma de utilizar enums la  usamos cuando queremos que nuestra aplicacion la usan desde fuera
enum WeekDays {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
}
//Esta forma es la mas cotidiana de usar enums
const enum WeekendDay {
  Sabado,
  Domingo,
}

const weekDays = (day: WeekDays): void => {
  if (day === WeekDays.Lunes) {
    console.log("Es ", WeekDays.Lunes);
  } else if (day === WeekDays.Martes) {
    console.log("Es ", WeekDays.Martes);
  } else if (day === WeekDays.Miercoles) {
    console.log("Es ", WeekDays.Miercoles);
  } else if (day === WeekDays.Jueves) {
    console.log("Es ", WeekDays.Jueves);
  } else if (day === WeekDays.Viernes) {
    console.log("Es ", WeekDays.Viernes);
  }
};

// Aserciones de tipos
//En Typescript, la aserción de tipo es una técnica que informa al compilador sobre el tipo de una variable
//Interface
interface Hero {
  id: number;
  name: string;
  age: number;
  saludar: () => void;
}

//Interfaces anidadas
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CarritoDeCompra {
  precioTotal: number;
  productos: (Producto | Zapatillas)[];
}

//las interfaces se pueden extender
interface Zapatillas extends Producto {
  talla: number;
}

// Narrowing
function mostrarLongitud(obj: number | string) {
  if (typeof obj === "string") {
    return obj.length;
  }
  return obj.toString().length;
}
mostrarLongitud("2");
// Ejemplo 2
interface Mario {
  compañia: "Nintendo";
  nombre: string;
  saltar: () => void;
}
interface Sonic {
  compañia: "Sega";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

//type Guard
//Hay que evitarlos
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//   return (personaje as Sonic).correr !== undefined;
// }

// function jugar(personaje: Personaje) {
//   if (checkIsSonic(personaje)) {
//     personaje.correr();
//     return;
//   } else {
//     personaje.saltar();
//     return;
//   }
// }

function jugar(personaje: Personaje) {
  if (personaje.compañia === "Nintendo") {
    personaje.saltar();
    return;
  }
  personaje.correr();
}

// Instances of / Clases
interface Avenger {
  name: string;
  powerScore: number;
  wonBattles: number;
}
class Avenger implements Avenger {
  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }
  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }
  set power(newpower: number) {
    if (newpower <= 100) {
      this.powerScore = newpower;
    } else {
      throw new Error("Power score cannot be more than 100");
    }
  }
}
