import { renderHook, act } from '@testing-library/react';
import useToggle from '.';

describe('useToggle', () => {
    it('By default state is falsy', () => {
        const { result: { current: [state]} } = renderHook(() => useToggle());

        expect(state).toBeFalsy();
    });

    it('If pass initial state to hook, should apply it to state', () => {
        const { result: { current: [state]} } = renderHook(() => useToggle(true));

        expect(state).toBeTruthy();
    });

    it('Toggle function without argument, change state to opposite one', async () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current[0]).toBeFalsy();

        await act(() => {
            result.current[1]();
        })

        expect(result.current[0]).toBeTruthy();
    });

    it('Toggle function with argument, change state to argument value', async () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current[0]).toBeFalsy();

        await act(() => {
            result.current[1](false);
        })

        expect(result.current[0]).toBeFalsy();
    });
});