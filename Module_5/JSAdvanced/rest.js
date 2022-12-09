// parameter (tham số)
// arguments (đối số)

// khi định nghĩa 1 hàm
//  TH1: ko có tham số
//  TH2: có tham số, nhưng hữu hạn
//  TH2: có tham số, nhưng vô hạn

// let numbers = [1, 3, 4, 5]
// numbers.toString()
// Math.pow();
// console.log(5, 6, 7, 8, 9, 9, 6, 5, 4, 43, 4, 6, 7, 7, 8, 56, 5);

// function sum(n1, n2) {
//     return n1 + n2;
// }

// sum(10, 20)

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return `Total: ${total}`;;
// }

// console.log(sum( 3, 5, 6, 7, 5, 43, 3, 3, 4, 56, 7, 76, 4, 3, 4, 65, 6, 3))

// function sum(message, ...rest){
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i];
//     }
//     return `${message}: ${total}`;
// }

// console.log(sum("Total", 3, 5, 6, 7, 5, 43, 3, 3, 4, 56, 7, 76, 4, 3, 4, 65, 6, 3))

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

let numbers = [3, 5, 6, 7, 5, 43, 3, 3, 4, 56, 7, 76, 4, 3, 4, 65, 6, 3];

console.log(sum(...numbers))
// sum(34, 3, 2, 54, 45, 3, 34, 433, 43, 35, 4)