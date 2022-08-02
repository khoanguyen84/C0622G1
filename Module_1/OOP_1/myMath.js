class MyMath{
    static sum(n1, n2, n3){
        return n1 + n2 + n3;
    }
    static isPrime(number){
        for(let i = 2; i < number; i++){
            if(number % i ==0){
                return false;
            }
        }
        return true;
    }
}

// console.log(MyMath.sum(4,6,8))
console.log(MyMath.isPrime(15))