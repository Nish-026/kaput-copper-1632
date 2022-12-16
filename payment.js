let allCart = JSON.parse(localStorage.getItem("cart")) || [];

let payment = document.querySelector("form");
let Bag = JSON.parse(localStorage.getItem("pay")) || [];
payment.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    email: payment.Email.value,
    mobile: payment.mobile.value
  };
  Bag.push(obj);
  if (obj.email == "" || obj.mobile == "") {
    alert(" please  fill correct card  details");
  } else {
    localStorage.setItem("pay", JSON.stringify(Bag));
    window.location.href = "otp.html";
  }
});