//Calculating extra cost with the help of a function
function extraCost(input,item){
    const cost = document.getElementById(item+'-cost');
    //using if-else conditions the costs are set in the innerText
    if(item == 'memory'){

        if(input == true){
            cost.innerText = 0;
        }
        else{
            cost.innerText = 180;
        }
        
    }

    if(item == 'storage'){
        if(input == 1){
            cost.innerText = 0;  
        }
        else if(input == 2){
            cost.innerText = 100;  
        }
        else{
            cost.innerText = 180;
        }
        
    }

    if(item == 'delivery'){

        if(input == true){
            cost.innerText = 0;
        }
        else{
            cost.innerText = 20;
        }
     
    }

    totalPrice();

}


//calculating total price with the help of a function
function totalPrice(){
    
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const bestPrice = document.getElementById('best-price').innerText;
    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('total-after-promo');
    
    const sum = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    totalPrice.innerText = sum;
    total.innerText = sum;

}

//calculating total after applying the promo code with the help of a function
function promoCode(input){

    const totalPriceBeforeDiscount = document.getElementById('total-after-promo').innerText;

    if(input == 'stevekaku'){

        const totalPriceAfterDiscount = totalPriceBeforeDiscount - ((20/100) * totalPriceBeforeDiscount);
        document.getElementById('total-after-promo').innerText = totalPriceAfterDiscount;
        
    }
}

//sending the parameter to a function when a button is clicked
// Extra Memory Cost
document.getElementById('memory-8gb-btn').addEventListener('click', function (){
   extraCost(true,'memory');
})
document.getElementById('memory-16gb-btn').addEventListener('click', function (){
  extraCost(false,'memory');
})


// Extra Storage Cost
document.getElementById('storage-256gb-btn').addEventListener('click', function (){
    extraCost(1,'storage');

})
document.getElementById('storage-512gb-btn').addEventListener('click', function (){
    extraCost(2,'storage'); 
})
document.getElementById('storage-1tb-btn').addEventListener('click', function (){
    extraCost(3,'storage');  
})


// Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function (){
    extraCost(true,'delivery');
})
document.getElementById('delivery-charge-20').addEventListener('click', function (){
    extraCost(false,'delivery');    
})


//getting the promo code from the input field and sending it to a function
document.getElementById('apply-btn').addEventListener('click',function (){
    const inputCode = document.getElementById('promo-code');
    const code = inputCode.value;
    promoCode(code);
    inputCode.value ='';
    
})






