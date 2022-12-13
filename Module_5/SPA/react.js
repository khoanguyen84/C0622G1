// React.createElement
// + type: tên thẻ, component
// + props: 
// + children(s): text, children khác
// const h1 = React.createElement("h1", {
//     className: "heading_1",
//     id: "h_1",
//     style: {
//         backgroundColor : "orange",
//         color: "white"
//     }
// }, "Module 5 - Coding Bootcamp");

// const ul = React.createElement("ul", null,
//                         React.createElement("li", null, "Bài 1: SPA"),
//                         React.createElement("li", null, "Bài 2: JSX"),
//                         React.createElement("li", null, "Bài 3: Webpack"),
//                     )
// const div = React.createElement(React.Fragment, null, h1, ul)

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(div);
// root.render(ul);

const form_area = React.createElement("form", null,
    React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Email"),
        React.createElement("input", {
            type: "email",
            placeholder: "Email",
            className: "form-control"
        })
    ),
    React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Password"),
        React.createElement("input", {
            type: "password",
            placeholder: "Password",
            className: "form-control"
        })
    ),
    React.createElement("div", { className: "form-group" },
        React.createElement("input", {
            type: "button",
            value: "Login",
            className: "btn btn-success",
            onClick: () => { alert("login") }
        }),
        React.createElement("input", {
            type: "button",
            value: "Cancel",
            className: "btn btn-dark",
            onClick: () => { alert("Cancel") }
        })
    )
)

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(form_area);