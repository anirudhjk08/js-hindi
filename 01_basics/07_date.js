let newDate = new Date();
// console.log(newDate);
// console.log(newDate.toString())
// console.log(newDate.toDateString())
// console.log(newDate.toLocaleString())
let createdDate = new Date("1-15-2025 4:30 PM");
// console.log(createdDate.toLocaleString());
let data = Date.now();
console.log(data);
console.log(createdDate.getTime());
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
console.log(newDate.toLocaleString('default',{
    month: 'long',
    weekday: 'long',
}))
