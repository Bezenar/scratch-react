import ArrayUtilFn from '.';

describe('ArrayUtilFn class', () => {
    describe('method "isEmptyArray"', () => {
        it('Arg "[]", to be truthy', () => {
            expect(ArrayUtilFn.isEmptyArray([])).toBeTruthy();
        });

        it('Arg "[1]", to be falsy', () => {
            expect(ArrayUtilFn.isEmptyArray([1])).toBeFalsy();
        });
    });
});
