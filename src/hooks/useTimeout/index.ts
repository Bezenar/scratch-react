import { useEffect, useRef } from 'react';

export default function useTimeout<V = unknown>(
    value: V,
    delayFunction: (val: V) => void,
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

        return () => {
            timer.current && window.clearTimeout(timer.current);
        }
    }, [value]);
}
