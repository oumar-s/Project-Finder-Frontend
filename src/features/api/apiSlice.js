import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => '/projects',
    }),
    addProject: builder.mutation({
        query: project => ({
            url: '/projects',
            method: 'POST',
            body: project
        })
    }),
  }),
});

export const { useGetAllProjectsQuery, useAddProjectMutation } = apiSlice;