
  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// product script

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */



  // product for front pages

  let data = [
{
  id:"1001",
name: "Biotherm",
price: 17.59,
img: "https://a.cdnsbn.com/images/products/250/20527276721.jpg",
},
{
  id:"1002",
name: "Men's Tek Gear® Ultra Soft Fleece Hoodie",
price: 17.59,
img: "https://a.cdnsbn.com/images/products/250/26161080301.jpg",
},
{
  id:"1003",
name: "Men's Tek Gear®  Hoodie[yellow]",
price: 17.59,
img: "https://a.cdnsbn.com/images/products/250/15399718806.jpg",
},
{
  id:"1004",
name: "Men's Ultra Soft Fleece Hoodie",
price: 21.59,
img: "https://a.cdnsbn.com/images/products/250/12804580601.jpg",
},
{
  id:"1005",
name: "Men's Ultra Soft Fleece Hoodie",
price: 15.99,
img: "https://b.cdnsbn.com/images/products/250/04807024702.jpg",
},

{
    id:"1005",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 15.99,
  img: "https://b.cdnsbn.com/images/products/250/25040937905.jpg",
  },

  {
    id:"1005",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 15.99,
  img: "https://b.cdnsbn.com/images/products/250/25402385944.jpg",
  },

  {
    id:"1005",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 15.99,
  img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
  },

];
let parent=document.getElementById("products");
function showProducts(){
data.forEach(function(product){
console.log(product.name)
console.log(product.price)

let div=document.createElement("div");

let img=document.createElement("img");

img.src=product.img;

let prod_price=document.createElement("p");
prod_price.textContent=product.price;

let prod_name=document.createElement("p");
prod_name.textContent=product.name;

  let addtocart_btn=document.createElement("button");
  addtocart_btn.innerText="Add to Bag";

  addtocart_btn.onclick=function(){
      
      addtoCart(product)
      // console.log(product)

  }

div.append(img,prod_name,prod_price,addtocart_btn);

parent.append(div)
});
}
showProducts();

if(localStorage.getItem("cart")===null){
localStorage.setItem("cart", JSON.stringify([]));
}
let sum=0;
var counter=0;
function addtoCart(p){
let kohl_cart=JSON.parse(localStorage.getItem("cart"));
kohl_cart.push(p);
localStorage.setItem("cart",JSON.stringify(kohl_cart)); 
// console.log(kohl_cart) 
alert("Product Added into Cart")

  kohl_cart.forEach(function(product){
      // console.log(typeof product.price)
      sum=sum+Number(product.price)
      counter++;
  });
  console.log((Math.floor(sum)))
  let par=document.getElementById("products");
  let sum1=document.createElement("p");
  sum1.textContent=sum;
  par.append(sum1)
}
