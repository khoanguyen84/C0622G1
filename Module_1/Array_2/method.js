let numbers = [4, 5, 6, 7, 8, 9, 10];
// bổ sung phần từ (nhiều) vào mảng thì có 3 vị trí
// 1. Bổ sung cuối: push()
// console.log(numbers);
// let size = numbers.push(10,434,65,76,4343,565,24,434,34);
// console.log(numbers);
// console.log(size);
// 2. Bổ sung đầu: unshift()
// console.log(numbers);
// numbers.unshift(2,4,5,6,7);
// console.log(numbers);
// 3. xóa cuối: pop()
// console.log(numbers);
// let result = numbers.pop();
// console.log(numbers);
// console.log(result);
// 4. xóa đầu: shift();
// console.log(numbers);
// let result = numbers.shift();
// console.log(numbers);
// console.log(result);
// 5. thêm ở giữa: splice()
// console.log(numbers);
// numbers.splice(2, 0, 60, 60, 60);
// numbers.splice(2, 2);
// numbers.splice(2, 3);
// numbers.splice(2, 0, 60, 70, 80);
// numbers.splice(2, 3, 60, 70, 80);
// console.log(numbers);
// 6. toString(): chuyển 1 mảng thành 1 chuỗi
// let string = "";
// for(let i = 0; i < numbers.length; i++){
//     string += `${i}, `;
// }
// console.log(string);
// console.log(numbers.toString())
// 7. join(separator): chuyển 1 mảng thành 1 chuỗi và phân cách với nhau bởi separator
// console.log(numbers.join());
// 8. reverse(): đảo ngược
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// 9. concat(): nối (trộn/ merge) 1 hoặc nhiều mảng (phần tử) thành 1 mảng mới
// concatination
// let numbers_2 = [10,11,12];
// let merge = numbers_2.concat(numbers, 23,54,34,345,454);
// console.log(numbers);
// console.log(numbers_2);
// console.log(merge);
// 10. sort(): sắp xếp
// sắp xếp theo alphabel
// let names = ["Khoa", "Khanh", "Lộc", "Hiếu"];
// console.log(names);
// names.sort().reverse();
// console.log(names);
// sắp xếp theo số
let scores = [1, 2, 11, 31, 21, 4];
console.log(scores);

// function compare(n1, n2){
//     return n1 - n2;
// }
// scores.sort(compare);


// scores.sort(function(n1, n2){
//     return n2 - n1;
// });

// console.log(scores);
let str = "Hôm nay tôi nay đi nay học";
// let str = "324,3453,454,45654,345,34345,435";
// let letters = Array.from(str);
let letters = str.split(" ");
// if(letters.includes("nay")){
//     let position = letters.findIndex(function(letter){
//         return letter == "nay";
//     })
//     // let position = letters.indexOf("nay");
//     letters[position] = "qua";
// }
// console.log(letters.join(" "));
let firstTime = true;
for(let i = 0; i < letters.length ;i++){
    // if(letters[i] == "nay"){
    //     if(firstTime){
    //         firstTime = false;
    //     }
    //     else{
    //         letters[i] = "qua";
    //     }
    // }
    if(letters[i] == "nay"){
        letters[i] = "qua";
    }
}
console.log(letters.join(" "));