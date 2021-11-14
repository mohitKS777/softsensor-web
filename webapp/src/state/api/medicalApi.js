import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const medicalApiSlice = createApi({
  reducerPath: "medicalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://54.90.225.93:3001/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authState.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (body) => ({
        url: "get_user_information",
        method: "POST",
        body: body,
      }),
      providesTags: ["projects"],
    }),
    getUserOrganzation: builder.query({
      query: (body) => {
        return {
          url: "get_user_organization",
          method: "POST",
          body: body,
        };
      },
    }),
    getProjectInfo: builder.query({
      query: (body) => ({
        url: "get_project_information",
        method: "POST",
        body: body,
      }),
    }),
    addNewUser: builder.mutation({
      query: (body) => ({
        url: "add_new_user",
        method: "POST",
        body: body,
      }),
    }),
    createProject: builder.mutation({
      query: (body) => ({
        url: "create_project",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["projects"],
    }),
    addMultipleMembersToProject: builder.mutation({
      query: (body) => ({
        url: "add_multiple_members_to_project",
        method: "POST",
        body: body,
      }),
    }),
    createOrganization: builder.mutation({
      query: (body) => ({
        url: "create_organization",
        method: "POST",
        body: body,
      }),
    }),
    updateLastViewed: builder.mutation({
      query: (body) => ({
        url: "update_last_viewed",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["projects"],
    }),
    getLastTask: builder.query({
      query: (body) => ({
        url: "get_case_info",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useTestApiQuery,
  useGetUserInfoQuery,
  useGetUserOrganzationQuery,
  useAddNewUserMutation,
  useCreateProjectMutation,
  useAddMultipleMembersToProjectMutation,
  useCreateOrganizationMutation,
  useGetProjectInfoQuery,
  useUpdateLastViewedMutation,
  useGetLastTaskQuery,
} = medicalApiSlice;

export default medicalApiSlice;
