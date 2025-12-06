// const tinderUser = new Object(); singleton object creation
// const tinderUser = {} //non singleton object creation
// console.log(tinderUser);

// const regularUser = {
//     name: "John",
//     fullName : {
//         userName: {
//             firstName: "John",
//             lastName: "Doe"
//         }
//     }
// }
// console.log(regularUser.fullName.userName.firstName)
// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'c', 4: 'd'}
// // const obj3 = {obj1,obj2}
// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3)
// console.log(Object.keys(obj3)) // Will print the keys of obj3
// console.log(Object.values(obj3)) // Will print the values of obj3   
// console.log(Object.entries(obj3)) // Will print the key-value pairs of obj3
// console.log(obj3.hasOwnProperty('a')) // Will check if obj3 has property 1

const course = {
    name: "js in hindi",
    price: "999",
    instructorName: "hitesh"

}

const{instructorName: instructor}=course;
console.log(instructor);