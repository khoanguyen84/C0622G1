import React, { useState } from "react";

// const [state, setState] = useState(initState);
// ý nghĩa: quản lý sự thay đổi trạng thái của dữ liệu
// + initState (khởi tạo trạng thái):
//      - Các kiểu dữ liệu của JS (number, string, array, object, boolean,...)
//      - Callback
// + state: ban đầu giá trị của state = initState
// + setState: cập nhật/thay đổi giá trị của state
// Cơ chế hoạt động: 
//      - mỗi khi state thay đổi thì component sẽ được re-render
//      - nếu có nhiều state thay đổi cùng 1 lúc, thì component chỉ re-render 1 lần mà thôi

// one-way binding
console.log("outsite component");

function UseState(){
    // xử lý logic mã js
    const [title, setTitle] = useState("");

    const handleInput = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeTitle = () => {
        setTitle("ReactJS");
    }

    document.title = title;
    // UI
    return (
        <div className="container">
            <input type="text" onChange={handleInput}/>
            <button onClick={handleChangeTitle}>Change Title</button>
        </div>
    )
}

export default UseState;
