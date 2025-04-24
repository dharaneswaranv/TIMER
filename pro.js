const order={
    items:['books','pen'],
    total :50
}
const placeorder=(order)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(order){
                resolve(order);
            }
        },2000);
    });
};

const processpayment=(order)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(order.total<=100){
                resolve(order);
            }else{
                reject("payment failed");
            }
        },1500);
    });
};
const sendconfirmation =(order)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(order){
                resolve(order); 
            }
        },1000);
    });
};

placeorder(order)
    .then((order) => {
        console.log("Order placed successfully");
        return processpayment(order);
    })
    .then((payment) => {
        console.log("Payment processed successfully");
        return sendconfirmation(payment);
    })
    .then((confirmation) => {
        console.log("Confirmation sent successfully");
    })
    .catch((error) => {
        console.error("Error:", error);
    });