document.addEventListener("DOMContentLoaded", function () {
    fetchBlogs();
});

function fetchBlogs() {
    fetch('blog-list.json')
        .then(response => response.json())
        .then(blogs => {
            const blogList = document.getElementById('blog-list');
            blogList.innerHTML = "";

            blogs.forEach(blog => {
                const blogItem = document.createElement('li');
                blogItem.innerHTML = `<a href="${blog.file}">${blog.title} - ${blog.date}</a>`;
                blogList.appendChild(blogItem);
            });
        });
}

// Search function
function searchBlogs() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let blogItems = document.querySelectorAll("#blog-list li");

    blogItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "" : "none";
    });
}
