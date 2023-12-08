import { act, renderHook } from '@testing-library/react';
import useFilters from '.';

describe('useFilters', () => {
    it('Should return initial data and dispatch', () => {
        const { result } = renderHook(() => useFilters({name: '', age: 0}));

        expect(result.current[0]).toEqual({name: '', age: 0});
        expect(result.current[1].name).toBe('bound dispatchReducerAction');
    });

    it('Call dispatch with single property, change single data properties', async () => {
        const { result } = renderHook(() => useFilters({name: '', age: 0}));

        await act(() => {
            result.current[1]({name: 'John'});
        });

        expect(result.current[0]).toEqual({name: 'John', age: 0});
    });

    it('Call dispatch with several property, change several data properties', async () => {
        const { result } = renderHook(() => useFilters({name: '', age: 0}));

        await act(() => {
            result.current[1]({name: 'John', age: 1});
        });

        expect(result.current[0]).toEqual({name: 'John', age: 1});
    });
});
