import { changePageAction, resetPaginationState } from '.';
import store from '../..';
import initialState from './initialState';

describe('pagination slice', () => {
    it('Should have initial state', () => {
        expect(store.getState().pagination).toEqual(initialState);
    });

    it('"changePageAction", change active field', () => {
        store.dispatch(changePageAction(3));

        expect(store.getState().pagination.active).toBe(3);
    });

    it('"resetPaginationState", can update totalPages', () => {
        store.dispatch(resetPaginationState({totalPages: 3}));

        expect(store.getState().pagination.totalPages).toBe(3);
    });

    it('"resetPaginationState", can update active', () => {
        store.dispatch(resetPaginationState({active: 5}));

        expect(store.getState().pagination.active).toBe(5);
    });

    it('"resetPaginationState", can update whole state', () => {
        store.dispatch(resetPaginationState({totalPages: 40, active: 10}));
        
        expect(store.getState().pagination).toEqual({totalPages: 40, active: 10});
    });

    it('If do not pass payload should reset state to initial', () => {
        store.dispatch(resetPaginationState({totalPages: 40, active: 10}));
        store.dispatch(resetPaginationState());

        expect(store.getState().pagination).toEqual(initialState);
    });
});
