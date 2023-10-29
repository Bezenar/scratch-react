import TypeCheck from '../TypeCheck';
type Args = string | Record<string, boolean>;

export default function cn(...args: Array<Args>): string {
    let className: Array<string> = [];

    args.forEach((arg) => {
        if (TypeCheck.isString(arg) && !!arg) {
            className.push(arg as string);
        } else if (TypeCheck.isObject(arg)) {
            Object.entries(arg).forEach(([key, value]) => {
                if (value && !!arg) {
                    className.push(key);
                }
            });
        }
    });

    return className.join(' ');
}
