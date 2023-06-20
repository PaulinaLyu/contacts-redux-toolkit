import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { api } from "./api";

export const favoritesApi = api.injectEndpoints({
  endpoints(builder) {
    return {
      getFavorites: builder.query<FavoriteContactsDto, void>({
        query: () => ({ url: "/bd121c5c-af09-4cfe-a290-5e7874baee8f" }),
      }),
    };
  },
});

export const { useGetFavoritesQuery } = favoritesApi;
