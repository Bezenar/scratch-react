import N_Helpers from '../types/helpers';

class TypeCheck implements N_Helpers.I_TypeCheck {
    public isBoolean(value: unknown): boolean {
        return typeof value === 'boolean';
    };

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
        return typeof value === 'object' && !Array.isArray(value);
    }
}

export default new TypeCheck();