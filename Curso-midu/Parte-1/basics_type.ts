//tipos basicos typescript
const number: number = 2;
const string: string = "First string";
const boolean: boolean = false;
// any ignora el tipado de typescript
const anyValue: any = "hola";
//unknown
const unknown: unknown = "hola";

//Inferencia
// como a y b infiere que son number sin decirle nada
const a = 1;
const b = 2;
//c tambien sera number
const c = a + b;

let n = "hola";
// descomenta la siguiente linea para ver la inferencia
// n = 2
n.toLocaleLowerCase();

//Function
function saludar(name: string) {
  console.log(`Hola ${name}`);
}
saludar("Javier");
//saludar(2)

// funcion pasandole objeto como parametros
// Primera forma
function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
}
// Segunda forma
function saludar3(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`Hola ${name}, tienes ${age} años`);
}

// Tipar lo que retorna la funcion
function saludar4({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age;
}

// Tipar pasandole una funcion como parametro
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("miguel");
};
const sayHi = (name: string) => {
  console.log(`Hola ${name}}`);
};
sayHiFromFunction(sayHi);

// Tipar arrow functions
// Forma 1
const sumar = (a: number, b: number): number => {
  return a + b;
};
// Forma 2
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// never !== void
//never nunca retorna nada
function throwError(message: string): never {
  throw new Error("");
}
