import StringUtilFn from '.';

describe('StringUtilFn', () => {
    describe('isEmptyString method', () => {
        it('Should return true when get empty string', () => {
            expect(StringUtilFn.isEmptyString('')).toBeTruthy();
        });

        it('Should return false when get filled string', () => {
            expect(StringUtilFn.isEmptyString('lorem ipsum')).toBeFalsy();
        });
    });

    describe('isOnlyWhiteSpaceString', () => {
        it('Should return true if string contain only whitespace', () => {
            expect(StringUtilFn.isOnlyWhiteSpaceString('')).toBeTruthy();
        });

        it('Should return true if string contain only several whitespace', () => {
            expect(StringUtilFn.isOnlyWhiteSpaceString('    ')).toBeTruthy();
        });

        it('Should return false if string contain words', () => {
            expect(StringUtilFn.isOnlyWhiteSpaceString('lorem')).toBeFalsy();
        });

        it('Should return false if string contain words with whitespace', () => {
            expect(StringUtilFn.isOnlyWhiteSpaceString('lorem ipsum')).toBeFalsy();
        });
    });
});
