function getInputValueById(id) {
  return Number(document.getElementById(id).value);
}
function getInputTextById(id) {
  return Number(document.getElementById(id).innerText);
}

function ShowSectionFormId(id) {
  document.getElementById("addmoney-container").classList.add("hidden");
  document.getElementById("cashout-container").classList.add("hidden");
  document.getElementById("transaction-container").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
