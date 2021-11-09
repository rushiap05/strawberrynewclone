// let data =[
//     {
//         name:"Hermes",
//         description:"H24 Eau De Toilette Spray",
//         quantity:"50ml/1.6oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26203640105.jpg",
//         price:"6,196",
//     },
//     {
//         name:"Hermes",
//         description:"H24 Eau De Toilette Spray",
//         quantity:"100ml/1.6oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26203640105.jpg",
//         price:"8,446",
//     },
//     {
//         name:"Gucci",
//         description:"Flora by Gucci Gorgeous Gardenia Eau De Parfum Spray",
//         quantity:"100ml/3.3oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26842633806.jpg",
//         price:"10,455",
//     },
//     {
//         name:"Serge Lutens",
//         description:"La Domptenuse Encagee Eau De Parfum Spray",
//         quantity:"50ml/1.6oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26891089106.jpg",
//         price:"8,442",
//     },
//     {
//         name:"Calvin Klein",
//         description:"CK One Summer Eau De Toilette Spray(2021 Edition)",
//         quantity:"100ml/3.3oz",
//         img:"https://b.cdnsbn.com/images/products/msn/26446484006.jpg",
//         price:"3,718",
//     },
//     {
//         name:"SK 11",
//         description:"Skin Powder Eye Cream",
//         quantity:"15g/0.5oz",
//         img:"https://b.cdnsbn.com/images/products/msn/26224681101.jpg",
//         price:"9,797",
//     },
//     {
//         name:"Valmont",
//         description:"V-line Lifting Cream",
//         quantity:"50ml/1.7oz",
//         img:"https://d.cdnsbn.com/images/products/msn/23307982101.jpg",
//         price:"22,797",
//     },
//     {
//         name:"Prada",
//         description:"Luna Rossa Ocean Eau De Toilette Spray",
//         quantity:"100ml/3.3oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26769024805.jpg",
//         price:"7,597",
//     },
//     {
//         name:"3W Clinic",
//         description:"Collagen Extra Moisturizing Cream",
//         quantity:"60ml/2oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26144543501.jpg",
//         price:"1,433",
//     },
//     {
//         name:"3W Clinic",
//         description:"Collagen Extra Moisturizing Cream",
//         quantity:"150ml/5oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26144343501.jpg",
//         price:"1,355",
//     },
//     {
//         name:"111Skin",
//         description:"Sub-Zero De-Puffing Eye Mask",
//         quantity:"8x6ml/0.2oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26666093301.jpg",
//         price:"6,893",
//     },
//     {
//         name:"111Skin",
//         description:"The Firming Concentrate",
//         quantity:"7x2ml/0.07oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26783093301.jpg",
//         price:"12,934",
//     },
//     {
//         name:"111Skin",
//         description:"Vitaminc Brightening Booster",
//         quantity:"20ml/0.68oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26665893301.jpg",
//         price:"10,223",
//     },
//     {
//         name:"111Skin",
//         description:"Celestial Black Diamond Eye Mask",
//         quantity:"8X6ml/0.2oz",
//         img:"https://a.cdnsbn.com/images/products/msn/26665493301.jpg",
//         price:"7,590",
//     },

// ]
let parent = document.getElementById("products")
    let body = document.getElementById("body")
    async function getdata(){
        let res =  await fetch(`https://serpapi.com/search.json?engine=google&q=latest+beauty+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=30&num=30&api_key=953d7eca211a134cd79c6e4fb3ae05b46cc51e56d88b59900029f16ce695f7d0`)
        let data = await res.json()
        console.log(data)
        console.log(data.inline_shopping_results);
        showdata(data.inline_shopping_results)
    }
    getdata()
    
    function showdata(products){
        products.forEach((product) => {
            let div = document.createElement("div")
            let name = document.createElement("h5")
            name.textContent = product.title
            let div2 = document.createElement("div")
            let price = document.createElement("h4")
            price.textContent = product.price
            let img = document.createElement("img")
            img.src = product.thumbnail
            let button = document.createElement("button")
            button.textContent = "New Arrivals"
            button.onclick = function(){
                gotonewarr(product)
                window.location.href = "newarr.html"
            }
            let button2 = document.createElement("button")
            button2.textContent = "Add to bag"
            let text = document.createElement("p")
            text.textContent = "click>>>"

            //button.addEventListener("click",showcart)
            function showcart(){
                body.innerHTML = null
                let box = document.createElement("div")
                let img = document.createElement("img")
                img.src = product.thumbnail
                let box2 = document.createElement("div")
                let title = document.createElement("h3")
                title.textContent = product.title
                let cost = document.createElement("h1")
                cost.textContent = product.price
                box.style.display = "flex"
                
                title.style.width = "400px"
                box2.style.marginLeft = "170px"
                title.style.overflow = "hidden"
                let back = document.createElement("button")
                back.textContent = "Back To New Arrivals"
                button2.style.backgroundColor = "#1565C0"
                back.addEventListener("click",show)
                function show(){
                    box.innerHTML = null
                    body.append(parent)
                }
                box2.append(title,cost,button2)
                box.append(img,box2)
                body.append(back,box)

            }


            div2.append(img,text,button)
            div.append( name, div2,price,button2)
            parent.append(div) 
        });
    }
    if(localStorage.getItem('newarrdata') == null){
        localStorage.setItem("newarrdata", JSON.stringify([]));
    }
    function gotonewarr(product){
        console.log(product)
        let par = JSON.parse(localStorage.getItem('newarrdata'))
        par.push(product)
        localStorage.setItem('newarrdata', JSON.stringify(par))
    }