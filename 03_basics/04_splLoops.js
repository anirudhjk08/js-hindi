//for of
// ["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]
// for(const i of arr){
//     console.log(i);
// }
// const str = "Hello World";
// for(const g of str){
//     console.log(`Each character of the string is ${g}`);
// }
//Map
// const map = new Map();
// map.set('IN',"INDIA")
// map.set('USA',"United States of America")
// const obj = {
//     'hey':'hello',
//     'hi':'heyy'
// }
// const arr = [1,5,6,7]
// for(const key in arr ){
//     console.log(key)
// }
// const coding = ["java","python","c++"]
// coding.forEach((item)=> console.log(item))

const arr = [1,2,3,4]
const newArr = arr.map((num)=> num+1);
console.log(newArr);
const nArr =  arr.filter((num) => num>2);
console.log(nArr)
const sum = arr.reduce((acc,item) => acc+item, 0)
console.log(sum);