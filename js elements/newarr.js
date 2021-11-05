let par = JSON.parse(localStorage.getItem('newarrdata'))
console.log(par[par.length-1])
var item = par[par.length-1]
function showprod(item){
    let headdiv = document.getElementById('headdiv')
    headdiv.innerHTML = null
    let p1 = document.createElement('p')
    p1.innerText = "Hermes"
    let p2 = document.createElement('p')
    p2.innerText = ">"
    let p3 = document.createElement('p')
    p3.innerText = "New Arrival"
    let p4 = document.createElement('p')
    p4.innerText = ">"
    let p5 = document.createElement('p')
    p5.innerText = item.title
    headdiv.append(p1, p2, p3, p4, p5)
    let cont = document.getElementById('cont')
    cont.innerHTML = null
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = item.thumbnail
    div1.append(img)
    let div2 = document.createElement('div')
}