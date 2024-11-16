import parseObjectToParamsString from '.';

describe('parseObjectToParamsString', () => {
    it('Should return empty string, if pass empty object as argument', () => {
        expect(parseObjectToParamsString({})).toBe('');
    });

    it('Should not render params for "undefined" and "null" values', () => {
        const params = {
            id: 1,
            name: undefined,
            surname: null,
        }

        expect(parseObjectToParamsString(params)).toBe('?id=1');
    });

    it('Should apply "?" once and at start of string', () => {
        const params = {
            id: 1,
            name: 'John',
            surname: 'Doe',
        }

        expect(parseObjectToParamsString(params)).toMatch(new RegExp(/^\?[\w\&\=]{1,}$/));
    });

    it('Should apply "&" only on params which index are > 0 and less than last', () => {
        const params = {
            id: 1,
            name: 'John',
            surname: 'Doe',
        }

        expect(parseObjectToParamsString(params)).toMatch(new RegExp(/^\?[\w\=]{1,}&[\w\=]{1,}&[\w\=]{1,}$/));
    });

    it('Should combine all object keys, values to params string', () => {
        const params = {
            id: 1,
            name: 'John',
            surname: 'Doe',
        }

        expect(parseObjectToParamsString(params)).toBe('?id=1&name=John&surname=Doe');
    });
});
