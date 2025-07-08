//Primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non-primitive: Reference types
// Object, Array, Function

//stack(primitive values) vs heap(non-primitive values)

let str = "Hello"; // String
let ani = str;
ani = "World"; // ani is now a new string, str remains "Hello"
console.log(str); // "Hello"
console.log(ani); // "World"

let userOne = {
    name: "Alice",
    age: 30
}
let userTwo = userOne;
userTwo.age = 31;

console.log(userOne.age); // 31
console.log(userTwo.age); // 31