import TypeCheck from '.';

describe('TypeCheck', () => {
    describe('isBoolean method', () => {
        it('Should return true if get "true"', () => {
            expect(TypeCheck.isBoolean(true)).toBeTruthy();
        });

        it('Should return true if get "false"', () => {
            expect(TypeCheck.isBoolean(false)).toBeTruthy();
        });

        it('Should return false if get "number"', () => {
            expect(TypeCheck.isBoolean(120)).toBeFalsy();
        });

        it('Should return false if get "string"', () => {
            expect(TypeCheck.isBoolean('lorem')).toBeFalsy();
        });

        it('Should return false if get "undefined"', () => {
            expect(TypeCheck.isBoolean(undefined)).toBeFalsy();
        });

        it('Should return false if get "Array"', () => {
            expect(TypeCheck.isBoolean([])).toBeFalsy();
        });

        it('Should return false if get "Object"', () => {
            expect(TypeCheck.isBoolean({})).toBeFalsy();
        });
    });

    describe('isString method', () => {
        it('Should return false if get "boolean"', () => {
            expect(TypeCheck.isString(true)).toBeFalsy();
        });

        it('Should return false if get "number"', () => {
            expect(TypeCheck.isString(120)).toBeFalsy();
        });

        it('Should return true if get "string"', () => {
            expect(TypeCheck.isString('lorem')).toBeTruthy();
        });

        it('Should return false if get "undefined"', () => {
            expect(TypeCheck.isString(undefined)).toBeFalsy();
        });

        it('Should return false if get "Array"', () => {
            expect(TypeCheck.isString([])).toBeFalsy();
        });

        it('Should return false if get "Object"', () => {
            expect(TypeCheck.isString({})).toBeFalsy();
        });
    });

    describe('isNumber method', () => {
        it('Should return false if get "boolean"', () => {
            expect(TypeCheck.isNumber(true)).toBeFalsy();
        });

        it('Should return true if get "number"', () => {
            expect(TypeCheck.isNumber(120)).toBeTruthy();
        });

        it('Should return false if get "string"', () => {
            expect(TypeCheck.isNumber('lorem')).toBeFalsy();
        });

        it('Should return false if get "undefined"', () => {
            expect(TypeCheck.isNumber(undefined)).toBeFalsy();
        });

        it('Should return false if get "Array"', () => {
            expect(TypeCheck.isNumber([])).toBeFalsy();
        });

        it('Should return false if get "Object"', () => {
            expect(TypeCheck.isNumber({})).toBeFalsy();
        });
    });

    describe('isArray method', () => {
        it('Should return false if get "boolean"', () => {
            expect(TypeCheck.isArray(true)).toBeFalsy();
        });

        it('Should return false if get "number"', () => {
            expect(TypeCheck.isArray(120)).toBeFalsy();
        });

        it('Should return false if get "string"', () => {
            expect(TypeCheck.isArray('lorem')).toBeFalsy();
        });

        it('Should return false if get "undefined"', () => {
            expect(TypeCheck.isArray(undefined)).toBeFalsy();
        });

        it('Should return true if get "Array"', () => {
            expect(TypeCheck.isArray([])).toBeTruthy();
        });

        it('Should return false if get "Object"', () => {
            expect(TypeCheck.isArray({})).toBeFalsy();
        });
    });

    describe('isObject method', () => {
        it('Should return false if get "boolean"', () => {
            expect(TypeCheck.isObject(true)).toBeFalsy();
        });

        it('Should return false if get "number"', () => {
            expect(TypeCheck.isObject(120)).toBeFalsy();
        });

        it('Should return false if get "string"', () => {
            expect(TypeCheck.isObject('lorem')).toBeFalsy();
        });

        it('Should return false if get "undefined"', () => {
            expect(TypeCheck.isObject(undefined)).toBeFalsy();
        });

        it('Should return false if get "Array"', () => {
            expect(TypeCheck.isObject([])).toBeFalsy();
        });

        it('Should return true if get "Object"', () => {
            expect(TypeCheck.isObject({})).toBeTruthy();
        });
    });
});
