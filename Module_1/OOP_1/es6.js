class Person{
    constructor(fullname, dob, gender){
        this.fullname = fullname;
        this.dob = dob;
        this.gender = gender;
    }
    greeeting(){
        return `Hello ${this.gender ? 'Mr' : 'Ms'}. ${this.fullname}, dob ${this.dob}`;
    }
    static slogen(){
        return 'still breath still alive';
    }
}

class Staff extends Person{
    constructor(fullname, dob, gender, salary){
        super(fullname, dob, gender);
        this.salary = salary
    }
    // greeeting(){
    //     return `${super.greeeting()}, salary ${this.salary}`
    // }
    // intro(){
    //     return `Hello ${this.gender ? 'Mr' : 'Ms'}. ${this.fullname}, dob ${this.dob}, salary ${this.salary}`;
    // }
}
let binh = new Person("Binh", '2000-10-10', true);
// console.log(binh.greeeting())
// console.log(binh.slogen())
console.log(Person.slogen())
// let ha = new Staff("Ha", "2000-10-10", true, 15000000);
// console.log(ha.intro())
// console.log(ha.greeeting())

// let khanh = new Staff("Khanh", '2000-10-10', true);
// console.log(khanh.greeeting())
// let hieu = new Person("Hiếu", 18, true, "2000-10-10");
// console.log(hieu.greeeting())

// let arr = new Array();

// let math = new Math();
// Math.random()
// math.random()