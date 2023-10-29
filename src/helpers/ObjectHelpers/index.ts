import N_Helpers from "../../types/helpers";

class ObjectHelpers implements N_Helpers.I_ObjectHelpers {
    public isEmptyObject(value: Record<string | number | symbol, unknown>): boolean {
        return Object.keys(value).length === 0;
    }
}

export default new ObjectHelpers();
