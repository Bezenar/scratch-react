import N_Utility from '@t/utility';

class StringHelper implements N_Utility.I_StringHelpers {
    public isEmptyString(value: string): boolean {
        return value.length === 0;
    }

    public isOnlyWhiteSpaceString(value: string): boolean {
        return value.trim().length === 0;
    }
}

export default new StringHelper();
