let form = document.querySelector("form");
let data = JSON.parse(localStorage.getItem("user-list")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    name: form.fname.value,
    email: form.email.value,
    mobile: form.phone.value,
    pass: form.password.value,
  };
  data.push(obj);

  if (obj.email == "" || obj.mobile == "" || obj.pass == "") {
    alert("Kindly fill all the details!");
  } else {
    localStorage.setItem("user-list", JSON.stringify(data));
    alert("Sign Up Successful")
    window.location.href="index.html"
  }
});