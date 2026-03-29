// const mydata =new Object{

// }
const myData = {}
myData.Id = 10
myData.fastName= "Raju Ahmmed"
myData.isLogin = true
myData.loginday = ["SaturDay", "Sunday", "Monday"]



// console.log(myData);

const jsUserMain ={
    id: 10,
    email: "raju@gmail.com",
    name:{
        username:{
            fastName : "Raju",
            LastName : "Ahmmed",
        },
    },
    phoneNumber : "018079429601"




}

console.log(jsUserMain.name.username.fastName);

const num1 ={
    1: "A",
    2: "B",
}
const num2 ={
    3: "A",
    4: "B",
}

const num3 = {num1, num2}
console.log(num3);

const num4 = Object.assign({}, num1, num2)
console.log(num4);

num5 = {...num1, ...num2, ...num3}
console.log(num5);



//from database send array of object

const myUser = [
    {
        id: 1,
        email: "Raju@gmail.com"
    },
    {
        id: 2,
        email: "Raju@gmail.com"
    },
    {
        id: 3,
        email: "Raju@gmail.com"
    },
    {
        id: 4,
        email: "Raju@gmail.com"
    },
]

console.log(myUser[0].email);
