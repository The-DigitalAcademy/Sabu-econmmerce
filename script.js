var mainsfullState = [
    {
        list: 1,
        name: 'REDBAT MEN KHAKI T-SHIRT',
        price: 149.00,
        image:
            'https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/06/ProductImages/59611947_04.jpg',
    },
    {
        list: 2,
        name: 'CONVERSE JR  70 LIME SNEAKER',
        price: 549.00,
        image:
            'https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/06/ProductImages/59328896_04.jpg',
    },
    {
        list: 3,
        name: 'PUMA X COTTONFEST RED CAP',
        price: 399.00,
        image:
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/024368/04/fnd/ZAF/w/1000/h/1000/fmt/png',
    },
    {
        list: 4,
        name: 'ABP PRO4-70 RANGER MULTICOLOUR HEADPHONES',
        price: 379.00,
        image:
            'https://www.everyshop.co.za/media/catalog/product/cache/ea1c1d49663f18175f3f3520f39859aa/x/p/xp_ranger_1_ecommerce_51d9.png',
    },
    {
        list: 5,
        name: 'NIKE SB DUNK LOW: LOW COAST',
        price: 1700.00,
        image:
            'https://cdn.shopify.com/s/files/1/0601/6604/5888/products/C6A52592-DCA1-4362-B7E7-7B1EFDB7F1FF_480x_d48d5b97-fc7b-4d20-9c71-eff6e65fd0ef_1024x1024@2x.png?v=1631711977',
    },
    {
        list: 6,
        name: 'REDBAT MENS CHARCOAL SWEAT TOP',
        price: 449.00,
        image:
            'https://image.tfgmedia.co.za/image/1/process/750x750?source=https://cdn.tfgmedia.co.za/06/ProductImages/59615964.jpg',
    },
    {
        list: 7,
        name: 'REDBAT MENS MULTICOLOUR BOMBER JACKET',
        price: 999.00,
        image:
            'https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/06/ProductImages/59512479.jpg',
    },
    {
        list: 8,
        name: 'REDBAT MENS MULTICOLOUR BOMBER JACKET',
        price: 249.00,
        image:
            'https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/06/ProductImages/59552820.jpg',
    }
]

// SAVING FOR THE SPORTDATATABLES
var sportCart = []


// LINK JS TO HTML ELEMENT
const mainsfulls = document.getElementById('mainsfulls')
const mainpDisplay = document.getElementById('mainpDisplay');
const totalCash = document.getElementById('totalCash');



// ADD FUNCTION DISPLAY INTO PRODUCTS FROM HTML
function DatatableMainsfulls() {
    mainsfulls.innerHTML = ""

    for (let i = 0; i < mainsfullState.length; i++) {
        mainsfulls.innerHTML += `
        
        <div class="main">
        <div class="main-image">
            <img src=${mainsfullState[i].image} 
            alt=""
            />
        </div>
        <div class="main_name">${mainsfullState[i].name}</div>
        <div class="main_price" id="price">R <span>${mainsfullState[i].price}.00</span></div>
            <button onclick="sportOnline(${i})">ADD TO BAG</button>
        </div>
    
    
    `
        

    }

 mainsCartOnline.length = sportCart.length 

}

// ADD FUNCTION FROM ELEMENT USED TO CART
function sportOnline(i) {
    sportCart.push(mainsfullState[i])
    document.getElementById('mainsCartOnline').innerHTML = sportCart.length;

    mainp()

    CalcuTotal()

    saveToStorage()

    readLocalStorage()

    DatatableMainsfulls()   
}


// ADD FUNCTION FOR DISPLAY INTO FROM COUNT AND CART
function mainp() {
    mainpDisplay.innerHTML = ""

    for (let i = 0; i < sportCart.length; i++) {
        mainpDisplay.innerHTML += `

        <div class="main">
        <div class="main-image">
            <img src=${sportCart[i].image} 
            alt=""
            />
        </div>
        <div class="main_name">${sportCart[i].name}</div>
        <div class="main_price" id="price">R <span>${sportCart[i].price}.00</span></div>
            <button onclick="removeClear(${i})">Remove To bag</button>
        </div>
        `  
        
    }

}

// ADD FUNCTION FOR REMOVE INTO ARRY
function removeClear(i) {
    sportCart.splice(i, 1)
    document.getElementById('mainsCartOnline').innerHTML = sportCart.length;

    mainp()

    CalcuTotal()

    saveToStorage()

    readLocalStorage()

    DatatableMainsfulls()
    
}
mainp()


DatatableMainsfulls()


// ADD FUNCTION FOR CALCULATOR AND LOOP, TOTAL
function CalcuTotal() {
    let total = 0;
    
    for (let i = 0; i < sportCart.length; i++) {
         total += sportCart[i].price
        
    }

    totalCash.innerHTML = "R" +total

    mainp()

    DatatableMainsfulls()   
}

// // ADD FUNCTION SAVA DATA INTO LOCAL STORAGE

function saveToStorage() {

    //JSON.STRINGIFY FOR CHANGE ARRY TO STRING
    let data = JSON.stringifyO(sportCart)
    localStorage.setItem('sportCart',data)
    
}




// function saveToStorage() {

//     // JSON.stringify FOR CHANGE ARRAY TO STRING
//     let data = JSON.stringify(sportCart)
//     localStorage.setItem('sportCart',data)
    
// }

// // ADD FUNCTION READ LOCAL STORAGE IT USERS
// function readLocalStorage() {
//     let data = JSON.parse(localStorage.getItem('sportCart'))
//     sportCart = data
// }