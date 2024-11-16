import N_Helpers from '@t/helpers';

class StringHelper implements N_Helpers.I_StringHelpers {
    public isEmptyString(value: string): boolean {
        return value.length === 0;
    }

    public isOnlyWhiteSpaceString(value: string): boolean {
        return value.trim().length === 0;
    }
}

export default new StringHelper();
