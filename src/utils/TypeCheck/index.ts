import N_Utility from '@t/utility';

class TypeCheck implements N_Utility.I_TypeCheck {
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
