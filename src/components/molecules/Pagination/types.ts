export interface I_Pagination {
    active: number;
    totalPages: number;
    visiblePages?: number;
    onChange: (page: number) => void;
}
