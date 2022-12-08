// scope (phạm vi)
// + global (toàn cục)
// + local (cục bộ)
// + block code (khối mã)

// hoisting
// biến: khai báo biến bằng từ khóa var
// hàm: declaration function

// // global
// let name = "Khoa";

// function message(){
//     // local
//     let msg = "Hello";
// }

// {
//     {
//         {
//             // block code
//             let gender = true;
//         }
//     }
// }

// var i;
// for(i = 0; i < 10; i++){
//     console.log(i);
// }
// var name;
// console.log(name);
// {
//     console.log(name);
//     {
//         let name = "khoa";
//         // name = "khoa"
//         console.log(name);
//     }
// }

// {
//     var age = 18;
//     console.log(age); //18
//     {
//         {
//             // var age = 20;
//             let age = 20;
//             console.log(age); // 20
//             {
//                 {
//                     console.log(age);
//                 }
//             }
//         }
//         console.log(age); // 20
//     }
// }

var gender = true;
var gender;
{
    {
        var gender = false;
    }
}