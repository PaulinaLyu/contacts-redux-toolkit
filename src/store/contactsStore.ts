import { makeAutoObservable } from "mobx";
import { api } from "../api";
// import { isSuccessResponse, Response } from "../types/response";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  selectedContact: {} as ContactDto,
  *get() {
    const result: ContactDto[] = yield api.getContacts();
    if (result) {
      contactsStore.contacts = result;
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
