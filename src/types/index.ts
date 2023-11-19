import type { NonIndexRouteObject } from 'react-router-dom';

export interface I_MutatedRouteObject extends NonIndexRouteObject {
    content?: React.ReactNode;
    externalSource?: string;
    children?: Array<I_MutatedRouteObject>;
}

export type T_MappedRoutes = Array<JSX.Element | T_MappedRoutes | null>;

export type I_PaginationState = {
    active: number;
    total: number;
}

export type T_UsePaginationReturn = [
    I_PaginationState,
    {
        changeActive: (page: number) => void;
        setTotal: (total: number) => void;
        resetPagination: () => void;
    }
];
