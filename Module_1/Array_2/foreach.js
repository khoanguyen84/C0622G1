let numbers = [4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function(number, index){
//     console.log(`${index}-${number}`);
// })

// for(let index in numbers){
//     console.log(`${index}-${numbers[index]}`);
// }

for(let number of numbers){
    console.log(`${numbers.indexOf(number)}-${number}`);
}