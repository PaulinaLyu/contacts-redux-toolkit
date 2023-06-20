import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { api } from "./api";

export const groupsApi = api.injectEndpoints({
  endpoints(builder) {
    return {
      getGroups: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: "/e632c827-bb21-4a82-8796-49b4193d22de" }),
      }),
    };
  },
});

export const { useGetGroupsQuery } = groupsApi;
