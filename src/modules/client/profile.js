import dayjs from "dayjs";

const clientAvatar = document.getElementById("avatar");
const clientName = document.getElementById("client-name");
const clientSince = document.getElementById("client-since");

export function showProfile({ avatar, name, clientSince: since }) {
  clientName.textContent = name;
  clientSince.textContent = `Cliente desde: ${since}`;

  clientAvatar.style.backgroundImage = `url(${avatar})`;
}
