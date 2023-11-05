import { useEffect, useRef } from 'react';

export default function useClickOutside<E extends HTMLElement = any>(
    callback: () => void
): React.MutableRefObject<E | null> {
    const ref = useRef<E | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [callback]);

    return ref;
}
