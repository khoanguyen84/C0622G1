let i = 1;
while (i <= 5){
    let j = 1;
    do{
        console.log(`${i}.${j}`);
        j++;
    }
    while(j <= 5);
    // for(let j = 1; j <= 5; j++){
    //     console.log(`${i}.${j}`);
    // }
    i++;
}