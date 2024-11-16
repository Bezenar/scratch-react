import N_Utility from '@t/utility';

class ObjectHelpers implements N_Utility.I_ObjectHelpers {
    public isEmptyObject(value: Record<string | number | symbol, unknown>): boolean {
        return Object.keys(value).length === 0;
    }
}

export default new ObjectHelpers();
