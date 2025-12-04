
export interface Product {
    description: string;
    price: number;    
};

const phone: Product = {
    description: 'Nokia A1',
    price: 150
};

const tablet: Product = {
    description: 'iPad Air',
    price: 350
};

const shopingCart = [phone, tablet];
const tax = 0.15;


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
};


export function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];    
};

const results = taxCalculation({ products: shopingCart, tax });

console.log('Total:', results[0]);
console.log('Tax:', results[1]);

// destructuring de argumentos en una función
function taxCalculation2({tax, products}: TaxCalculationOptions): number[] {
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];    
}

const [total, tax2] = taxCalculation2({ products: shopingCart, tax });
console.log('Total 2:', total);
console.log('Tax 2:', tax2);

//export type { Product };