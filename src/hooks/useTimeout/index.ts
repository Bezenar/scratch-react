import { useEffect, useRef } from 'react';

export default function useTimeout<V = unknown, F extends Function = any>(
    value: V,
    delayFunction: F,
    delayTime: number
) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timer.current) {
            window.clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            delayFunction(value);
        }, delayTime);
    }, [value]);
}
