import TypeCheck from '@helpers/TypeCheck';
import useDetectFirstRender from '@hooks/useDetectFirstRender';
import { I_Pagination } from '@molecules/Pagination/types';
import { useCallback, useEffect, useReducer } from 'react';

export type T_UsePaginationState = Omit<I_Pagination, 'visiblePages' | 'onChange'>;

export default function usePagination(
    initial: Partial<T_UsePaginationState> = {}
): T_UsePaginationState & { handleChangePage: (page: number) => void } {
    const isFirstRender = useDetectFirstRender();
    const [pagination, setPagination] = useReducer<
        (prev: T_UsePaginationState, next: Partial<T_UsePaginationState>) => T_UsePaginationState,
        T_UsePaginationState
    >(
        (prev, next) => ({ ...prev, ...next }),
        {
            active: 1,
            totalPages: 0,
        },
        (state) => ({ ...state, ...initial })
    );

    const handleChangePage = useCallback(
        (page: number) => {
            setPagination({ active: page });
        },
        [pagination.active]
    );

    useEffect(() => {
        if (TypeCheck.isNumber(initial.totalPages) && !isFirstRender) {
            setPagination({ totalPages: initial.totalPages });
        }
    }, [initial.totalPages]);

    return {
        ...pagination,
        handleChangePage,
    };
}
