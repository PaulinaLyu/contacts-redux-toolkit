import { makeAutoObservable } from "mobx";
import { api } from "../api";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactsStore } from "./contactsStore";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesStore = makeAutoObservable({
  favorites: [] as ContactDto[],
  isLoading: false,
  error: "",

  *getFavorites() {
    favoritesStore.isLoading = true;
    const result: string[] = yield api.getFavorites();

    if (result) {
      favoritesStore.favorites = contactsStore.contacts.filter(({ id }) =>
        result.includes(id)
      );
      favoritesStore.isLoading = false;
    } else {
      favoritesStore.error = "Ошибка при получении данных";
      favoritesStore.isLoading = false;
    }
  },
});
