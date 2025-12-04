

function addNumbers(a: number, b: number): number {
    return a + b;
}

const sum: string = addNumbers(10, 15).toString(); 
console.log('Sum:', sum);

// Lambda function
const addNumbersLambda = (a: number, b: number): number => {
    return  a + b;
}   


function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const sumLambda: number = addNumbersLambda(20, 25); 
console.log('Sum Lambda:', sumLambda);

console.log({sum, sumLambda});

const multiplyResult = multiplyNumbers(5);
console.log(multiplyResult);


// Part 2

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
};


const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
};


const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
};   

healCharacter(strider, 10);
healCharacter(strider, 20);

strider.showHp();

export {};