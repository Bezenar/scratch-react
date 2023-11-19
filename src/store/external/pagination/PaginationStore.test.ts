import store from '.';

describe('Pagination external store', () => {
    afterEach(() => {
        // @ts-expect-error
        store.listeners = new Set();
        store.resetPagination();
    });

    it('Be default have "total" equal 0 and "active" equal 1', () => {
        expect(store.pagination.active).toBe(1);
        expect(store.pagination.total).toBe(0);
    });

    it('Method "subscribe", add listener to "listeners" Set', () => {
        const mockFn = jest.fn();
        // @ts-expect-error
        expect(store.listeners.size).toBe(0);
        store.subscribe(mockFn);
        // @ts-expect-error
        expect(store.listeners.size).toBe(1);
    });

    it('Method "subscribe", return clear function', () => {
        const mockFn = jest.fn();
        const clearFn = store.subscribe(mockFn);
        // @ts-expect-error
        expect(store.listeners.size).toBe(1);
        clearFn();
        // @ts-expect-error
        expect(store.listeners.size).toBe(0);
    });

    it('Method "emitChange", call all "listeners"', () => {
        const mockFn = jest.fn();
        store.subscribe(mockFn);
        // @ts-expect-error
        store.emitChanges();

        expect(mockFn).toHaveBeenCalled();
    });

    it('Method "changePage", update "pagination.active" value', () => {
        store.changeActive(25);
        expect(store.pagination.active).toBe(25);
    });

    it('Method "setTotal" update "pagination.total" value', () => {
        store.setTotal(25);
        expect(store.pagination.total).toBe(25);
    });

    it('Method "resetPagination" set "pagination" to initial value', () => {
        store.changeActive(25);
        store.setTotal(25);
        store.resetPagination();

        expect(store.pagination.active).toBe(1);
        expect(store.pagination.total).toBe(0);
    });

    it('Method "getState" return "pagination" value', () => {
        expect(store.getState()).toEqual({
            active: 1,
            total: 0,
        });
    });
});
