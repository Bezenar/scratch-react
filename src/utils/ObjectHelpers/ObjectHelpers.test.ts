import ObjectHelpers from '.';

describe('Object helpers', () => {
    describe('isEmptyObject method', () => {
        it("Should return true, if object doesn't have any key", () => {
            expect(ObjectHelpers.isEmptyObject({})).toBeTruthy();
        });

        it('Should return false, if object have any key', () => {
            expect(ObjectHelpers.isEmptyObject({ key: 'value' })).toBeFalsy();
        });
    });
});
