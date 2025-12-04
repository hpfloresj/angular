
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = { name: 'Juan Perez' };

const passenger2: Passenger = {
    name: 'Ana Gomez',
    children: ['Natalia', 'Gabriell']
};

const printChildren = (passenger: Passenger): void => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);