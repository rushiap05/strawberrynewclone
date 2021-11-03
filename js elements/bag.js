let selec = document.getElementById('select')
selec.addEventListener('click', selected)
function selected(){
    let dispCont = document.getElementById('dispCont')
    dispCont.innerHTML = null;
    dispCont.append(selec.value)
}

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
    let p1 = document.createElement('p')
    p1.innerText = "Goods shipped from Strawberrynet"
    p1.style.padding = "15px"
    cont112.append(p1)
    let hr = document.createElement('hr')
    hr.style.marginTop = "-20px"
    hr.style.width = "94%"
    hr.style.margin = "auto"
    cont112.append(hr)
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
        div.append(imgs, title, price)
        cont112.append(div)
    })
}

