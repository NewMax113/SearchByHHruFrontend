import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    fetchSearchResults: builder.query({
      query: ({url, method, headers, queryParams}) => ({
        url,
        method,
        headers,
        body: queryParams ? JSON.stringify(queryParams) : undefined,
      }),
    }),
  }),
})

export const { useFetchSearchResultsQuery } = apiSlice