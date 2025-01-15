import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    fetchSearchResults: builder.query({
      query: (queryParams) => ({
        url: `?${queryParams}`,
        method: 'GET',
        headers: {
          'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
  }),
})

export const { useFetchSearchResultsQuery } = apiSlice