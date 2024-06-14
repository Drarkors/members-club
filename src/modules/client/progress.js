const remaining = document.getElementById("remaining-progress");
const progressIndicator = document.getElementById("progress-indicator");
const progressLabel = document.querySelector(".progress-container > label");

export function showProgress({ totalCuts, cutsNeeded, cutsRemaining }) {
  clearProgress();

  remaining.innerHTML = `<strong>${cutsRemaining}</strong> cortes restantes`;
  progressLabel.innerHTML = `${totalCuts} de ${cutsNeeded}`;
  progressIndicator.style.width = `${(totalCuts / cutsNeeded) * 100}%`;

  if (totalCuts == cutsNeeded) {
    alert("Parabéns! Seu próximo corte é gratuito!");
  }
}

function clearProgress() {
  remaining.innerHTML = "";
  progressLabel.innerHTML = "";
  progressIndicator.style.width = 0;
}
