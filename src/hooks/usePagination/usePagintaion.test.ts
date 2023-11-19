import { renderHook, act } from '@testing-library/react';
import usePagination from '.';

describe('usePagination', () => {
    it('Return pagination default state', () => {
        const { result } = renderHook(() => usePagination());

        expect(result.current[0]).toEqual({ active: 1, total: 0 });
    });

    it('Method "changeActive" update "pagination.active" value', async () => {
        const { result } = renderHook(() => usePagination());

        await act(() => {
            result.current[1].changeActive(5);
        });

        expect(result.current[0].active).toBe(5);
    });

    it('Method "setTotal" update "pagination.total" value', async () => {
        const { result } = renderHook(() => usePagination());

        await act(() => {
            result.current[1].setTotal(5);
        });

        expect(result.current[0].total).toBe(5);
    });
    it('Method "resetPagination" update "pagination" state to initial', async () => {
        const { result } = renderHook(() => usePagination());

        await act(() => {
            result.current[1].setTotal(5);
            result.current[1].changeActive(5);
            result.current[1].resetPagination();
        });

        expect(result.current[0]).toEqual({ active: 1, total: 0 });
    });
});
