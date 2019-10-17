import { Employee } from './hr/employee';

describe('classes', () => {
    it('using a class', () => {
        const bob = new Employee('bob', 'smith', 82_000);

        expect(bob.currentSalary).toBe(82_000);

        bob.giveRaise(100_000);
        expect(bob.currentSalary).toBe(182_000);
    });
});
