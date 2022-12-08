// IIFE = Immediately Invoked Function Expression

// function sum(n1, n2){
//     console.log(n1 + n2);
// }

// sum(10, 20);

(function (n1, n2){
    console.log(n1 + n2);
})(10, 20)

!(function(age){
    console.log(age);
})(18)

!(function(){
    console.log("Hello");
})()


// (function(n1, n2){
//     console.log(n1 + n2);
// })(20, 30)