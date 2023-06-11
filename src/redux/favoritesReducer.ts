import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesApiSlice = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
  endpoints(builder) {
    return {
      getFavorites: builder.query<FavoriteContactsDto, void>({
        query: () => ({ url: "/bd121c5c-af09-4cfe-a290-5e7874baee8f" }),
      }),
    };
  },
});

export const { useGetFavoritesQuery } = favoritesApiSlice;
