import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsApiSlice = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
  endpoints(builder) {
    return {
      getGroups: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: "/e632c827-bb21-4a82-8796-49b4193d22de" }),
      }),
    };
  },
});

export const { useGetGroupsQuery } = groupsApiSlice;
