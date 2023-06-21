import { makeAutoObservable } from "mobx";
import { api } from "../api/api";

import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { contactsStore } from "./contactsStore";

export const groupsStore = makeAutoObservable({
  isLoading: false,
  error: "",
  groups: [] as GroupContactsDto[],
  selectedGroupId: "",

  *getGroups() {
    groupsStore.isLoading = true;
    const result: GroupContactsDto[] = yield api.getGroups();

    if (result) {
      groupsStore.groups = result;
      groupsStore.isLoading = false;
    } else {
      groupsStore.isLoading = false;
      groupsStore.error = "Ошибка при получении данных";
    }
  },

  setSelectedGroupId(id: string) {
    groupsStore.selectedGroupId = id;
  },

  get selectedGroup(): any {
    const foundGroupContacts = groupsStore.groups.find(
      (group) => group.id === groupsStore.selectedGroupId
    );
    if (foundGroupContacts) {
      return foundGroupContacts;
    }
    return {};
  },

  get selectedGroupContacts(): ContactDto[] | [] {
    const filteredGroupContacts = contactsStore?.contacts?.filter(({ id }) =>
      groupsStore.selectedGroup.contactIds.includes(id)
    );
    if (filteredGroupContacts) {
      return filteredGroupContacts;
    }
    return [];
  },
});
