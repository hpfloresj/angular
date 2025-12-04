
let skills: string[] = ['bash', 'counter', 'Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // ? makes this property optional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: skills
};

strider.hometown = 'Rivendell';
    
console.table(strider);

export {};