import { removeErrorLabel } from "./input.js";
import { loadClient } from "../client/show.js";

import { findClientById } from "../../services/find-client-by-id.js";

const form = document.querySelector("form");
const input = document.getElementById("id-card");
const button = form.querySelector("button");

form.onsubmit = async (event) => {
  event.preventDefault();

  removeErrorLabel();

  if (!input) return;

  button.setAttribute("disabled", "true");

  const client = await findClientById({ clientId: input.value });

  button.removeAttribute("disabled");

  if (!!client) {
    loadClient({ client });
  }
};
