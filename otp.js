
    let input= document.getElementById("otp");
    let actualOTP= 1234;
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() =>{
          if(actualOTP == input.value)
          {
            resolve("SUCCESS")
          }
          else{
            reject("FAILED")
          }
        },10000)
    })
    promise.then((res) =>{
        alert(res);
        window.location.href = "index.html";
    })
    .catch((err)=>{
        alert(err);
    })