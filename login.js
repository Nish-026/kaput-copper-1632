let form = document.querySelector("form");
let signupData = JSON.parse(localStorage.getItem("user-list"));
let wrong= document.querySelector("#wrong")
form.addEventListener("submit", myFun);
function myFun(event) {
  event.preventDefault();
  let x = document.querySelector("#email").value;
  let y = document.querySelector("#password").value;
  let flag = false;
  function login(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === x && data[i].pass === y) {
        flag = true;
        break;
      }
    }
    if (flag == true) {
      window.location.href = "myaccount.html";
    } else {
        let div= document.createElement("div");
        div.innerText= "login or password. Remember that password is case-sensitive. Please try again."
        div.style.color=red;
        wrong.append(div);

    }
  }
  login(signupData);
}