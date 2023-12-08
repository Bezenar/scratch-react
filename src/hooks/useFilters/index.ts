import { Dispatch, useReducer } from 'react';

export default function useFilters<T extends Record<any, any> = Record<string | number | symbol, unknown>>(
    initialFilters: T
): [T, Dispatch<Partial<T>>] {
    const [filters, dispatch] = useReducer<(prev: T, next: Partial<T>) => T, T>(
        (prev, next) => ({ ...prev, ...next }),
        initialFilters,
        (state) => state
    );

    return [filters, dispatch];
}
