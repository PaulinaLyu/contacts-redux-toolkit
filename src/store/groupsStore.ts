import { makeAutoObservable } from "mobx";
import { api } from "../api";
// import { isSuccessResponse, Response } from "../types/response";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { contactsStore } from "./contactsStore";

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  selectedGroup: {} as GroupContactsDto,
  selectedGroupContacts: {} as ContactDto[],

  *getGroups() {
    const result: GroupContactsDto[] = yield api.getGroups();

    if (result) {
      groupsStore.groups = result;
    }
  },
  getSelectedGroups(groupId: string) {
    const foundGroupContacts = groupsStore.groups.find(
      (group) => group.id === groupId
    );
    if (foundGroupContacts) {
      debugger;
      groupsStore.selectedGroup = foundGroupContacts;
      const filteredGroupContacts = contactsStore?.contacts?.filter(({ id }) =>
        foundGroupContacts.contactIds.includes(id)
      );
      debugger;
      groupsStore.selectedGroupContacts = filteredGroupContacts
        ? filteredGroupContacts
        : [];
    }
  },
});
