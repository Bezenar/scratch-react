import ObjectHelpers from '@helpers/ObjectHelpers';
import StringHelpers from '@helpers/StringHelpers';

export default function parseParamsObjectToString(params: Record<any, any>): string {
    if (ObjectHelpers.isEmptyObject(params)) {
        return '';
    }

    return Object.entries(params).reduce((string, [key, value]) => {
        if (StringHelpers.isEmptyString(string)) {
            string += '?';
        } else {
            string += '&';
        }

        return (string += `${key}=${value}`);
    }, '');
}
