// để gọi là 1 callback function
// 1. nó phải là 1 hàm
// 2. nó phải được truyền vào 1 hàm khác thông qua đối số
// 3. nó phải được thực thi (gọi hàm)

// function callback(n1, n2){
//     console.log(n1, n2);
//     return n1 + n2;
// }

var callback = function(n1, n2){
    return n1 + n2
}
function useCallback(params){
    console.log(params(10, 20));
}
// var callback = 5;
useCallback(callback)



// useCallback(function(n1, n2){
//     console.log(n1, n2);
//     return n1 + n2;
// })