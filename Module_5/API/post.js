function displayPosts(){
    $.ajax({
        "url": "https://jsonplaceholder.typicode.com/posts",
        "method": "GET",
        success: function(posts){
            let htmls = posts.map(function(post){
                return `
                        <tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.body}</td>
                            <td class='d-flex align-items-center'>
                                <button class='btn btn-success btn-sm me-2'>
                                    <i class='fa fa-eye'></i>
                                </button>
                                <button class='btn btn-danger btn-sm'>
                                    <i class='fa fa-trash'></i>
                                </button>
                            </td>
                        </tr>
                        `
            })

            $('.table>tbody').append(htmls.join(""))
        }
    })
}


displayPosts();