// const h1 = document.createElement("h1");
// h1.innerText = "C06622G1";
// // h1.className = "heading_1";
// // h1.style = "background-color: red; color: yellow";

// Object.assign(h1.style, {
//     backgroundColor: "red",
//     color: "white",
//     fontSize: "40px"
// })

// h1.onclick = (e) => { console.dir(e.target) }

// h1.ondblclick = () => { alert("on double click") }

// document.body.appendChild(h1);

const div = document.createElement("div");
div.className = "post-area";
const h3 = document.createElement("h3");
h3.className = "heading_3";
h3.innerText = "ReactJS";

const ul = document.createElement("ul");
const li_1 = document.createElement("li");
li_1.innerText = "Bài 1: SPA";
const li_2 = document.createElement("li");
li_2.innerText = "Bài 2: JSX";
const li_3 = document.createElement("li");
li_3.innerText = "Bài 3: Webpack";

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);

div.appendChild(h3);
div.appendChild(ul);

document.querySelector('#root').appendChild(div);