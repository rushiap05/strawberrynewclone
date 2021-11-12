
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
  price: 217.59,
  img: "https://a.cdnsbn.com/images/products/250/20527276721.jpg",
  },
  {
    id:"1002",
  name: "Men's Tek Gear® Ultra Soft Fleece Hoodie",
  price: 117.59,
  img: "https://a.cdnsbn.com/images/products/250/26161080301.jpg",
  },
  {
    id:"1003",
  name: "Men's Tek Gear®  Hoodie[yellow]",
  price: 179.59,
  img: "https://a.cdnsbn.com/images/products/250/15399718806.jpg",
  },
  {
    id:"1004",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 201.59,
  img: "https://a.cdnsbn.com/images/products/250/12804580601.jpg",
  },
  {
    id:"1005",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 195.99,
  img: "https://b.cdnsbn.com/images/products/250/04807024702.jpg",
  },
  
  {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 315.99,
    img: "https://b.cdnsbn.com/images/products/250/25040937905.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 415.99,
    img: "https://b.cdnsbn.com/images/products/250/25402385944.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  // 11.11 BUDGET ZONE
    {
      id:"1005",
    name: "Aesop",
    price: 78.99,
    img: "https://a.cdnsbn.com/images/products/250/10255804401.jpg",
    },
  
    {
      id:"1005",
    name: "American Crew Men Power Cleanser Style Remover Daily Shampoo",
    price: 15.99,
    img: "https://a.cdnsbn.com/images/products/250/16606199944.jpg",
    },
  
    {
      id:"1005",
    name: "Christian Dior Eyeliner Waterproof 1.2g/0.04oz",
    price: 36.99,
    img: "https://a.cdnsbn.com/images/products/250/04593280102.jpg",
    },
  
    {
      id:"1005",
    name: "Clinique True Bronze Pressed Powder Bronzer - No. 02 Sunkissed 9.6g/0.33oz",
    price: 24.98,
    img: "https://a.cdnsbn.com/images/products/250/04774080402.jpg",
    },
  
    {
      id:"1005",
    name: "Lancaster Summer Splash Eau De Toilette Spray 100ml/3.4oz",
    price: 25.99,
    img: "https://b.cdnsbn.com/images/products/250/15942383706.jpg",
    },
  
    {
      id:"1005",
    name: "NARS Velvet Matte Lip Pencil - Train Bleu 2.4g/0.08oz",
    price: 10.99,
    img: "https://b.cdnsbn.com/images/products/250/18520102602.jpg",
    },
  
    {
      id:"1005",
    name: "Valentino Valentina Acqua Floreale Eau De Toilette Spray 50ml/1.7oz",
    price: 59.99,
    img: "https://b.cdnsbn.com/images/products/250/15716565606.jpg",
    },
  
    {
      id:"1005",
    name: "Yves Saint Laurent Rouge Pur Couture Vernis A Levres Pop Water Glossy Stain 6ml/0.2oz",
    price: 31.99,
    img: "https://b.cdnsbn.com/images/products/250/18763681702.jpg",
    },
  
    // DAILY SPECIALS
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
    img: "https://b.cdnsbn.com/images/products/250/23542481401.jpg",
    },
  
    {
      id:"1005",
    name: "Men's Ultra Soft Fleece Hoodie",
    price: 175.99,
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
  prod_name.style.height = "40px"
    let addtocart_btn=document.createElement("button");
    addtocart_btn.innerText="Add to Bag";
  
    addtocart_btn.onclick=function(){
        
        addtoCart(product)
        showalert(product)
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
  
    kohl_cart.forEach(function(product){
        sum=sum+Number(product.price)
        counter++;
    });
    console.log((Math.floor(sum)))
    let par=document.getElementById("products");
    let sum1=document.createElement("p");
    sum1.textContent=sum;
    par.append(sum1)
  }
  function showalert(prod){
          let par = JSON.parse(localStorage.getItem("cart"));
          let name = prod.name;
          let price = prod.price;
          let c = 0;
          par.forEach(function(par){
              if(name === par.name && price === par.price){
                  c++;
              }
          })
          if(c>=2){
              alert("Product already in cart")
          }
      }
  
      // top to bottom button script
  
  var mybutton = document.getElementById("myBtnn");
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // timer js
  
  var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();  
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


  //SIGN IN FUCNTIONALITY
  // LOGIN PART JS
let body = document.body;
let str = "";
function login() {
  let a = document.getElementById("login")
  a.style.top = "30px";
  a.style.left = "33%";
  body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

}

function cancel() {
  document.getElementById("login").style.top = "-800px";
  body.style.backgroundColor = "white";
}


function signin() {
  // e.preventDefault();
  var myForm = document.getElementById('myForm')

  var email = document.getElementById('email-input').value;
  var password = document.getElementById('password-input').value;

  let user = JSON.parse(localStorage.getItem('users'));

  // document.getElementById('append-name').textContent = null;

  user.forEach(function (user) {
    if (user.email === email && user.password === password) {
    //   document.getElementById('append-name').textContent = user.name;
    //   console.log(user.name);
      alert("logged in successfully")
    }
    else {
      alert("wrong email of password")
    }
  })
}



// LOGIN PART JS
