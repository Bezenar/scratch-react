import type { I_Option } from '@atoms/Select/types';
import { I_CharactersFilters, I_EpisodesFilters, I_LocationsFilters } from '@t/index';

export const API_URL = 'https://rickandmortyapi.com/api/';

export const SELECT_GENDER_OPTIONS: Array<I_Option> = [
    { id: 1, value: 'all' },
    { id: 2, value: 'female' },
    { id: 3, value: 'male' },
    { id: 4, value: 'genderless' },
    { id: 5, value: 'unknown' },
];

export const SELECT_STATUS_OPTIONS: Array<I_Option> = [
    { id: 1, value: 'all' },
    { id: 2, value: 'alive' },
    { id: 3, value: 'dead' },
    { id: 4, value: 'unknown' },
];

export const CHARACTERS_INITIAL_FILTERS: I_CharactersFilters = {
    value: '',
    type: false,
    name: true,
    species: false,
    status: null,
    gender: null,
}

export const LOCATIONS_INITIAL_FILTERS: I_LocationsFilters = {
    value: '',
    name: true,
    type: true,
    dimension: true,
}

export const EPISODES_INITIAL_FILTERS: I_EpisodesFilters = {
    value: '',
    name: true,
    episode: true,
}
