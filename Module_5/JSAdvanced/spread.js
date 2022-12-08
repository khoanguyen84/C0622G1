// truyền tham trị (pass by value): kiểu dữ liệu number, boolean, string
// truyền tham chiếu (pass by reference): object, array, function

// let number_1 = 5;
// let number_2 = number_1;
// number_2 = number_2 + 1;

// console.log(number_1);
// console.log(number_2);

// let football = ["Hiếu", "Khanh", "Sang"];
// let walking = football;
// walking[1] = "Bình";

// console.log(football);
// console.log(walking);

let football = ["Hiếu", "Khanh", "Sang"];
let walking = [...football, "Hiếu"];
walking[1] = "Bình";

console.log(football[1]);
// console.log(football);
// console.log(walking);

let staff_1 = {
    name: "Thiện",
    age: 18,
    gender: true
}

// let staff_2 = staff_1;
// staff_2.name = "Huy";

// let staff_2 = { ... staff_1 };
// staff_2.name = "Huy";

let staff_2 = {
    ...staff_1,
    name : "Huy",
    salary: 10000000
}

console.log(staff_2["name"]);

// console.log(staff_1);
// console.log(staff_2);