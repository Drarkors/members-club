import { apiConfig } from "./api-config.js";

export async function findClientById({ clientId }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);

    const client = await response.json();

    return client;
  } catch (e) {
    console.log(e);
    alert("Não foi possível encontrar o ID informado");

    return null;
  }
}
