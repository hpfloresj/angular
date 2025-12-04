
let name: string = 'Strider';
name = '123';
const age = 30;
let hpPoints: number = 95;

let age2: number | string = 30;
age2 = '30';

let direccion: number | 'FULL';

direccion = 'FULL';
direccion = 123;

console.log({ name, age, hpPoints, age2, direccion });

export {};