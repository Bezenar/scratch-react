import StringHelpers from '.';


describe('StringHelpers', () => {
    describe('isEmptyString method', () => {
        it('Should return true when get empty string', () => {
            expect(StringHelpers.isEmptyString('')).toBeTruthy();
        });

        it('Should return false when get filled string', () => {
            expect(StringHelpers.isEmptyString('lorem ipsum')).toBeFalsy();
        });
    });

    describe('isOnlyWhiteSpaceString', () => {
        it('Should return true if string contain only whitespace', () => {
            expect(StringHelpers.isOnlyWhiteSpaceString('')).toBeTruthy();
        });

        it('Should return true if string contain only several whitespace', () => {
            expect(StringHelpers.isOnlyWhiteSpaceString('    ')).toBeTruthy();
        });

        it('Should return false if string contain words', () => {
            expect(StringHelpers.isOnlyWhiteSpaceString('lorem')).toBeFalsy();
        });

        it('Should return false if string contain words with whitespace', () => {
            expect(StringHelpers.isOnlyWhiteSpaceString('lorem ipsum')).toBeFalsy();
        });
    });
});