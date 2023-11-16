import { useDispatch, useSelector } from 'react-redux';
import { T_Dispatch, T_RootState } from '../../store';
import { I_PaginationState } from '@t/index';
import { changePageAction, resetPaginationState } from '../../store/slices/pagination';

export default function usePagination(): I_PaginationState & {
    handleResetPagination: () => void;
    handleSetTotalPages: (totalPages: number) => void;
    handleChangePage: (page: number) => void;
} {
    const { active, totalPages } = useSelector((state: T_RootState) => state.pagination);
    const dispatch = useDispatch<T_Dispatch>();

    const handleResetPagination = () => {
        dispatch(resetPaginationState());
    };

    const handleSetTotalPages = (totalPages: number) => {
        dispatch(resetPaginationState({ totalPages }));
    };

    const handleChangePage = (page: number) => {
        dispatch(changePageAction(page));
    };

    return {
        active,
        totalPages,
        handleResetPagination,
        handleSetTotalPages,
        handleChangePage,
    };
}
