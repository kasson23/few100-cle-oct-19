describe('Variables in TypeScript', () => {
    it('any typing', () => {
        let x;
        x = 'dog';
        x = 3.14;

        x = function (a, b) {
            return a + b;
        };

    });

    it('implicit typing', () => {
        let x = 'dog';
        x = 3.14;
    });

    it('has union types', () => {

        let x: number | string;
        x = 12;
        x = 'tacos';
    });

    it('const cannot be reassigned', () => {
        const PI = 3.1415;
        // PI =4;
        const movie = {
            title: 'Rise of skywalker',
            yearReleased: 2019
        };
        movie.yearReleased = 2018;
    });
    it('var is eveil and should not use it', () => {
        const age = 22;

        if (age > 21) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'old enough';
        }
        expect(message).toBe('old enough');
    });
});
