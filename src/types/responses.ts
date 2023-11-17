export namespace N_Response {
    export type T_CharacterStatus = 'alive' | 'dead' | 'unknown';
    export type T_Gender = 'female' | 'male' | 'genderless' | 'unknown';
    export type T_URL = `https://rickandmortyapi.com/api/${string}`;

    export interface I_Base {
        id: number;
        name: string;
        url: T_URL;
        created: string;
    }

    export interface I_PaginationInfo {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    }

    export interface I_Origin {
        name: string;
        url: T_URL;
    }

    export interface I_LocationShort {
        name: string;
        url: T_URL;
    }

    export interface I_Character extends I_Base {
        status: T_CharacterStatus;
        species: string;
        type: string;
        gender: T_Gender;
        origin: I_Origin;
        location: I_LocationShort;
        image: T_URL;
        episode: Array<T_URL>;
    }

    export interface I_Location extends I_Base {
        type: string;
        dimension: string;
        residents: Array<T_URL>;
    }

    export interface I_Episode extends I_Base {
        air_date: string;
        episode: string;
        characters: Array<T_URL>;
    }

    export interface I_MainResponseBody<T> {
        info: I_PaginationInfo;
        results: Array<T>;
    }

    export type T_CharactersRes = I_MainResponseBody<I_Character>;
    export type T_LocationsRes = I_MainResponseBody<I_Location>;
    export type T_EpisodesRes = I_MainResponseBody<I_Episode>;
}
