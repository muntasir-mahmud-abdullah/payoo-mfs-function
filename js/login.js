document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinCode = document.getElementById("pin-code").value;
    console.log(phoneNumber, pinCode);
    if (phoneNumber === "12345" && pinCode == "1234") {
      console.log("You are logged in ");
      window.location.href = "home.html";
    } else {
      alert("wrong phone number or password");
    }
  });
