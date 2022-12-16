let container= document.getElementById("main_products_div");
let fetchedData=[];
fetch("https://639b0af431877e43d680266b.mockapi.io/products")
.then((responseObject)=>{
  return responseObject.json();
})
.then((actualdata)=>{
  console.log(actualdata)
  display(actualdata)
  fetchedData=actualdata
})
.catch((error)=>{
  console.log(error);
})

function display(data){
  container.innerHTML=null;
  data.forEach((element)=>{
    let card= document.createElement("div");

    let image=document.createElement("img");
    image.setAttribute("src",element.image);

    let name= document.createElement("h3");
    name.innerText=element.title;
    name.style.textAlign="center"

    let type=document.createElement("p");
    type.innerText=element.category;
    type.style.fontSize="small";
    type.style.textAlign="center";
    type.style.marginTop="-15px";

    let price= document.createElement("p");
    price.innerText=element.price;
    price.style.fontSize="small";
    price.style.textAlign="center"


    let cart= document.createElement("button");
    cart.innerText="ADD TO CART";
    cart.style.backgroundColor="#424242";
    cart.style.color="white";
    cart.style.display="block";
    cart.style.width="200px";
    cart.style.padding="10px";

    cart.addEventListener("click",()=>{
      let cartdata= JSON.parse(localStorage.getItem("cart-list"));
      if(cartdata==null)
      {
        cartdata=[];
      }
        alert("Product Added To Cart")
        cartdata.push({...element,quantity:1});
        localStorage.setItem("cart-list",JSON.stringify(cartdata))
    })

    card.append(image,name,type,price,cart);
    container.append(card);
  })
}