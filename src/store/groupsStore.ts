import { makeAutoObservable } from "mobx";
import { api } from "../api";
// import { isSuccessResponse, Response } from "../types/response";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  selectedGroupContacts: {} as ContactDto[],

  *getGroups() {
    const result: GroupContactsDto[] = yield api.getGroups();

    if (result) {
      groupsStore.groups = result;
    }
  },
  // *getSelectedContact(contactId: string) {
  //   const findedContact = contactsStore.contacts.find((contact) => contact.id === contactId);
  //   if (findedContact) {
  //     contactsStore.selectedContact = findedContact;
  //   }
  // },
  // *getSelectedGroups(groupId: string) {
  //   const findedGroupContacts = groupsStore.groups.find((contact) => contact.id === groupId);
  //   if (findedContact) {
  //     contactsStore.selectedContact = findedContact;
  //   }
  // },
});
