import { I_PaginationState } from '@t/index';

class PaginationStore {
    public pagination: I_PaginationState = {
        active: 1,
        total: 0,
    };

    private listeners: Set<() => void> = new Set();

    public subscribe(listener: () => void): () => void {
        this.listeners.add(listener);

        return () => {
            this.listeners.delete(listener);
        };
    }

    public getState(): I_PaginationState {
        return this.pagination;
    }

    private emitChanges(): void {
        this.listeners.forEach((listener) => listener());
    }

    public changeActive(active: number): void {
        this.pagination = {
            ...this.pagination,
            active,
        };

        this.emitChanges();
    }

    public setTotal(total: number): void {
        this.pagination = {
            ...this.pagination,
            total,
        };
        this.emitChanges();
    }

    public resetPagination(): void {
        this.pagination = {
            active: 1,
            total: 0,
        };
        this.emitChanges();
    }
}

export default new PaginationStore();
