import type { N_Response } from '@t/responses';

export interface I_CharacterCard {
    id: number;
    image: N_Response.T_URL;
    name: string;
}
