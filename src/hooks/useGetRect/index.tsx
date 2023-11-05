import { useEffect, useState } from 'react';

export default function useGetRect<E extends HTMLElement = any>(ref: React.MutableRefObject<E | null>): DOMRect | null {
    const [rect, setRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setRect(rect);
        }
    }, [ref.current]);

    return rect;
}
