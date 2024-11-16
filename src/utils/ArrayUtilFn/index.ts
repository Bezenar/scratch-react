import N_Utility from '@t/utility';

class ArrayUtilFn implements N_Utility.I_ArrayUtilFn {
    public isEmptyArray(value: Array<unknown>): boolean {
        return value.length === 0;
    }
}

export default new ArrayUtilFn();
