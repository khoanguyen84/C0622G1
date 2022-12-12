function renderPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (res) {
            return res.json();
        })
        .then(function (posts) {
            let htmls = posts.map(function (post) {
                return `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>
                `
            })
            document.querySelector('tbody').innerHTML = htmls.join("");
        })
}

renderPost();