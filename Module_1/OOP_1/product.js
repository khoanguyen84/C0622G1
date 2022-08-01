function Product(name, price, photo, manufactory){
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.manufactory = manufactory;
}

let products = [
    new Product("IP 6S", 5000000, "https://cdn.tgdd.vn/Products/Images/42/71306/iphone-6s-xam-org-1.png", "China"),
    new Product("IP 7", 7000000, "https://didongthongminh.vn/images/products/anhphu/large/iphone-7-plus-jet-lack.webp?v=1626949358000", "Thailand"),
    new Product("IP 8", 10000000, "https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg", "US"),
    new Product("IP 9", 1200000, "https://cdn.tgdd.vn/Products/Images/42/219900/iphone-9-plus-600x600-600x600.jpg", "Thailand"),
]

function renderProduct(){
    // let htmls = products.map(function(product, index){
    //     return `
    //             <tr>
    //                 <td>${index + 1}</td>
    //                 <td>${product.name}</td>
    //                 <td>
    //                     <img style="width:60px; height:60px;" src="${product.photo}" alt="">
    //                 </td>
    //                 <td>${product.price}</td>
    //                 <td>${product.manufactory}</td>
    //                 <td>
    //                     <button>Remove</button>
    //                 </td>
    //             </tr>
    //     `
    // });
    // document.querySelector('.tbProduct>tbody').innerHTML = htmls.join("");
    let htmls = "";
    for(let i = 0; i < products.length; i++){
        htmls += 
                `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${products[i].name}</td>
                        <td>
                            <img style="width:60px; height:60px;" src="${products[i].photo}" alt="">
                        </td>
                        <td>${products[i].price}</td>
                        <td>${products[i].manufactory}</td>
                        <td>
                            <button>Remove</button>
                        </td>
                    </tr>
                `
    }
    // document.querySelector('.tbProduct>tbody').innerHTML = htmls;
    document.getElementsByClassName('tbProduct')[0].children[1].innerHTML = htmls;
}

renderProduct();