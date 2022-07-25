// const numbers = [5, 10];
// numbers[2] = 7;
// // numbers = [];
// console.log(numbers);
// let students = new Array(5, 10);
// console.log(students);

let numbers = [5, 3, 3, 6, 6, 8, 5, 7, 8, 9];

// for..in
for(let index in numbers){
    console.log(numbers[index]);
}
console.log('------------------------');
// for .. of
for(let number of numbers){
    console.log(number);
}

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }
// let i = 0;
// do{
//     console.log(numbers[i]);
//     i++;
// }
// while(i< numbers.length)