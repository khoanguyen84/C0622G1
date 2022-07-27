// thiết kế 1 hàm tính tổng 2 số nguyên 10 và 15, sau đó hiển thị ra console
// function sum(){
//     let total = 10 + 15;
//     console.log(total);
// }

// function sum1020(){
//     let total = 10 + 20;
//     console.log(total);
// }
// sum1020();

// thiết kế 1 hàm tính tổng 2 số nguyên, sau đó hiển thị ra console
// n1 và n2 (parameter: tham số)
// function sum(n1, n2){
//     let total = n1 + n2;
//     console.log(total);
// }

// function sumShowDocument(n1, n2){
//     let total = n1 + n2;
//     document.write(total);
// }
// function sumShowH1(n1, n2){
//     let total = n1 + n2;
//     document.getElementsByTagName("h1")[0].innerHTML = total;
// }
// // 10 và 15 (agrument: đối số)
// sum(10, 15);
// sumShowDocument(10, 20);
// sumShowH1(20, 20);

function sum(n1, n2){
    let total = n1 + n2;
    return total;
}

console.log(sum(10, 15));
document.write(sum(10, 20));
document.getElementsByTagName("h1")[0].innerHTML = sum(20,20);