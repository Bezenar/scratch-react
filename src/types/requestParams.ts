import { N_Response } from './responses';

export namespace N_ReqParams {
    export interface I_Characters {
        name?: string;
        status?: N_Response.T_CharacterStatus;
        species?: string;
        type?: string;
        gender?: N_Response.T_Gender;
        page?: `${number}`;
    }

    export interface I_Locations {
        name?: string;
        type?: string;
        dimension?: string;
        page?: `${number}`;
    }

    export interface I_Episodes {
        name?: string;
        episode?: string;
        page?: `${number}`;
    }
}
