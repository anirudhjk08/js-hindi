const mySim = Symbol("myS");
let JSuser = {
    name: "Anirudh",
    "full name": "Anirudh Sharma",
    [mySim]: "symbol value",
    age: 18,
    email: "anirudh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
};

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(typeof JSuser.isLoggedIn)
// console.log(JSuser[mySim])
// console.log(typeof mySim)

// Object.freeze(JSuser)
JSuser.email = "ani@"
console.log(JSuser.email) // Will still print "
JSuser.greeting = function(){
    console.log("hello")
}
console.log(JSuser.greeting) // Will print the function definition
console.log(JSuser.greeting()) // Will call the function and print "hello"
JSuser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}
console.log(JSuser.greetingTwo()) // Will print "Hello, Anirudh"