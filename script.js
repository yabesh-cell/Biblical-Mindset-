// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fetch & Display Blogs Automatically
document.addEventListener("DOMContentLoaded", function () {
    fetch("blogs.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("blogs-container");
            container.innerHTML = "";
            data.blogs.forEach(blog => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="blog/${blog.filename}">${blog.title}</a>`;
                container.appendChild(li);
            });
        });
});

// Blog Search Function
function searchBlogs() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const blogs = document.querySelectorAll("#blogs-container li");

    blogs.forEach(blog => {
        const text = blog.textContent.toLowerCase();
        blog.style.display = text.includes(input) ? "block" : "none";
    });
}
