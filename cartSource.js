let cartCategory=document.querySelector('.cItems');
let checkoutCategory=document.querySelector('.cartDetails');

cartItemAll = JSON.parse(localStorage.getItem("cartItemsStore")) || [];

let cartItemObjects;
loadCartItemsStore();

loadCheckoutBody();

function loadCartItemsStore(){
    cartCategory.innerHTML = "";
    console.log(cartItemAll);
    cartItemObjects=cartItemAll.map(cartitemId => {
        for(let i=0;i<dataItems.length;i++){
            if(cartitemId==dataItems[i].Id){
                displayCartItems(dataItems[i]);
                return dataItems[i];
            }
        }
    })
    
    console.log(cartItemObjects);
}

function displayCartItems(cartobj){
    let cartHtml='';
    cartHtml+= `
        <div class="item">
            <img class="itemImage" src="${cartobj.Image}" alt="First_Item">
            <h5 class="itemName">${cartobj.Name}</h5>
            <h6 class="itemId">${cartobj.Id}</h6>
            <h5 class="itemPrice">${cartobj.Price}</h5>
            <button class="removeItemButton" onclick="removeButton('${cartobj.Id}')">REMOVE FROM CART</button>
        </div>
    `
    cartCategory.innerHTML += cartHtml;
}

function removeButton(cartobjId){
    cartItemAll=cartItemAll.filter(cartitemID => cartitemID!== cartobjId);
    localStorage.setItem("cartItemsStore", JSON.stringify(cartItemAll));
    loadCartItemsStore();
    displayCartitemcounter();
    loadCheckoutBody();
}

function loadCheckoutBody(){
    let checkoutHtml='';
    let totalitems=cartItemObjects.length;
    let pricetotal=0;
    let deliverycharge=50;
    let totalprice=0;

    cartItemObjects.forEach(checkoutObj => {
        pricetotal+=checkoutObj.Price;
        totalprice=pricetotal+deliverycharge;
    });

    checkoutHtml+= `
        <div class="checkoutBody">
            <h6 class="noOfItems">
                TOTAL ITEMS : ${totalitems}
            </h6>
            <h6 class="priceOfItems">
                PRICE : ${pricetotal}
            </h6>
           <h6 class="deliverychargeOfItems">
                DELIVERY CHARGE : ${deliverycharge}
            </h6>
            <h6 class="totalpriceOfItems">
                TOTAL PRICE : ${totalprice}
            </h6>
            <button class="placeOrder">
                PLACE ORDER
            </button>
        </div>
    `
    checkoutCategory.innerHTML = checkoutHtml;
}