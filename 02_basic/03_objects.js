
// Objects Litarels

mySym = Symbol('myKeys')

const jsUser = {
    name : "Raju",
    "Full Name": "Raju Ahmmed",
    [mySym] : "Hello",
    age: 28,
    email : "raju@gmail.com",
    phone : "01807942601",
    isLogin : false,
    logInDays : ["Sunday", "Monday"]

}



console.log(jsUser.email);
console.log(jsUser['Full Name']);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.name = "Md. Raju"
console.log(jsUser);
jsUser["Full Name"]= "Md Raju Ahmmed"
console.log(jsUser);

// Can not chnage anything if this use 
// Object.freeze(jsUser)
jsUser.email = "mdraju@gmail.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello Mr ${this["Full Name"]}. Welcome to Js tutorial. Your Age is ${this.age}.`);
    
}
console.log(jsUser.greeting());







