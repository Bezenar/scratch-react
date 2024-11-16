import ObjectUtilFn from '.';

describe('Object helpers', () => {
    describe('isEmptyObject method', () => {
        it("Should return true, if object doesn't have any key", () => {
            expect(ObjectUtilFn.isEmptyObject({})).toBeTruthy();
        });

        it('Should return false, if object have any key', () => {
            expect(ObjectUtilFn.isEmptyObject({ key: 'value' })).toBeFalsy();
        });
    });
});
