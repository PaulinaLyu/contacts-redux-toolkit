import { makeAutoObservable } from "mobx";
import { api } from "../api";
// import { isSuccessResponse, Response } from "../types/response";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactsStore } from "./contactsStore";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesStore = makeAutoObservable({
  favorites: [] as ContactDto[],

  *getFavorites() {
    const result: string[] = yield api.getFavorites();

    if (result) {
      favoritesStore.favorites = contactsStore.contacts.filter(({ id }) => result.includes(id));
    }
  },
});
