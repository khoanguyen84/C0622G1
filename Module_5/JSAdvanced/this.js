if (Array.prototype.includes2 != 'function') {
    Array.prototype.includes2 = function (value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return true;
            }
        }
        return false;
    }
}

if(Array.prototype.map2 != "function"){
    Array.prototype.map2 = function(callback){
        let result = [];
        for(let i = 0 ; i < this.length; i++){
            result.push(callback(this[i], i))
        }
        return result;
    }
}

// this = context (ngữ cảnh)

// let jobs = ["java", "React", "angular", "vuejs"];
// console.log(jobs.includes("java"));
// let students = ["Huy", "Hiếu", "Khanh", "Bình"];
// console.log(students.includes("Sang"));

let numbers = [3, 5, 6, 7, 8, 7];


const process = function(value, index){
    return value**2;
}

let result = numbers.map2(function(value, index){
    return `<h1>${value}</h1>`;
});

// let result = numbers.map(process)

document.write(result.join(""))