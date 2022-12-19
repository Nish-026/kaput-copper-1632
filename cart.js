let total=document.getElementById("totalprice");
    let container= document.getElementById("left")
    let cartdata= JSON.parse(localStorage.getItem("cart-list"))
    let empty=document.getElementById("empty")
    if(cartdata==null)
    {
      cartdata=[];
    }
    if(cartdata.length>0)
    {
        empty.innerHTML=null;
    }
    function displayProducts(data){
      let totalprice=0;
      container.innerHTML=null;
        data.forEach((element,index)=>{
          totalprice+=((+element.price)*(element.quantity));
          total.innerText= totalprice;
          let card= document.createElement("div");
          card.style.display="flex";
          let card1= document.createElement("div");
          card1.style.width="200px";
          card.style.border="1px";
          let image=document.createElement("img");
          image.setAttribute("src",element.image);
          image.style.width="100%";
          card1.append(image)
          let card2= document.createElement("div");
        //   card2.style.width="400px"

          let brand=document.createElement("h2");
          brand.innerText= element.title;

          let price=document.createElement("h3");
          price.innerText= element.price;

          let increment= document.createElement("button");
          increment.innerText= "+";
          increment.addEventListener("click",()=>{
            let value= ++element.quantity;
            quantity.innerText=value;
            totalprice+=((+element.price)*(element.quantity));
            total.innerText= "Total Price is:" + totalprice;
            localStorage.setItem("cart-list",JSON.stringify(data));
            displayProducts(data);
          })

          let quantity= document.createElement("span");
          quantity.innerText= element.quantity;

          let decrement= document.createElement("button");
          decrement.innerText= "-";
          decrement.addEventListener("click",()=>{
            let value= --element.quantity;
            quantity.innerText=value;
            totalprice-=((+element.price)*(element.quantity));
            total.innerText= "Total Price is:" + totalprice;
            localStorage.setItem("cart-list",JSON.stringify(data));
            displayProducts(data);
          })
          let removetocart= document.createElement("button");
            removetocart.innerText= "Remove";
            removetocart.style.marginLeft="20px";
            removetocart.style.color="white";
            removetocart.style.border="none";

            removetocart.style.backgroundColor="#424242";
            removetocart.addEventListener("click",()=>{
                data.splice(index,1);
                totalprice-=((+element.price)*(element.quantity));
                total.innerText= "Total Price is:" + totalprice;
                localStorage.setItem("cart-list",JSON.stringify(data));
                displayProducts(data);
                
            })
          card2.append(brand,price,increment,quantity,decrement,removetocart);
          card.append(card1,card2)
          container.append(card)
        })
    }
    displayProducts(cartdata);