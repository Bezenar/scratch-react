import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { I_PaginationState } from '@t/index';
import initialState from './initialState';

const pagination = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        resetPaginationState: (state, action: PayloadAction<Partial<I_PaginationState> | undefined>) => {
            if(action.payload?.totalPages) {
                state.totalPages = action.payload.totalPages;
            }

            if(action.payload?.active) {
                state.active = action.payload.active;
            }

            if (!action.payload) {
                state.active = initialState.active;
                state.totalPages = initialState.totalPages;
            }
        },
        changePageAction: (state, action: PayloadAction<number>) => {
            state.active = action.payload;
        },
    },
});

export const { resetPaginationState, changePageAction } = pagination.actions;
export default pagination;
