import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['otherRequest'],
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => '/projects',
    }),
    getProject: builder.query({
      query: (projectId) => `projects/${projectId}`
    }),
    getMembers: builder.query({
      query: (projectId) => `requests/members/${projectId}`
    }),
    addProject: builder.mutation({
        query: project => ({
            url: '/projects',
            method: 'POST',
            body: project
        })
    }),
    getMyRequests: builder.query({
      query: () => 'requests/myRequests'
    }),
    getOtherRequests: builder.query({
      query: () => 'requests/otherRequests',
      providesTags: ['otherRequest']
    }),
    getMyProjects: builder.query({
      query: () => 'requests/owner'
    }),
    getOtherProjects: builder.query({
      query: () => 'requests/member'
    }),
    approveOtherRequests: builder.mutation({
      query: (requestId) => ({
        url: `requests/approve/${requestId}`,
        method: 'POST',
        credentials: "include",
        headers: {
        "Content-Type": "application/json"
        }
      }),
      invalidatesTags: ['otherRequest']
    }),
    denyOtherRequests: builder.mutation({
      query: (requestId) => ({
        url: `requests/disapprove/${requestId}`,
        method: 'POST',
        credentials: "include",
        headers: {
        "Content-Type": "application/json"
        }
      }),
      invalidatesTags: ['otherRequest']
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
  getUser: builder.query({
    query: () => '/auth/user',
  }),

  }),
});

export const { useGetAllProjectsQuery, useGetProjectQuery, useGetMembersQuery, useAddProjectMutation, useAddRequestMutation, useGetMyRequestsQuery, useGetOtherRequestsQuery, useApproveOtherRequestsMutation, useDenyOtherRequestsMutation, useGetMyProjectsQuery, useGetOtherProjectsQuery, useGetUserQuery } = apiSlice;