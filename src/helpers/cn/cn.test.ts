import cn from '.';

describe('helper function - cn', () => {
    it('Should combine several string arguments to one string', () => {
        expect(cn('class-1', 'class-2')).toBe('class-1 class-2');
    });

    it('Should combine string with truthy ternary operator', () => {
        const statement = true;
        expect(cn('class', statement ? 'true' : 'false')).toBe('class true');
    });

    it('Should combine string with falsy ternary operator', () => {
        const statement = false;
        expect(cn('class', statement ? 'true' : 'false')).toBe('class false');
    });

    it('Should combine string and object key, if key value is truthy', () => {
        expect(cn('class', { class2: true })).toBe('class class2');
    });

    it("Shouldn't combine string and object key, if key value is falsy", () => {
        expect(cn('class', { class2: !!'' })).toBe('class');
    });
});
