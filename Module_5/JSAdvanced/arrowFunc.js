// declaration function
sum(10, 20);
function sum(n1, n2) {
    console.log(n1 + n2);
}
// expression function
// var times = function (n1, n2) {
//     console.log(n1 * n2);
// }
// var times = (n1, n2) => console.log(n1 * n2);
// times(5, 7);

// const message = function(msg){
//     console.log(msg);
// }

// const message = (msg) => console.log(msg);

// message("hello")

// const slogen = function(){
//     console.log("Still breath still alive");
// }
const slogen = () => console.log("Still breath still alive");

slogen()

// callback function/ anonymous function
let numbers = [4, 65, 7, 78, 34, 3];
// const process = function(total, value) {
//     return total + value;
// }
// let result = numbers.reduce(process)

// let result = numbers.reduce(function (total, value) {
//     return total + value;
// })
let result = numbers.reduce((total, value) => total + value)

// console.log(process(1, 2));
console.log(result);

// class
// function Student() {
//     // method(s)
//     this.greeting() = function () {
//         console.log("hello everyone!");
//     }
// }

class Student{
    greeting(){
        console.log("hello everyone!");
    }
}

let tung = new Student();
tung.greeting()