import { makeAutoObservable } from "mobx";
import { api } from "../api/api";
import { ContactDto } from "src/types/dto/ContactDto";
import { groupsStore } from "./groupsStore";
import { FilterFormValues } from "src/components/FilterForm";

export const contactsStore = makeAutoObservable({
  isLoading: false,
  error: "",
  contacts: [] as ContactDto[],
  formData: {} as Partial<FilterFormValues>,

  selectedContact: {} as ContactDto,

  get filteredContacts(): ContactDto[] {
    let result = contactsStore.contacts || [];

    if (contactsStore.formData) {
      if (contactsStore.formData.name) {
        const filteredName = contactsStore.formData.name.toLowerCase();
        result = contactsStore.contacts?.filter(
          ({ name }) => name.toLowerCase().indexOf(filteredName) > -1
        );
      }

      if (contactsStore.formData.groupId) {
        const groupContacts = groupsStore.groups?.find(
          ({ id }) => id === contactsStore.formData.groupId
        );

        if (groupContacts) {
          result = result?.filter(({ id }) =>
            groupContacts.contactIds.includes(id)
          );
        }
      }
    }
    return result;
  },

  setFormData(data: Partial<FilterFormValues>) {
    if (data) {
      contactsStore.formData = data;
    }
  },

  *getContacts() {
    contactsStore.isLoading = true;
    debugger;
    const result: ContactDto[] = yield api.getContacts();
    if (result) {
      contactsStore.contacts = result;
      contactsStore.isLoading = false;
    } else {
      contactsStore.error = "Ошибка при получении данных";
      contactsStore.isLoading = false;
    }
  },

  getSelectedContact(contactId: string) {
    const foundContact = contactsStore.contacts.find(
      (contact) => contact.id === contactId
    );
    if (foundContact) {
      contactsStore.selectedContact = foundContact;
    }
  },
});
