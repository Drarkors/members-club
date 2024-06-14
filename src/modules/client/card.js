const clientId = document.getElementById("client-id");
const loyaltyTracker = document.querySelector(".loyalty-tracker");

export function showCard({ id, loyaltyCard }) {
  clientId.textContent = `ID: ${id}`;

  clearLoyaltyTracking(loyaltyCard.cutsNeeded);
  showLoyaltyTracking(loyaltyCard.totalCuts);
}

function clearLoyaltyTracking(cutsNeeded) {
  loyaltyTracker.innerHTML = "";

  for (let i = 0; i <= cutsNeeded - 1; i++) {
    const item = document.createElement("li");
    loyaltyTracker.append(item);
  }

  const items = loyaltyTracker.querySelectorAll("li");

  const giftMarker = document.createElement("img");
  giftMarker.setAttribute("src", "./src/assets/pin-gift-mark.svg");
  giftMarker.setAttribute("alt", "Ícone de prêmio ofuscado");

  console.log(items);

  items[items.length - 1].innerHTML = "";
  items[items.length - 1].append(giftMarker);
}

function showLoyaltyTracking(totalCuts) {
  const items = loyaltyTracker.querySelectorAll("li");

  console.log(totalCuts, "|", items.length);

  for (let i = 0; i <= items.length - 2; i++) {
    console.log("Cut:", i, "|", items.length - 2);
    if (i <= totalCuts) {
      const checkMark = document.createElement("img");
      checkMark.setAttribute("src", "./src/assets/pin-check.png");
      checkMark.setAttribute("alt", "Ícone de corte realizado");

      items[i].append(checkMark);
    }
  }

  if (totalCuts >= items.length) {
    const giftMarker = document.createElement("img");
    giftMarker.setAttribute("src", "./src/assets/pin-gift.svg");
    giftMarker.setAttribute("alt", "Ícone de prêmio ofuscado");
    items[items.length - 1].innerHTML = "";
    items[items.length - 1].append(giftMarker);
  }
}
