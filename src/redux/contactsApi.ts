import { ContactDto } from "src/types/dto/ContactDto";
import { api } from "./api";

export const contactsApi = api.injectEndpoints({
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => ({
          url: "/82e24f9d-5da5-4a0c-bfdd-c61e885681af",
        }),
      }),
    };
  },
});

export const { useGetContactsQuery } = contactsApi;
