import N_Helpers from '@t/helpers';

class ArrayHelpers implements N_Helpers.I_ArrayHelpers {
    public isEmptyArray(value: Array<unknown>): boolean {
        return value.length === 0;
    }
}

export default new ArrayHelpers();
