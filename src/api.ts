import { ContactDto } from "./types/dto/ContactDto";

class Api {
  async getContacts() {
    const response = await fetch(
      "https://mocki.io/v1/82e24f9d-5da5-4a0c-bfdd-c61e885681af"
    ).then((res) => res.json());
    return response;
  }

  async getFavorites() {
    const response = await fetch(
      "https://mocki.io/v1/bd121c5c-af09-4cfe-a290-5e7874baee8f"
    ).then((res) => res.json());
    return response;
  }
  async getGroups() {
    const response = await fetch(
      "https://mocki.io/v1/e632c827-bb21-4a82-8796-49b4193d22de"
    ).then((res) => res.json());
    return response;
  }
}

export const api = new Api();
