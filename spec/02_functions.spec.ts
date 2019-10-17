import { isEven, doubleIt, accumulate } from './utils';

describe('functions', () => {
    it('should behave...', () => {
        // TWO WAYS

        // 1. named function
        function add(a: number, b: number): number {
            return a + b;
        }

        expect(add(2, 2)).toBe(4);

        // 2. anonymous functions

        // way #1 - fucntion with the fucntion keyword
        // const subtract = function (a: number, b: number) {
        //     return a - b;
        // };

        // way #2 - arrow functions
        const multiply = (a: number, b: number) => a * b;
        expect(multiply(3, 3)).toBe(9);


        it('arrow fucntions', () => {
            // arrow fucntion here
        });
    });

    describe('parameters to fucntions', () => {
        it('an example -- overloading', () => {
            function nameFormatter(first: string, last: string, mi?: string) {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(nameFormatter('Han', 'Solo')).toBe('Solo, Han');
            expect(nameFormatter('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        it('default values for parameters', () => {
            function add(a: number = 10, b: number = 15) {
                return a + b;
            }

            expect(add()).toBe(25);
            expect(add(15)).toBe(30);
            expect(add(undefined, 5)).toBe(20);

        });
        it('rest argumenmts', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firsttwo = a + b;
                return rest.reduce((x, y) => x + y, firsttwo);
            }

            expect(add(1, 2)).toBe(3);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
    describe('higher-order fucntions', () => {
        it('anexmaple of a function that takes a function', () => {
            function identity(n: string) { return n; }

            type StringModifer = (msg: string) => string;
            function printItOut(message: string, fn: StringModifer = identity): void {
                console.log(`At ${new Date().toISOString()}:`, fn(message));
            }

            printItOut('Tacos!', (n) => n.toUpperCase());
            printItOut('Tacos2', (n) => '***' + n + '***');
            printItOut('Tortilla!');
            printItOut('HOF Rawk!', makeUpper);

            function makeUpper(x: string) {
                return x.toUpperCase();
            }
        });
    });
    describe('Higher higher order', () => {
        it('with a higher order function', () => {

            function tagMaker(element: string): (content: string) => string {
                return (content) => `<${element}>${content}</${element}>`;
            }

            const h1Maker = tagMaker('h1');

            expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');
            expect(h1Maker('Chips')).toBe('<h1>Chips</h1>');
            const pMaker = tagMaker('p');
            expect(pMaker('coolio')).toBe('<p>coolio</p>');

            expect(tagMaker('h2')('kidding me?')).toBe('<h2>kidding me?</h2>');
        });
    });

    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('visiting each element in an array', () => {
            numbers.forEach((e, i, c) => {
                console.log({ e, i, c });
            });
        });
        describe('methods that create a new array', () => {
            it('map', () => {
                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 19, 12, 14, 16, 18]);
            });
            it('filter', () => {
                const evens = numbers.filter(n => isEven(n));
                expect(evens).toEqual([2, 4, 6, 8]);
            });
        });

        describe('methods that return a single vlaue', () => {
            describe('checkign the membership', () => {
                it('seeting if all the members meet a criteria', () => {
                    const allEven = numbers.every(isEven);
                    expect(allEven).toBe(false);         // some are odd

                    const someEven = numbers.some(isEven);
                    expect(someEven).toBe(true);         // yes, SOME of the numbers are even
                });

                it('has reduce', () => {
                    const total = numbers.reduce((i, n) => i + n);
                    expect(total).toBe(45);

                    const total2 = numbers.reduce(accumulate, 100);
                    expect(total2).toBe(145);

                    const totalOfDoubledEvens = numbers.filter(isEven).map(doubleIt).reduce(accumulate);
                    expect(totalOfDoubledEvens).toBe(40);
                });

                it('practice', () => {
                    interface CartItem {
                        name: string;
                        qty: number;
                        price: number;
                    }

                    const cart: CartItem[] = [
                        { name: 'Eggs', qty: 1, price: 2.99 },
                        { name: 'Bread', qty: 3, price: 3.50 },
                        { name: 'Shampoo', qty: 2, price: 7.25 }
                    ];


                    const newCarts = cart.map(n => {
                        return {
                            name: n.name
                        };
                    });

                    interface ShippingInfo {
                        totalQty: number;
                        totalPrice: number;
                    }

                    const intialState: ShippingInfo = {
                        totalQty: 0,
                        totalPrice: 0
                    };

                    const answer = cart.reduce((state: ShippingInfo, data: CartItem): ShippingInfo => {
                        return {
                            totalQty: state.totalQty + data.qty,
                            totalPrice: state.totalPrice + (data.qty * data.price)
                        };
                    }, intialState);

                    // how would we use reduce to get the shipping info from
                    // this cart. (the total number of things, the total price.)
                });
            });
        });
    });
});
