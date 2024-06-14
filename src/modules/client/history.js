const historySummary = document.querySelector(".history-summary");
const historyList = document.querySelector(".history-list");

export function showHistory({ appointmentHistory }) {
  clearHistory();

  const summaryLabel = document.createElement("h4");
  const summaryValue = document.createElement("span");

  summaryLabel.textContent = "Histórico";
  summaryValue.textContent = `${appointmentHistory.length} cortes`;

  historySummary.append(summaryLabel, summaryValue);

  appointmentHistory.forEach((appointment) => {
    const listItem = document.createElement("li");
    const listItemValuesContianer = document.createElement("div");
    const listItemImgContainer = document.createElement("div");

    const itemDate = document.createElement("h4");
    const itemHour = document.createElement("span");
    const itemImg = document.createElement("img");

    itemDate.textContent = appointment.date;
    itemHour.textContent = appointment.date;

    itemImg.setAttribute("src", "./src/assets/check.png");
    itemImg.setAttribute("alt", "Icone de check");

    listItemValuesContianer.append(itemDate, itemHour);
    listItemImgContainer.append(itemImg);

    listItem.append(listItemValuesContianer, listItemImgContainer);

    historyList.append(listItem);
  });
}

function clearHistory() {
  historySummary.innerHTML = "";
  historyList.innerHTML = "";
}
