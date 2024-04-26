// Inferencia en funciones anonimas segun el contexto
const avengers = ["spiderman", "hulk", "thor"];
avengers.forEach((avenger) => {
  console.log(avenger.toLocaleLowerCase());
});

//Objetos

//type alias
// type Hero = {
//   name: string;
//   age: number;
// };

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age };
// }

// const hulk = createHero({ name: "Hulk", age: 2000 });

// Optional properties
//Template union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type Hero = {
//   // Es opcional y solo de lectura. lo convierte en un tipo inmutable
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   //Esta prop. es opcional gracias al ?
//   isActive?: boolean;
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const hulk = createHero({ name: "Hulk", age: 2000 });

//Union types
let ann: string | number;
ann = 21;
ann = "hola";

let ann2: string | 2;

ann = "Hello";
ann = 2;

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// // union type
// type HeroPowerScale = "local" | "planetary" | "universal";

// type Hero = {
//   // Es opcional y solo de lectura. lo convierte en un tipo inmutable
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   //Esta prop. es opcional gracias al ?
//   isActive?: boolean;
//   powerScale?: HeroPowerScale;
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,

//   };
// }
// const hulk = createHero({ name: "Hulk", age: 2000 });

// Intersection types

//Template type
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// union type
type HeroPowerScale = "local" | "planetary" | "universal";

type HeroBasicInfo = {
  name: string;
  age: number;
};
type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};
// Intersection type
type Hero = HeroBasicInfo & HeroProperties;

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}
const hulk = createHero({ name: "Hulk", age: 2000 });


//Type indexing
type EarthProperties = {
    isActive:boolean,
    address: {
        planet: string,
        city: string
    }
}
const address: EarthProperties["address"] = {
    planet: "Earth",
    city: "Madrid"
}
