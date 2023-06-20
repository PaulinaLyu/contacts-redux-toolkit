import { combineReducers } from "redux";
import { contactsApi } from "./contactsApi";
import { favoritesApi } from "./favoritesApi";
import { configureStore } from "@reduxjs/toolkit";
import { groupsApi } from "./groupsApi";
import { api } from "./api";

const rootReducer = combineReducers({
  [groupsApi.reducerPath]: groupsApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({}).concat([api.middleware]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
