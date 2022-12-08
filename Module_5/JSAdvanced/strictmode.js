// strict mode (chế độ nghiêm ngặt)
// có 2 vị trí đặt "use strict"
// 1. đầu file
// 2. đầu của thân hàm
// 'use strict';

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

function loop() {
    "use strict";
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}

loop();