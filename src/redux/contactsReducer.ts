import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterFormValues } from "src/components/FilterForm";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { useGetGroupsQuery } from "./groupsReducer";

interface IInitialState {
  filteredContacts: ContactDto[];
}

interface IFilteredPayload {
  form: Partial<FilterFormValues>;
  contacts: ContactDto[];
  groups: GroupContactsDto[];
}

const initialState: IInitialState = {
  filteredContacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filterContacts(state, action: PayloadAction<IFilteredPayload>) {
      let findContacts = action?.payload?.contacts;
      let findGroups = action?.payload?.groups;
      let formResult = action?.payload?.form;

      if (formResult?.name) {
        const filteredName = formResult?.name.toLowerCase();
        findContacts = findContacts.filter(
          ({ name }) => name.toLowerCase().indexOf(filteredName) > -1
        );
      }

      if (formResult.groupId) {
        const groupContacts = findGroups.find(
          ({ id }) => id === formResult.groupId
        );

        if (groupContacts) {
          findContacts = findContacts.filter(({ id }) =>
            groupContacts.contactIds.includes(id)
          );
        }
      }

      state.filteredContacts = findContacts;
    },
  },
});

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

export const { filterContacts } = contactsSlice.actions;

export const { useGetContactsQuery } = contactsApiSlice;
