const myArr = [1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);
const myArr3 = ["shakti","om"]

//array methods
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(10);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

console.log("A ",myArr);

let myN1 = myArr.slice(1,3)
console.log("B ",myN1);
//splice manipulates the original array
let myN2 = myArr.splice(1,3)
console.log("C ",myN2);
console.log("D ",myArr);