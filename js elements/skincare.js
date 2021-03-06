async function getdata(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    //console.log(data)
    //console.log(data.inline_shopping_results);
    
    showdata(data.inline_shopping_results)
}

getdata()

function showdata(products){
    console.log(products)
    let produc = document.getElementById('products')
    produc.innerHTML = null;
    produc.style.display = "grid"
    produc.style.gridTemplateColumns = "auto auto auto auto"
    produc.style.gap = "1.5%"
    products.forEach((product) => {
        let div = document.createElement("div")
        div.style.width = "250px";
        let name = document.createElement("p")
        name.style.height = "100px"
        name.textContent = product.title;
        let price = document.createElement("p")
        price.textContent = product.price
        let img = document.createElement("img")
        img.src = product.thumbnail
        img.style.width = "215px"
        img.style.marginLeft = "15px"
        img.style.height  = "200px"
        let button = document.createElement("button")
        button.textContent = "Best Deals"
        button.style.border = "none"
        var col = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        button.style.backgroundColor = col
        button.style.color = "white"
        button.style.borderRadius = "5px"
        button.style.marginLeft = "70px"
        button.onclick = function(){
            gotonewarr(product)
            window.location.href = "newarr.html"
        }
        let button2 = document.createElement("button")
        button2.textContent = "Add to bag"
        button2.style.backgroundColor = "#00A69C"
        button2.style.color = "white"
        button2.style.marginLeft = "50px"
        button2.style.border = "none"
        button2.style.borderRadius = "5px"
        let text = document.createElement("p")
        text.textContent = "Rating: "+product.rating
        div.append(img,button, name, price, button2, text)
        produc.append(div) 
    });
}
function gotonewarr(product){
    console.log(product)
    let par = JSON.parse(localStorage.getItem('newarrdata'))
    par.push(product)
    localStorage.setItem('newarrdata', JSON.stringify(par))
}



let list = document.getElementById('list')
list.addEventListener('click', showlist)
async function showlist(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    console.log(data)
    console.log(data.inline_shopping_results);
    showdatainlist(data.inline_shopping_results)
}
function showdatainlist(products){
    console.log(products)
    let produc = document.getElementById('products')
    produc.innerHTML = null;
    produc.style.display = "grid"
    produc.style.gridTemplateColumns = "auto"
    produc.style.gap = "10px"
    products.forEach((product) => {
        let div = document.createElement("div")
        div.style.display = "flex"
        div.style.height = "170px"
        let name = document.createElement("h6")
        name.style.width = "530px"
        name.style.marginTop = "50px"
        name.textContent =product.source +"  " +product.title
        let div2 = document.createElement('div')
        div2.style.width = "200px"
        div2.style.marginLeft = "10px"
        let img = document.createElement('img')
        img.src = product.thumbnail;
        img.style.width = "130px"
        img.style.height = "120px"
        let button = document.createElement("button")
        button.textContent = "Best Deals"
        button.style.border = "none"
        button.style.borderRadius = "5px"
        button.style.marginLeft = "25px"
        button.onclick = function(){
            gotonewarr(product)
            window.location.href = "newarr.html"
        }
        var col = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        button.style.backgroundColor = col
        button.style.color = "white"
        div2.append(img, button)
        let div3 = document.createElement('div')
        // div3.style.backgroundColor = "red"

        // SOME CHANGES
        div3.classList.add("background-image-design");
        // SOME CHANGES

        // div3.style.width = "120px";
        // div3.style.height = "120px"
        let cost = document.createElement("h5")
        cost.classList.add('h5-price-tag')
        // cost.style.height = "100px";
        cost.textContent =  "Rs. " +product.price
        // cost.style.marginTop = "50px";
        // cost.style.color = "white"
        // cost.style.justifyContent = "center"
        // cost.style.textAlign = "center"
        // div3.style.marginTop = "20px"
        // cost.style.width = "100px"
        // cost.style.backgroundImage = "https://a.cdnsbn.com/images/common/oitem_bg.gif"
        div3.append(cost)
        let tobag = document.createElement('button')
        tobag.innerText = "Add to Bag"
        tobag.style.backgroundColor = "#00A69C"
        tobag.style.marginLeft = "30px"
        tobag.style.height = "30px"
        tobag.style.border = "none"
        tobag.style.marginTop = "60px"
        tobag.style.color = "white"
        tobag.style.borderRadius = "5px"
        div.append(name, div2,div3, tobag)
        produc.append(div)
    });
}   





let grid = document.getElementById('grid')
grid.addEventListener('click', getdata)






function getchange(){
    let select = document.getElementById('select').value
    console.log(select)
    if(select == "sortbypop"){
        showlistbypop()
    } else if(select == "lowpri"){
        lowtohi()
    } else if(select == "AtoZ"){
        atoz()
    } else if(select == "ZtoA"){
        ztoa()
    }
}
async function showlistbypop(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    console.log(data)
    console.log(data.inline_shopping_results);
    let arr = data.inline_shopping_results
    let sor = arr.sort((a, b)=>{
        return a.rating - b.rating
    })
    console.log(sor)
    showdatainlist(data.inline_shopping_results)
}
async function lowtohi(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    console.log(data)
    console.log(data.inline_shopping_results);
    let arr = data.inline_shopping_results
    let sor = arr.sort((a, b)=>{
        return a.extracted_price - b.extracted_price
    })
    console.log(sor)
    showdatainlist(data.inline_shopping_results)
}
async function atoz(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    console.log(data)
    console.log(data.inline_shopping_results);
    let arr = data.inline_shopping_results
    let sor = arr.sort((a, b)=>{
        return a.title - b.title
    })
    console.log(sor)
    showdatainlist(data.inline_shopping_results)
}
async function ztoa(){
    let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
    let data = await res.json()
    console.log(data)
    console.log(data.inline_shopping_results);
    let arr = data.inline_shopping_results
    let sor = arr.sort((a, b)=>{
        return b.extracted_price - a.extracted_price
    })
    console.log(sor)
    showdatainlist(data.inline_shopping_results)
}
//https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=e49a0f332c094848e532986cf73547b488cdfb3006985473e559d3d9c8194354
//https://serpapi.com/search.json?engine=google&q=latest+beauty+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=30&num=30&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0


