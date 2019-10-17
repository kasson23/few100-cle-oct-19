import { Employee } from './hr/employee';

describe('classes', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    it('using a class', () => {
        const bob = new Employee('bob', 'smith', 82_000);

        expect(bob.currentSalary).toBe(82_000);

        bob.giveRaise(100_000);
        expect(bob.currentSalary).toBe(182_000);
    });

    it('immutably remove and elemet', () => {

        const newNums = numbers.filter(n => n !== 3);
    });

    it('changign a property of an object imuutable', () => {
        const movie = { title: ' movie title', yearReleased: 5451 };
        const newMovies = {
            ...movie, yearReleased: 4561
        };

    });
    it('array desctucturing', () => {
        it('array destructuring', () => {

            // const first = numbers[0];
            // const third = numbers[2];

            const [first, , third] = numbers;
            expect(first).toBe(1);
            expect(third).toBe(3);

        });
        it('should behave...', () => {

        });
    });
});


