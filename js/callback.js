document
  .getElementById("btn-addmoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = getInputTextById("account-balance");
    const inputAddmoney = getInputValueById("input-addmoney");
    const inputPincode = getInputValueById("input-pincode");
    if(isNaN(inputAddmoney)){
        alert('Failed to add money');
        return;
    }
    if (inputPincode === 1234) {
      const newBalance = accountBalance + inputAddmoney;
      document.getElementById("account-balance").innerText = newBalance;
      // Trasaction history updated
      const p = document.createElement("p");
      const h3 = document.createElement("h3");
      p.innerText = `added money: ${inputAddmoney} tk and new balance: ${newBalance} tk`;
      h3.innerText = "Cash In";
      h3.style.backgroundColor = "green";
      h3.style.color = "#000";
      document.getElementById("transaction-container").append(h3, p);
      //   document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Wrong pincode");
    }
  });
document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = getInputTextById("account-balance");
    const inputCashout = getInputValueById("input-cashout");
    const inputPincode = getInputValueById("input-cashout-pincode");
    if(isNaN(inputCashout)){
        alert("Failed to Cashout");
        return;
    }
    if (inputPincode === 1234) {
        if(inputCashout>accountBalance){
            alert("Not enough money for cashout");
            return;
        }
      const newBalance = accountBalance - inputCashout;
      document.getElementById("account-balance").innerText = newBalance;
      // Trasaction history updated
      const p = document.createElement("p");
      p.innerHTML = ` <h4 style= "background-color:yellow">Cash Out </h4> <p> money: ${inputCashout} tk cashout and new balance: ${newBalance} tk </p>`;
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Wrong pincode");
    }
  });

document
  .getElementById("addmoney-button")
  .addEventListener("click", function () {
    ShowSectionFormId("addmoney-container");
  });
document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    ShowSectionFormId("cashout-container");
  });
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    ShowSectionFormId("transaction-container");
  });
