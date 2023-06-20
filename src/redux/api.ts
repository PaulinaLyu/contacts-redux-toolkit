import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_API } from "./constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL_API });

export const api = createApi({
  reducerPath: "app/api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
