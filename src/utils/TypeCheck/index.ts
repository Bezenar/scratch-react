import N_Helpers from '@t/helpers';

class TypeCheck implements N_Helpers.I_TypeCheck {
    public isBoolean(value: unknown): boolean {
        return typeof value === 'boolean';
    }

    public isString(value: unknown): boolean {
        return typeof value === 'string';
    }

    public isNumber(value: unknown): boolean {
        return typeof value === 'number';
    }

    public isArray(value: unknown): boolean {
        return Array.isArray(value);
    }

    public isObject(value: unknown): boolean {
        return typeof value === 'object' && !Array.isArray(value) && value !== null;
    }

    public isUndefined(value: unknown): boolean {
        return typeof value === 'undefined';
    }

    public isNull(value: unknown): boolean {
        return value === null;
    }
}

export default new TypeCheck();
