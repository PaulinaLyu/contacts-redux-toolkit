import { combineReducers } from "redux";
import { contactsApiSlice } from "./contactsReducer";
import { favoritesApiSlice } from "./favoritesReducer";
import { configureStore } from "@reduxjs/toolkit";
import { groupsApiSlice } from "./groupsReducer";

const rootReducer = combineReducers({
  [groupsApiSlice.reducerPath]: groupsApiSlice.reducer,
  [favoritesApiSlice.reducerPath]: favoritesApiSlice.reducer,
  [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({}).concat([
      groupsApiSlice.middleware,
      favoritesApiSlice.middleware,
      contactsApiSlice.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
