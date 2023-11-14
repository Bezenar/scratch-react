import { useEffect, useRef } from 'react';

export default function useDetectFirstRender(): boolean {
    const firstRender = useRef<boolean>(true);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    return firstRender.current;
}
