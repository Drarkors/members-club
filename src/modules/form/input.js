const form = document.querySelector("form");
const input = document.getElementById("id-card");
const container = input.closest("div");
const errorLabel = form.querySelector("label");

input.oninput = () => {
  const hasLetterRegex = /[^0-9\-]+/g;

  let value = input.value.replace(hasLetterRegex, "");

  input.value = value;
};

input.oninvalid = (e) => {
  e.preventDefault();

  if (e.type == "invalid") {
    container.classList.add("input-error");

    showErrorLabel();
  }
};

function showErrorLabel() {
  errorLabel.style.display = "inline";
  errorLabel.setAttribute("for", "id-card");
  errorLabel.classList.add("error-descr");

  const icon = document.createElement("i");
  icon.classList.add("ph-warning");

  const errorText = !!input.value
    ? "ID de cartão inválido"
    : "É necessário informar um ID de cartão";

  errorLabel.innerHTML = `<i class="ph ph-warning"></i> ${errorText}`;

  form.appendChild(errorLabel);
}

export function removeErrorLabel() {
  container.classList.remove("input-error");
  if (!errorLabel) return;

  errorLabel.style.display = "none";
}
