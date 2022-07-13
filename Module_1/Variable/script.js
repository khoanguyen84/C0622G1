function additional(){
    // 1. lấy number A
    let number_A = Number(document.getElementById("numberA").value);
    // 2. lấy number B
    let number_B = Number(document.getElementById('numberB').value);
    // 3. tính tổng
    let total = number_A + number_B;
    // 4. hiển thi kết quả
    document.getElementById('result').value = total;
}

function cancel(){
    document.getElementById("numberA").value = null;
    document.getElementById('numberB').value = null;
    document.getElementById('result').value = null;
}