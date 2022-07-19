function process(){
    let aveScore = Number(document.getElementById('aveScore').value);
    let rank = document.getElementById('rank');
    // if(aveScore > 10 || aveScore < 0){
    //     rank.value = "ĐTB không hợp lệ";
    // }
    // else if(aveScore >=9){
    //     rank.value = "Xuất sắc";
    // }
    // else if (aveScore >= 8){
    //     rank.value = "Giởi";
    // }
    // else if(aveScore >= 7){
    //     rank.value = "Khá";
    // }
    // else if(aveScore >= 5){
    //     rank.value = "Trung bình";
    // }
    // else{
    //     rank.value = "Yếu";
    // }
    // rank.value = `${ aveScore > 10 || aveScore < 0 ? 'ĐTB không hợp lệ'
    //                             : aveScore >= 9 ? "Xuất sắc"
    //                             : aveScore >= 8 ? "Giỏi"
    //                             : aveScore >= 7 ? "Khá"
    //                             : aveScore >=5 ? "Trung bình" : "Yếu" }`;

    switch (true){
        case aveScore > 10 || aveScore < 0 : {
            rank.value = "ĐTB không hợp lệ";
            break;
        }
        case aveScore < 5 : {
            rank.value = "Yếu";
            break;
        }
        case aveScore >= 5 && aveScore < 7 : {
            rank.value = "Trung bình";
            break;
        }
        case aveScore >= 7 && aveScore < 8: {
            rank.value = "Khá";
            break; 
        }
        case aveScore >= 8 && aveScore < 9: {
            rank.value = "Giỏi";
            break;
        }
        case aveScore >= 9 : {
            rank.value = "Xuất sắc";
            break;
        } 
        
    }
}