function changeColor(){
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    let colorArea = document.getElementById('color-area');
    colorArea.innerText = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    // colorArea.innerText = `<h1>rgb(${red.value}, ${green.value}, ${blue.value})</h1>`;
    colorArea.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    // let tr_3 = document.getElementsByTagName('table')[0].children[0].children[3];
    // tr_3.children[0].innerHTML = red.value;
    // tr_3.children[1].innerHTML = green.value;
    // tr_3.children[2].innerHTML = blue.value;
    let td_red = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(1)");
    td_red.innerHTML = red.value;
    let td_green = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(2)");
    td_green.innerHTML = green.value;
    let td_blue = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(3)");
    td_blue.innerHTML = blue.value;
}

changeColor();