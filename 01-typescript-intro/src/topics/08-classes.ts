export class Person {
    public name: string;
    public address: string;

    
    constructor() {
        this.name = 'No name';
        this.address = 'No address';        
    }   
}

const ironman = new Person();
ironman.name = 'Tony Stark';
ironman.address = 'Malibu, California, USA';
console.log(ironman);

// constructor

export class Person2 {
    public name: string;
    public address: string;
    constructor(name: string, address: string ) {
        this.name = name;
        this.address = address;
    }   
}

const spiderman = new Person2('Peter Parker', 'New York, USA');
console.log(spiderman);

export class Person3 {
    constructor(
        public name: string = 'No name',
        public address: string = 'No address'
    ) {

    }
}

const captainAmerica = new Person3('Steve Rogers', 'Manhattan, New York, USA');
console.log(captainAmerica);

// Hirarchy of classes

export class Hero extends Person3 {
    constructor(public alterEgo: string, public age: number, public realName: string) {
        super(realName, 'New York, USA');
    }

}

// Composition of class
export class Hero2 {
    public person: Person3;

    constructor(public alterEgo: string, public age: number, public realName: string) {
        this.person = new Person3(realName, 'New York, USA');
    }

}

export class Hero3 {
    

    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person3) {
        
    }

}

