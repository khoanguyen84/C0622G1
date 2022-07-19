let fullname = "Châu";
let gender = false;
let married = true;

// gender == true ? console.log(`Hello Mr. ${fullname}`) : 
//                                         married == true ? console.log(`Hello Mrs. ${fullname}`) : console.log(`Hello Ms. ${fullname}`);

console.log(`Hello ${gender == true ? 'Mr' : married == true ? 'Mrs' : 'Ms'}. ${fullname}`);
// Hello Mr. Khoa
// Hello Ms. Thư
// Hello Mrs. Châu

// if(gender == true){
//     console.log(`Hello Mr. ${fullname}`);
// }
// else{
//     if(married == true){
//         console.log(`Hello Mrs. ${fullname}`);
//     }
//     else{
//         console.log(`Hello Ms. ${fullname}`);
//     }
// }