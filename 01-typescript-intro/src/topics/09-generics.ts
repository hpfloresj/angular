

export function whatsMyType<T>(argument: T): T {
    return argument;
}

const type1:string = whatsMyType("Hola Mundo");
console.log(type1.split(' '));