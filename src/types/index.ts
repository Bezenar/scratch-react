import type { NonIndexRouteObject } from 'react-router-dom';

export interface I_MutatedRouteObject extends NonIndexRouteObject {
    content?: React.ReactNode;
    externalSource?: string;
    children?: Array<I_MutatedRouteObject>;
}

export type T_MappedRoutes = Array<JSX.Element | T_MappedRoutes | null>;
