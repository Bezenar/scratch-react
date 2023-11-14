import { renderHook } from '@testing-library/react';
import useDetectFirstRender from '.';

describe('useDetectFirstRender', () => {
    it('Should return true at first render', () => {
        const { result } = renderHook(() => useDetectFirstRender());

        expect(result.current).toBeTruthy();
    });

    it('After first rerender should return false', () => {
        const { result, rerender } = renderHook(() => useDetectFirstRender());

        rerender();

        expect(result.current).toBeFalsy();
    });

    it('After all next rerenders still return false', () => {
        const { result, rerender } = renderHook(() => useDetectFirstRender());

        rerender();
        rerender();
        rerender();

        expect(result.current).toBeFalsy();
    });
});
