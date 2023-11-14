import { act, renderHook } from '@testing-library/react';
import usePagination from '.';

describe('usePagination', () => {
    it('By default apply active page 1', () => {
        const { result } = renderHook(() => usePagination());

        expect(result.current.active).toBe(1);
    });

    it('By default apply total pages 0', () => {
        const { result } = renderHook(() => usePagination());

        expect(result.current.totalPages).toBe(0);
    });

    it('Hook argument, will rewrite default state (partial rewrite)', () => {
        const { result } = renderHook(() => usePagination({ totalPages: 4 }));

        expect(result.current.totalPages).toBe(4);
    });

    it('Hook argument, will rewrite default state (full rewrite)', () => {
        const { result } = renderHook(() => usePagination({ active: 2, totalPages: 4 }));

        expect(result.current.active).toBe(2);
        expect(result.current.totalPages).toBe(4);
    });

    it('handleChange update state.active', async () => {
        const { result } = renderHook(() => usePagination({ totalPages: 10 }));

        await act(() => {
            result.current.handleChangePage(3);
        });

        expect(result.current.active).toBe(3);
    });

    it('If has been changed hook argument field "active", state not update', () => {
        const { result, rerender } = renderHook((props: Parameters<typeof usePagination>[0]) => usePagination(props), {
            initialProps: {},
        });

        rerender({ active: 10 });

        expect(result.current).toEqual(expect.objectContaining({ active: 1, totalPages: 0 }));
    });

    it('If has been changed hook argument field "totalPages", state will update', () => {
        const { result, rerender } = renderHook((props: Parameters<typeof usePagination>[0]) => usePagination(props), {
            initialProps: {},
        });

        rerender({ totalPages: 13 });

        expect(result.current.totalPages).toBe(13);
    });
});
