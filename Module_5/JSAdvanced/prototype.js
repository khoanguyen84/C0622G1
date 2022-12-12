class Staff{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}

Staff.prototype.getAge = function(){
    return this.age;
}

let huy = new Staff("Huy Nguyễn", 18)
console.log(huy.getAge());

Array.prototype.sum = function(){
    console.log("My Sum");
}

let arr = new Array();
arr.sum()