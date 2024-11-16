import N_Utility from '@t/utility';

class ArrayHelpers implements N_Utility.I_ArrayHelpers {
    public isEmptyArray(value: Array<unknown>): boolean {
        return value.length === 0;
    }
}

export default new ArrayHelpers();
