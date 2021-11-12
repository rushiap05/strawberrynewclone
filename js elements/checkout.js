let cont112 = document.getElementById('cont112')
let par = JSON.parse(localStorage.getItem('cart'))
console.log(par)
if(par == null){
    cont112.innerHTML = null
} else {
    let cont112 = document.getElementById('cont112')
    cont112.innerHTML = null;
    cont112.style.display = "grid"
    cont112.style.gridTemplateColumns = "auto"
    par.forEach((p)=>{
        let div = document.createElement('div')
        div.style.display = "flex"
        div.style.marginTop = "10px"
        div.style.gap = "10px"
        let imgs = document.createElement('img')
        imgs.src = p.img
        imgs.style.width = "20%";
        imgs.style.height = "150px";
        let title = document.createElement('p')
        title.innerText = p.name
        title.style.width = "60%"
        let price = document.createElement('p')
        price.innerText = p.price
        price.style.textAlign = "end"
        div.style.flexBasis = "auto"
        let hr = document.createElement('hr')
        hr.style.marginTop = "-20px"
        hr.style.width = "94%"
        hr.style.margin = "auto"
        div.append(imgs, title, price)
        cont112.append(div, hr)
    })
}















let cont22 = document.getElementById('cont22')
var total = 0;
if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%";
    div.style.marginTop = "15px"
    div.style.gap = "1%"
    let h4 = document.createElement('h5')
    h4.innerText = "Item Total:";
    let h41 = document.createElement('h5')
    h41.innerHTML = null;
    h41.innerText = par.length;
    let h42 = document.createElement('h5')
    h42.innerText = "item(s)"
    var sum = 0;
    par.forEach((p)=>{
        sum = sum + p.price
    })
    let h43 = document.createElement('h6')
    h43.innerHTML = null;
    h43.innerText = "INR"
    let h44 = document.createElement('h5')
    h44.innerHTML = null
    h44.innerText = Number.parseFloat(sum).toFixed(2);
    total = total + sum
    console.log(total)
    h43.style.marginLeft = "32%"
    div.append(h4, h41, h42, h43, h44)
    cont22.append(div)
}
if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%"
    div.style.gap = "1%"
    div.style.color = "#F44336"
    let h4 = document.createElement('h6')
    h4.innerText = "Extra 10% Off (New Customer)";
    var sum = 0;
    par.forEach((p)=>{
        sum = sum + p.price
    })
    let h43 = document.createElement('h6')
    h43.innerHTML = null;
    h43.innerText = "-INR"
    let h44 = document.createElement('h6')
    h44.innerHTML = null
    h44.innerText = Number.parseFloat((sum*0.1)).toFixed(2);
    total = total - Number.parseFloat((sum*0.1)).toFixed(2)
    console.log(total)
    h43.style.marginLeft = "21%"
    div.append(h4, h43, h44)
    cont22.append(div)
}
if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%"
    div.style.gap = "1%"
    div.style.color = "#F44336"
    let h4 = document.createElement('h6')
    h4.innerText = "Extra 8% Off (11.11 Early Bird Sale)";
    var sum = 0;
    par.forEach((p)=>{
        sum = sum + p.price
    })
    let h43 = document.createElement('h6')
    h43.innerHTML = null;
    h43.innerText = "-INR"
    let h44 = document.createElement('h6')
    h44.innerHTML = null
    h44.innerText = Number.parseFloat((sum*0.08)).toFixed(2)
    total = total - Number.parseFloat((sum*0.08)).toFixed(2)
    console.log(total)
    h43.style.marginLeft = "15.5%"
    div.append(h4, h43, h44)
    cont22.append(div)
}
if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%"
    div.style.gap = "1%";
    let h4 = document.createElement('h6')
    h4.innerText = "Standard Shipping (Signature)";
    let h43 = document.createElement('h6')
    h43.innerHTML = null;
    h43.innerText = "INR"
    let h44 = document.createElement('h6')
    h44.innerHTML = null
    h44.innerText = "0.00"
    h43.style.marginLeft = "22.6%"
    div.append(h4, h43, h44)
    cont22.append(div)
}
if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%"
    div.style.gap = "1%";
    let h4 = document.createElement('h6')
    h4.innerText = "Freight Surcharge ?";
    var sum = Math.floor(Math.random() * 80)
    let h43 = document.createElement('h6')
    h43.innerHTML = null;
    h43.innerText = "INR"
    let h44 = document.createElement('h6')
    h44.innerHTML = null
    h44.innerText = sum;
    total = total + sum;
    console.log(total)
    h43.style.marginLeft = "41.5%"
    div.append(h4, h43, h44)
    cont22.append(div)
}









var c = 0;







var pay = 0;


if(par == null){
    cont22.innerHTML = null
} else {
    cont22.style.display = "grid"
    cont22.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%";
    div.style.marginTop = "15px"
    div.style.gap = "1%"
    let h4 = document.createElement('h4')
    h4.innerText = "Order Total:";
    let h41 = document.createElement('h4')
    h41.innerHTML = null;
    h41.innerText = par.length;
    let h42 = document.createElement('h4')
    h42.innerText = "item(s)";
    let h43 = document.createElement('h5')
    h43.innerHTML = null;
    h43.innerText = "INR"
    let h44 = document.createElement('h4')
    h44.innerHTML = null



   



    h44.innerText = Number.parseFloat(total).toFixed(2);
    console.log(total)

    
    let promo = document.getElementById('promo')
    let apply = document.getElementById('apply')
    apply.addEventListener('click', applypromo)



    
    pay = Number.parseFloat(total).toFixed(2);
    function applypromo(){
        let promo = document.getElementById('promo')
        if(promo.value == "Masai@123" && c == 0){
            total = total * 0.7;
            c++;
            h44.innerText = Number.parseFloat(total).toFixed(2);
            pay = Number.parseFloat(total).toFixed(2)
            console.log(total)
        } else if(c>=1){
            alert('Already Used Promo code')
        } else {
            alert("Invalid Promo Code")
        }
    }

    

    h43.style.marginLeft = "19%"
    div.append(h4, h41, h42, h43, h44)
    cont22.append(div)
}




if(par == null){
    cont112.innerHTML = null
} else {
    cont112.style.display = "grid"
    cont112.style.gridTemplateColumns = "auto"
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.marginLeft = "1.5%";
    div.style.marginTop = "15px"
    div.style.gap = "1%"
    let h4 = document.createElement('h4')
    h4.innerText = "Item Total:";
    let h41 = document.createElement('h4')
    h41.innerHTML = null;
    h41.innerText = par.length;
    let h42 = document.createElement('h4')
    h42.innerText = "item(s)"
    var sum = 0;
    par.forEach((p)=>{
        sum = sum + p.price
    })
    let h43 = document.createElement('h5')
    h43.innerHTML = null;
    h43.innerText = "INR"
    let h44 = document.createElement('h2')
    h44.innerHTML = null
    h44.innerText = Number.parseFloat(sum).toFixed(2);
    h43.style.marginLeft = "50%"
    div.append(h4, h41, h42, h43, h44)
    cont112.append(div)
}



let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let compname = document.getElementById('compname')
let conselect = document.getElementById('conselect')
let add = document.getElementById('add')
let city = document.getElementById('city')
let state = document.getElementById('state')
let zip = document.getElementById('zip')
let mobile = document.getElementById('mobile')


let makepay = document.getElementById('makepay')
makepay.addEventListener('click', startpay)
function startpay(){
    if(fname.value == "" && lname.value == "" && compname.value == "" && add.value == "" && 
    city.value == "" && state.value == "" && zip.value == "" && mobile.value == ""){
        alert('Incomplete shipping information')
    } else {
        if(localStorage.getItem("paymen") === null){
            localStorage.setItem("paymen", JSON.stringify([]));
        }
        let makepay = document.getElementById('makepay')
        makepay.addEventListener('click', makepayment)
        function makepayment(){
        //e.preventDefault();

        
        var amount = {
            price: pay
        }
        var arr = JSON.parse(localStorage.getItem("paymen"))
        arr.push(amount);
        localStorage.setItem("paymen", JSON.stringify(arr));

        window.location.href = "payment.html"
        }
    }
}

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
