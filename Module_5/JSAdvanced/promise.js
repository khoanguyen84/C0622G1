// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//         }, 3000)
//     }, 1000)
// }, 2000);


const promise = new Promise(
    function(resolve, reject){
        // logic
        let number = 5;
        if(number >= 5){
            return resolve(0)
        }
        return reject("Thất bại");
    }
)

// promise chain

promise
    .then(function(data){
        console.log(++data);
        return data;
    })
    .then(function(data){
        console.log(++data);
        return data;
    })
    .then(function(data){
        console.log(++data);
        return data;
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("done");
    })
