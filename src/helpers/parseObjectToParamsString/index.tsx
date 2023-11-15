import ObjectHelpers from '@helpers/ObjectHelpers';
import StringHelpers from '@helpers/StringHelpers';
import TypeCheck from '@helpers/TypeCheck';

export default function parseParamsObjectToString(params: Record<any, any>): string {
    if (ObjectHelpers.isEmptyObject(params)) {
        return '';
    }

    return Object.entries(params).reduce((string, [key, value]) => {
        if(TypeCheck.isUndefined(value) || TypeCheck.isNull(value)) {
            return string;
        }

        if (StringHelpers.isEmptyString(string)) {
            string += '?';
        } else {
            string += '&';
        }

        return (string += `${key}=${value}`);
    }, '');
}
