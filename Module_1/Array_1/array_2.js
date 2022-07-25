// let floors = [
//     [8, 9, 6],
//     [2, 4, 6, 8, 9],
//     [4, 4, [10, 11, 12, 13], 7]
// ];
// let array = floors[1];
// console.log(array[3])

// console.log(floors[1][3])
// floors[2][2][2] = 20;
// console.log(floors)


let floors = [
    [8, 9, 6],
    [2, 4, 6, 8, 9],
    [4, 4, [10, 11, 12, 13], 7]
];


for(let i = 0; i < floors.length; i++){
    for(let j = 0; j < floors[i].length; j++){
        if(floors[i][j].length >= 0){
            for(let k = 0; k < floors[i][j].length; k++){
                console.log(floors[i][j][k]);
            }
        }
        else{
            console.log(floors[i][j]);
        }
        
    }
}


// thiết kế chương trình để thực hiện nhiệm vụ sau:
// 1. Ô để nhập vào kích cỡ
// 2. Ô để nhập giá trị min
// 3. Ô để nhập giá trị max
// 4. Ô để hiển thị mảng
// 5. Ô để hiển thị tổng các giá trị có trong mảng
// 6. Ô để hiển thị giá trị lớn nhất trong mảng
// 7. Ô để hiển thị số lượng các số chẵn có trong mảng
// 8. Có 1 button, khi click vào button này thì sẽ xử lý và trả kết quả vào trong các ô từ 4 đến 7
// Khi bấn vào nút button thì sẽ tạo ra 1 mảng có kích cỡ là size và các giá trị được sinh ngẫu nhiên trong [min, max]
// sau đó xử lý để hiển thị vào các ô từ 4 đến 7
