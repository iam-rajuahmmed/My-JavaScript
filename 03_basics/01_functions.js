let a= 50;
let b = 50;
function totalCal(){
    console.log(
        a + b
    );
    
}
totalCal();

function myData(num1, num2){
    return num1 + num2
    
}
let result = myData(100, 20)
console.log(result);

function userData(userName) {
    let user = `${userName} just login your Device. and mr ${userName} join just 5 minit.`;
    return user;
    
}
console.log(userData("Raju"));
console.log(userData("Kamal"));

// maltiple paramiters argumnet add in one parameters

function mycart(...cart1){
    return cart1
}
console.log(mycart(500, 1000, 500, 200, 700));
console.log(mycart(500, 1000, 500, 200, 700, 500, 1000, 500, 200, 700));

function mycart2(cart2, cart3, ...cartNum) {
    return cartNum
    
}
console.log(mycart2(100, 200, 300, 400, 500, 600, 700));
