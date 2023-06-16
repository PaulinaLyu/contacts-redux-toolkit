import { makeAutoObservable } from "mobx";
import { api } from "../api";
// import { isSuccessResponse, Response } from "../types/response";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  selectedContact: {} as ContactDto,
  favoritesContacts: [] as ContactDto[],
  *get() {
    const result: ContactDto[] = yield api.getContacts();
    debugger;
    if (result) {
      contactsStore.contacts = result;
      debugger;
    }
  },
  getSelectedContact(contactId: string) {
    const foundContact = contactsStore.contacts.find((contact) => contact.id === contactId);
    if (foundContact) {
      contactsStore.selectedContact = foundContact;
    }
  },
  *getFavorites() {
    const result: ContactDto[] = yield api.getFavorites();
    debugger;
    // if (result) {
    //   // favorites: data?.filter(({ id }) => favoritesIds?.includes(id)),
    //   debugger;
    //   const contacts = this?.contacts;
    //   const ab = contacts?.filter(({ id }) => {
    //     debugger;
    //     // return result?.includes(id)
    //   });
    //   console.log(ab);
    //   debugger;
    //   contactsStore.favoritesContacts = contacts?.filter(({ id }) => {
    //     debugger;
    //     // return result?.includes(id)
    //   });
    //   debugger;
    // }
  },
});
