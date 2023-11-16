import { act, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import usePagination from '.';
import store from '@store/index';

describe('usePagination', () => {
    it('Should return initial object', () => {
        const { result } = renderHook(() => usePagination(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        });

        expect(result.current).toEqual({
            active: 1,
            totalPages: 0,
            handleChangePage: expect.any(Function),
            handleResetPagination: expect.any(Function),
            handleSetTotalPages: expect.any(Function),
        });
    });

    it('handleChangePage change active value', async () => {
        const { result } = renderHook(() => usePagination(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        });

        await act(() => {
            result.current.handleChangePage(4);
        });

        expect(result.current.active).toBe(4);
    });

    it('handleSetTotalPages change totalPages value', async () => {
        const { result } = renderHook(() => usePagination(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        });

        await act(() => {
            result.current.handleSetTotalPages(10);
        });

        expect(result.current.totalPages).toBe(10);
    });

    it('handleResetPagination change reset state initial', async () => {
        const { result } = renderHook(() => usePagination(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        });

        await act(() => {
            result.current.handleChangePage(3);
            result.current.handleSetTotalPages(10);
            result.current.handleResetPagination();
        });

        expect(result.current.active).toBe(1);
        expect(result.current.totalPages).toBe(0);
    });
});
