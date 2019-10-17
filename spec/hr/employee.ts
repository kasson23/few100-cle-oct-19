export class Employee {
    // firstName: string;
    // lastName: string;
    // salary: number;

    // constructor(firstName: string, lastName: string, salary: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.salary = salary;
    // }

    // This is all of the above code ^^ since you added scope
    constructor(public firstName: string, public lastName: string, private salary: number) { }

    giveRaise(amount: number) {
        this.salary += amount;
    }
    get currentSalary() {
        return this.salary;
    }
}
