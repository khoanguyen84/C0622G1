import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// component
//  có 2 cách tạo component
// cách 1: function component
// cách 2: class component



// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="display-1 bg-danger text-white">Webpack</h1>
//                 <p>Proident labore duis dolore commodo occaecat nisi do incididunt ullamco nostrud labore. Id officia culpa occaecat mollit eu eu occaecat eiusmod ullamco sint cillum duis proident. Ipsum officia enim voluptate Lorem deserunt proident aliquip dolore ipsum velit et commodo minim. Anim incididunt aliqua elit eiusmod eu incididunt eiusmod labore quis do. Ullamco cupidatat exercitation esse cupidatat eiusmod est quis deserunt id ea est do. Labore nostrud esse officia ea mollit qui. Anim enim sint dolore nisi ea duis qui nostrud esse.</p>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App/>, document.querySelector("#root"))
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)