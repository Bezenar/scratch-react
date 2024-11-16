import ArrayHelpers from '.';

describe('ArrayHelpers class', () => {
    describe('method "isEmptyArray"', () => {
        it('Arg "[]", to be truthy', () => {
            expect(ArrayHelpers.isEmptyArray([])).toBeTruthy();
        });

        it('Arg "[1]", to be falsy', () => {
            expect(ArrayHelpers.isEmptyArray([1])).toBeFalsy();
        });
    });
});
