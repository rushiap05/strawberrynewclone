let giftsets = document.getElementById('giftsets')
giftsets.addEventListener('mouseleave', changeori)
let text = document.getElementById('text')
let text2 =  document.getElementById('text2')
let text3 =  document.getElementById('text3')
text.addEventListener('mouseenter', changeblue)
text2.addEventListener('mouseenter', changeblue2)
text3.addEventListener('mouseenter', changeblue3)
function changeblue(){
    text.style.color = "#D1C4E9"
}
function changeblue2(){
    text2.style.color = "#D1C4E9"
}
function changeblue3(){
    text3.style.color = "#D1C4E9"
}
function changeori(){
    text.style.color = "#7E57C2"
    text2.style.color = "#7E57C2"
    text3.style.color = "#7E57C2"
}

//da32f09f6311aca662588aeda28758dfb5b2fec6feacf4d9c05d11876981ad1a
//search?engine=google_product
async function fetchd(){
    let res = await fetch(`https://serpapi.com/search.json?q=beautyproduct&hl=en&gl=us&api_key=da32f09f6311aca662588aeda28758dfb5b2fec6feacf4d9c05d11876981ad1a`)
    let data = await res.json()
    showprod(data.shopping_results)
    console.log(data)
}
fetchd()

let cont1 = document.getElementById('cont1')
cont1.style.display = "grid"
cont1.style.gridTemplateColumns = "auto auto auto auto"
cont1.style.gap = "2%"
var prodhead = ["11.11 Days suprise", "Best Deals", "Best Sellers", "Early Bird 11.11 Sale", "Natural Beauty", "New Arrivals",
                "11.11 Super Serums", "11.11 Beauty Guide", "11.11 One-Stop Budget Zone", "Holiday Giftsets Edition", "Holiday Hottest Offers",
                "Holiday Edition Bath", "Special Purchase", "This Month's Top 40", "Point Reward Program", "Fragrance Specials", 
                "New Customer Offer", "Download Our App","11.11 Super Serums", "11.11 Beauty Guide", "11.11 One-Stop Budget Zone",
                "This Month's Top 40", "Point Reward Program", "Fragrance Specials"]
var c = 0;
function showprod(d){
    cont1.innerHTML = null;
    d.forEach((prod)=>{
        console.log(prod)
        let div = document.createElement('div')
        div.style.borderRadius = "5px"
        var col = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        div.style.backgroundColor = col
        div.style.height = "370px"
        let head = document.createElement('p')
        head.textContent = prodhead[c]
        head.style.textAlign = "center"
        head.style.fontSize = "large"
        head.style.color = "white"
        let img = document.createElement('img')
        img.src = prod.thumbnail
        img.style.backgroundColor = "white"
        img.style.width = "97%"
        img.style.height = "200px"
        img.style.marginLeft = "1.5%"
        let div1 = document.createElement('div')
        div1.style.backgroundColor = "white"
        div1.style.height = "120px"
        div1.style.width ="97%"
        div1.style.marginLeft = "1.5%"
        let tit = document.createElement('p')
        tit.innerText = prod.title
        tit.style.width = "100%"
        tit.style.height = "80px"
        tit.style.textAlign = "center"
        let pri = document.createElement('p')
        pri.innerText = prod.price
        div1.append(tit, pri)
        div.append(head, img, div1)
        c++;
        cont1.append(div)
    })
}