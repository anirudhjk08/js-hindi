//Immediately invoked functions expressions
(function chai(){
    console.log(`DB connected`)
})();
((name)=> {
    console.log(`DB connected two ${name}`)
})("Anirudh");