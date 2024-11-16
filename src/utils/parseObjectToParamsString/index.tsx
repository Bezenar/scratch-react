import ObjectUtilFn from '@utils/ObjectUtilFn';
import StringUtilFn from '@utils/StringUtilFn';
import TypeCheck from '@utils/TypeCheck';

export default function parseParamsObjectToString(params: Record<any, any>): string {
    if (ObjectUtilFn.isEmptyObject(params)) {
        return '';
    }

    return Object.entries(params).reduce((string, [key, value]) => {
        if (TypeCheck.isUndefined(value) || TypeCheck.isNull(value)) {
            return string;
        }

        if (
            TypeCheck.isString(value) &&
            (StringUtilFn.isEmptyString(value) || StringUtilFn.isOnlyWhiteSpaceString(value))
        ) {
            return string;
        }

        if (StringUtilFn.isEmptyString(string)) {
            string += '?';
        } else {
            string += '&';
        }

        return (string += `${key}=${value}`);
    }, '');
}
