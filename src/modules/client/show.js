import { showCard } from "./card.js";
import { showHistory } from "./history.js";
import { showProfile } from "./profile.js";
import { showProgress } from "./progress.js";

const main = document.querySelector("main");

export function loadClient({ client }) {
  main.style.display = "flex";

  // Show client profile
  showProfile({ ...client });

  // Show loyalty tracker
  showCard({ ...client });

  // Show progress
  showProgress(client.loyaltyCard);

  // Show history
  showHistory({ ...client });
}
