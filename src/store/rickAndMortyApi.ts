import parseParamsObjectToString from '@helpers/parseParamsObjectToString';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants';
import type { N_ReqParams } from '@t/requestParams';
import type { N_Response } from '@t/responses';

export const rickAndMortyApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getCharacters: builder.query<N_Response.T_CharactersRes, N_ReqParams.I_Characters>({
            query: (params = {}) => `character${parseParamsObjectToString(params)}`,
        }),
        getEpisodes: builder.query<N_Response.T_EpisodesRes, N_ReqParams.I_Episodes>({
            query: (params = {}) => `episode${parseParamsObjectToString(params)}`,
        }),
        getLocations: builder.query<N_Response.T_LocationsRes, N_ReqParams.I_Locations>({
            query: (params = {}) => `location${parseParamsObjectToString(params)}`,
        }),
    }),
});

export const { useGetCharactersQuery, useGetLocationsQuery, useGetEpisodesQuery } = rickAndMortyApi;
