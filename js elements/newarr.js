let par = JSON.parse(localStorage.getItem('newarrdata'))
console.log(par[par.length-1])
var item = par[par.length-1]
function showprod(item){
    let headdiv = document.getElementById('headdiv')
    headdiv.style.marginTop = "10px"
    headdiv.style.gap = "10px"
    headdiv.innerHTML = null
    let p1 = document.createElement('p')
    p1.innerText = "Hermes"
    let p2 = document.createElement('p')
    p2.innerText = ">"
    let p3 = document.createElement('p')
    p3.innerText = "Beauty Products / Skin care Products / Hair care products"
    let p4 = document.createElement('p')
    p4.innerText = ">"
    let p5 = document.createElement('p')
    p5.innerText = item.title
    headdiv.append(p1, p2, p3, p4, p5)
    let cont = document.getElementById('cont')
    cont.style.marginTop = "20px"
    cont.innerHTML = null
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = item.thumbnail
    img.style.width = "300px"
    img.style.height = "400px"
    div1.append(img)
    div1.style.width = "300px"
    div1.style.height = "400px"
    let div2 = document.createElement('div')
    let tit = document.createElement('h4')
    tit.innerText = item.title
    let price = document.createElement('p')
    price.innerText = item.price
    let sourc = document.createElement('p')
    sourc.innerText = item.source
    let rat = document.createElement('p')
    rat.innerText = item.ratine
    let review = document.createElement('p')
    review.innerText = item.reviews
    div2.append(tit, price, sourc, rat, review)
    cont.style.display = "flex"
    cont.style.gap = "40px"
    cont.append(div1, div2)
}
showprod(item)