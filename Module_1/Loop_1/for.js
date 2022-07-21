// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// for(var i = 1; i <= 7; i++){
//     console.log(i);
// }

// let i = 1;
// for(; ;){
//     if(i > 7){
//         break;
//     }        
//     console.log(i);
//     i++;
// }

// for(var i = 7; i >= 1; i--){
//     console.log(i);
// }

// console.log('i outsite for', i);

// for(let i = 1; i <= 20; i++){
//     if( i % 2 == 0){
//         console.log(i);
//     }
// }
// let total = 0;
// for(var i = 1; i <= 20; i++){
//     if(total > 20){
//         break;
//     }
//     total += i;
// }
// for(var i = 1, total = 0; i <= 20 && total <= 20; i++){
//     total += i;
// }
// console.log("total: ", total);
// console.log("i: ", i);

for(let i = 1; i <= 20; i++){
    if( i % 2 != 0){
        continue;
    }
    console.log(i);
}