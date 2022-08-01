// Properties (thuộc tính)
// Hành vi/ phương thức (methods)
// Kiểu dữ liêu nguyên thủy: 

// đối tượng (s)
let binh = {
    fullname : "Bình Trần",
    age: 18,
    gender: true,
    hobbies: ["Đá bóng", "Bóng chuyền", "Đọc sách"],
    greeting: function(){
        return `My name is ${this.fullname}, ${this.age} years old, my hobbies ${this.hobbies.toString()}`;
    }
}

let khanh = {
    fullname : "Khanh Hoàng",
    age: 19,
    gender: true,
    hobbies: ["Nhậu", "Hút thuốc", "Game"],
    greeting: function(){
        return `My name is ${this.fullname}, ${this.age} years old, my hobbies ${this.hobbies.toString()}`;
    }
}

// function binhIntro(){
//     console.log(`My name is ${binh.fullname}, ${binh.age} years old, my hobbies ${binh.hobbies.toString()}`)
// }

// console.log(binh["age"]);
// console.log(binh.age)
// binhIntro();
// console.log(binh.greeting())
// console.log(khanh.greeting())

// lớp : class
//  1. properties
//  2. methods
//  3. contructor

function Student(fn, a, g){
    this.fullname = fn;
    this.age = a;
    this.gender = g;
    this.greeting = function(){
        return `My name is ${this.fullname}, ${this.age} years old`;
    }
}

let loc = new Student("Lộc Lê", 18, true);
let huong = new Student("Hướng Trần", 19, true);

// console.log(loc.greeting())
// console.log(huong.greeting())

// let numbers_1 = new Array(1,3,4,5);
// numbers_1.toString();
// numbers_1.length;
// let numbers_2 = new Array();
// numbers_2.toString()

let students = [
    new Student("Lộc Trần", 18, true),
    new Student("Thư Lê", 28, false),
    new Student("Tài Võ", 18, true),
]

console.log(students[1].greeting())

