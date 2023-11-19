import { useSyncExternalStore } from 'react';
import PaginationStore from '@store/external/pagination';
import type { I_PaginationState, T_UsePaginationReturn } from '@t/index';

export default function usePagination(): T_UsePaginationReturn {
    const pagination: I_PaginationState = useSyncExternalStore(
        PaginationStore.subscribe.bind(PaginationStore),
        PaginationStore.getState.bind(PaginationStore)
    );

    return [
        pagination,
        {
            changeActive: PaginationStore.changeActive.bind(PaginationStore),
            setTotal: PaginationStore.setTotal.bind(PaginationStore),
            resetPagination: PaginationStore.resetPagination.bind(PaginationStore),
        },
    ];
}
