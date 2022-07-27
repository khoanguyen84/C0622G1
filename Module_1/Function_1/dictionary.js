const vn = ["Trái táo", "Trái chuối", "Trái cam"];
const en = ["Apple", "Banane", "Orange"];

// Nhận vào từ TV trể về 1 từ TA
function translateVNEN(vnWord) {
    let position = -1;
    position = vn.findIndex(function(word){
        return word.toLocaleLowerCase() == vnWord.toLocaleLowerCase();
    })
    // for (let i = 0; i < vn.length; i++) {
    //     if (vn[i].toLocaleLowerCase() == vnWord.toLocaleLowerCase()) {
    //         position = i;
    //         break;
    //     }
    // }
    // có tìm thấy
    if (position != -1) {
        return en[position];
    }
    return "Not found";
}

function translateENVN(enWord) {
    let position = -1;
    position = en.findIndex(function(word){
        return word.toLocaleLowerCase() == enWord.toLocaleLowerCase();
    })
    if (position != -1) {
        return vn[position];
    }
    return "Not found";
}

// function main() {
//     let keyword = window.prompt("Enter keyword:");
//     let result = translate(keyword);
//     document.write(result);
// }

// main();

function find(){
    let language = document.querySelector("#language").value;
    let keyword = document.querySelector("#keyword").value;
    let result = "";
    switch(language){
        case "VietNam":{
            result = translateENVN(keyword);
            break;
        }
        case "English":{
            result = translateVNEN(keyword);
            break;
        }
    }
    document.querySelector("#result").value = result;
}