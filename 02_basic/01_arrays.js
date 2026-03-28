const myAry = [1, 2, 3, 4, 5]

console.log(myAry[0]);

myAry.push(6, 7, 8)

console.log(myAry);
myAry.pop()
console.log(myAry);
myAry.unshift(0, 1, 2)
console.log(myAry);
myAry.shift()
console.log(myAry);

console.log(myAry.includes(3));
console.log(myAry.includes(10));

console.log(myAry.indexOf(2));

const newArr = ["Hello", "Medam", "jii"]

const onenew = newArr.join();
console.log(typeof onenew);

// Slice and Splice

const myArr = [1, 2, 3, 4, 5]

console.log("A", myArr);

const myarr1 = myArr.slice(1, 3)
console.log("B", myarr1);

const myarr2 = myArr.splice(1, 3)
console.log(myArr);

console.log("C", myarr2);









