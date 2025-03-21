// Load Blogs and Enable Search
document.addEventListener("DOMContentLoaded", function () {
    loadBlogs();
});

// Function to Load Blogs from JSON and Display
function loadBlogs() {
    fetch("json/blogs.json")
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById("blog-list");
            blogList.innerHTML = "";
            
            data.forEach(blog => {
                let item = document.createElement("li");
                item.innerHTML = `<a href="blog/${blog.filename}">${blog.title}</a>`;
                item.setAttribute("data-keywords", blog.keywords);
                blogList.appendChild(item);
            });
        });
}

// Search Blogs by Title & Keywords
function searchBlogs() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let blogs = document.querySelectorAll("#blog-list li");

    blogs.forEach(blog => {
        let title = blog.textContent.toLowerCase();
        let keywords = blog.getAttribute("data-keywords").toLowerCase();
        if (title.includes(searchInput) || keywords.includes(searchInput)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }
    });
                  }
