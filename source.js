// displaying trending and signature items
let trendingCategory=document.querySelector('.trendingItems');
let signatureCategory=document.querySelector('.signatureItems');
displayItems();
function displayItems(){
    if(!trendingCategory){
        return;
    }
    if(!signatureCategory){
        return;
    }
    const titems=[
        {
            trendId:'001',
            trendImage:'images/trendingOne.jpeg',
            trendName:'VINTAGE CAKE',
            trendPrice:100
        },
        {
            trendId:'002',
            trendImage:'images/trendingTwo.jpg',
            trendName:'SECRET MESSAGE CAKE',
            trendPrice:200
        },
        {
            trendId:'003',
            trendImage:'images/trendingThree.jpg',
            trendName:'BUTTERFLY CAKE',
            trendPrice:300
        },
        {
            trendId:'004',
            trendImage:'images/trendingFour.jpg',
            trendName:'WAVY CAKE',
            trendPrice:400
        },
        {
            trendId:'005',
            trendImage:'images/trendingFive.jpg',
            trendName:'ANTIGRAVITY CAKE',
            trendPrice:500
        },
        {
            trendId:'006',
            trendImage:'images/trendingSix.jpg',
            trendName:'WAFER-SHEET CAKE',
            trendPrice:600
        }
    ];
    const sitems=[
        {
            sigId:'007',
            sigImage:'images/trendingOne.jpeg',
            sigName:'VINTAGE CAKE',
            sigPrice:700
        },
        {
            sigId:'008',
            sigImage:'images/trendingTwo.jpg',
            sigName:'SECRET MESSAGE CAKE',
            sigPrice:800
        },
        {
            sigId:'009',
            sigImage:'images/trendingThree.jpg',
            sigName:'BUTTERFLY CAKE',
            sigPrice:900
        },
        {
            sigId:'011',
            sigImage:'images/trendingFive.jpg',
            sigName:'ANTIGRAVITY CAKE',
            sigPrice:500
        },
        {
            sigId:'012',
            sigImage:'images/trendingSix.jpg',
            sigName:'WAFER-SHEET CAKE',
            sigPrice:1100
        }
    ];
    let trendHtml='';
    titems.forEach(
        trendContainer => {
            trendHtml+= `
                <div class="item">
                    <img class="itemImage" src="${trendContainer.trendImage}" alt="First_Item">
                    <h5 class="itemName">${trendContainer.trendName}</h5>
                    <h6 class="itemId">${trendContainer.trendId}</h6>
                    <h5 class="itemPrice">${trendContainer.trendPrice}</h5>
                    <button class="itemButton">ADD TO CART</button>
                </div>
            `
        }
    );
    trendingCategory.innerHTML=trendHtml;
    let sigHtml='';
    sitems.forEach(
        signatureContainer => {
            sigHtml+= `
                <div class="item">
                    <img class="itemImage" src="${signatureContainer.sigImage}" alt="First_Item">
                    <h5 class="itemName">${signatureContainer.sigName}</h5>
                    <h6 class="itemId">${signatureContainer.sigId}</h6>
                    <h5 class="itemPrice">${signatureContainer.sigPrice}</h5>
                    <button class="itemButton">ADD TO CART</button>
                </div>
            `
        }
    );
    signatureCategory.innerHTML=sigHtml;
}

// add to cart button fuctionalites
let cartItemAll=JSON.parse(localStorage.getItem("cartItemsStore")) || [];
document.querySelectorAll(".itemButton").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.parentElement.querySelector(".itemId").textContent;
        cartItemAll.push(id);
        localStorage.setItem("cartItemsStore", JSON.stringify(cartItemAll));
        displayCartitemcounter();
    });
});

// adding functionalities in cart item counter
displayCartitemcounter();
function displayCartitemcounter(){
    let cartCounter=document.querySelector('.cartItemCounter');
    if(cartItemAll.length > 0){
        cartCounter.innerText=cartItemAll.length;
        cartCounter.style.visibility = "visible";
    }
    else{
        cartCounter.style.visibility = "hidden";
    }
}