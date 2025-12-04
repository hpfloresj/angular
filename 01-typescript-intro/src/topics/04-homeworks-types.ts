/**
 * Código typescript
 */

interface Address {
    calle: string;
    pais: string;
    ciudad: string;
};

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAdress: () => string;
};


const superHero: SuperHero = {
    name: 'Mi mashe',
    age: 10,
    address: {
        calle: 'Jr. machupichu 256',
        pais: 'Perú',
        ciudad: 'Lima'
    },
    showAdress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const address = superHero.showAdress();
console.log(address);