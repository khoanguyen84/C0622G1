// truthy và falsy
// convert các kiểu dữ liệu về boolean
// những trường hợp sau sẽ được convert về giá false
// 0
// null
// empty
// {}
// underfined

let products = [];
// if(products.length == 0){
//     console.log("Hết hàng");
// }
// else{
//     console.log(products.toString());
// }

console.log((products.length && products.toString()) || "Hết hàng");


let fullname = "Khoa Nguyễn"
// if(fullname != null && fullname != ""){
//     console.log(fullname);
// }
// else{
//     console.log("No name");
// }

console.log(fullname || "No name");