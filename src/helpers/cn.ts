type Args = string | Record<string, boolean>;

export default function cn(...args: Array<Args>): string {
    let className: Array<string> = [];

    args.forEach((arg) => {
        if(typeof arg === 'string' && !!arg) {
            className.push(arg);
        } else if( typeof arg === 'object' && !Array.isArray(arg)) {
            Object.entries(arg).forEach(([key, value]) => {
                if(value && !!arg) {
                    className.push(key);
                }
            });

        }
    });

    return className.join(' ');
}
