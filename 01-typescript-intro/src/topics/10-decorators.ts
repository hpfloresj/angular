

function myDecorator<T extends { new (...args:any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@myDecorator
export class SuperClass {
    public myProperty: string = 'Hello World';

    print() {
        console.log("Hola mundo")
        
    }
}