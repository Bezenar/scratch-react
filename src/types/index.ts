import type { NonIndexRouteObject } from 'react-router-dom';
import { N_Response } from './responses';

export type T_UnknownObject = Record<string | number | symbol, unknown>;

export type T_AnyObject = Record<any, any>;

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

export interface I_CharactersFilters {
    value: string;
    name: boolean;
    species: boolean;
    type: boolean;
    status: { id: number, value: N_Response.T_CharacterStatus } | null;
    gender: { id: number, value: N_Response.T_Gender} | null;
}

export type T_CharactersRadioFilters = Pick<I_CharactersFilters, 'name' | 'species' | 'type'>;

export interface I_LocationsFilters {
    value: string;
    name: boolean;
    dimension: boolean;
    type: boolean;
}

export type T_LocationsRadioFilters = Pick<I_LocationsFilters, 'name' | 'dimension' | 'type'>;

export interface I_EpisodesFilters {
    value: string;
    name: boolean;
    episode: boolean;
}

export type T_EpisodesRadioFilters = Pick<I_EpisodesFilters, 'name' | 'episode'>;
