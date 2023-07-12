import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => '/projects',
    }),
    getProject: builder.query({
      query: (projectId) => `projects/${projectId}`
    }),
    addProject: builder.mutation({
        query: project => ({
            url: '/projects',
            method: 'POST',
            body: project
        })
    }),
    addRequest: builder.mutation({
      query: (projectId) => ({
          url: `/requests/${projectId}`,
          method: 'POST',
          credentials: "include",
				  headers: {
					"Content-Type": "application/json"
          }
      })
  }),
  }),
});

export const { useGetAllProjectsQuery, useGetProjectQuery, useAddProjectMutation, useAddRequestMutation } = apiSlice;