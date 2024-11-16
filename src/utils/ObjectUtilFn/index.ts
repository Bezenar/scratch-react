import N_Utility from '@t/utility';

class ObjectUtilFn implements N_Utility.I_ObjectUtilFn {
    public isEmptyObject(value: Record<string | number | symbol, unknown>): boolean {
        return Object.keys(value).length === 0;
    }
}

export default new ObjectUtilFn();
