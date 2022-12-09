// let jobs = ["Java", "React", "Angular"];

// let job_1 = jobs[0];
// let job_2= jobs[1];
// let job_3 = jobs[2];

// let [job_1, job_2, job_3] = jobs;
// let [job_2, job_1, job_3] = jobs;
// console.log(job_1, job_2, job_3);

const product = {
    id:"12434",
    name: "iPhone 14",
    price: 30000000,
    info(){
        return `Product name: ${name}, price is ${price}`;
    }
}

const {name, info, price} = product;

console.log(info());