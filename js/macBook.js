//Calculating extra cost with the help of a function
function extraCost(input,item){
    const Cost = document.getElementById(item+'-cost');
   
   
    if(item == 'memory'){
        if(input == true){
           
            Cost.innerText = 0;
       
        }
        else{
            
            Cost.innerText = 160;
         
        }
        
    }
    if(item == 'storage'){
        if(input == 1){
            Cost.innerText = 0;
      
            
        }
        else if(input == 2){
            Cost.innerText = 100;
          
        
            
        }
        else{
            
            Cost.innerText = 180;
     
          
        }
        
    }
    if(item == 'delivery'){
        if(input == true){
         
            Cost.innerText = 0;
       
     
            
        }
        else{
           
            Cost.innerText = 20;
          
           
        }
     
    }
    // const total = memoryCost+storageCost+deliveryCost;
    totalPrice();

   
}


//calculating total price
function totalPrice(){
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice1 = document.getElementById('total-price');
    const totalPrice2 = document.getElementById('discount');
    
    const total = 1299 + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    totalPrice1.innerText = total;
    totalPrice2.innerText = total;
    

}

function promoCode(input){
    const totalPriceBeforeDiscount = document.getElementById('discount').innerText;
    if(input == 'stevekaku'){
        const totalPriceAfterDiscount = totalPriceBeforeDiscount - ((20/100) * totalPriceBeforeDiscount);
        document.getElementById('discount').innerText = totalPriceAfterDiscount;
        
    }
}


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

document.getElementById('apply-btn').addEventListener('click',function (){
    const inputCode = document.getElementById('promo-code');
    const code = inputCode.value;
    promoCode(code);
    console.log(code);
    
})






