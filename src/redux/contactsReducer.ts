import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
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

export const { useGetContactsQuery } = contactsApiSlice;
