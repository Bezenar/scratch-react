import ObjectHelpers from '@utils/ObjectHelpers';
import StringHelpers from '@utils/StringHelpers';
import TypeCheck from '@utils/TypeCheck';

export default function parseParamsObjectToString(params: Record<any, any>): string {
    if (ObjectHelpers.isEmptyObject(params)) {
        return '';
    }

    return Object.entries(params).reduce((string, [key, value]) => {
        if (TypeCheck.isUndefined(value) || TypeCheck.isNull(value)) {
            return string;
        }

        if (
            TypeCheck.isString(value) &&
            (StringHelpers.isEmptyString(value) || StringHelpers.isOnlyWhiteSpaceString(value))
        ) {
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
