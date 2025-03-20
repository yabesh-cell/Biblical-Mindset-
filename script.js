document.addEventListener("DOMContentLoaded", function () {
    fetchBlogs();
});

function fetchBlogs() {
    fetch("blog-list.json")
        .then(response => response.json())
        .then(data => {
            let blogContainer = document.getElementById("blog-list");
            blogContainer.innerHTML = "";
            data.blogs.forEach(blog => {
                let blogItem = document.createElement("div");
                blogItem.classList.add("blog-item");
                blogItem.innerHTML = `
                    <h2><a href="blog/${blog.file}">${blog.title}</a></h2>
                    <p>${blog.date}</p>
                `;
                blogContainer.appendChild(blogItem);
            });
        });
}

// Blog Search Functionality
function searchBlog() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let blogItems = document.querySelectorAll(".blog-item");

    blogItems.forEach(item => {
        let title = item.querySelector("h2").innerText.toLowerCase();
        item.style.display = title.includes(input) ? "block" : "none";
    });
}
