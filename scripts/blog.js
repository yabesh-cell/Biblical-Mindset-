document.addEventListener("DOMContentLoaded", function () {
    fetch("blog/list.json") // Fetch blog list
        .then(response => response.json())
        .then(blogs => {
            const blogList = document.getElementById("blog-list");
            blogList.innerHTML = "";

            blogs.forEach(blog => {
                let blogItem = document.createElement("div");
                blogItem.classList.add("blog-item");

                blogItem.innerHTML = `
                    <h2><a href="blog/${blog.filename}" class="blog-link">${blog.title}</a></h2>
                    <p>Published on: ${blog.date}</p>
                `;

                blogList.appendChild(blogItem);
            });
        })
        .catch(error => console.error("Error loading blogs:", error));
});

// Blog Search Functionality
function searchBlogs() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let blogs = document.querySelectorAll(".blog-item");

    blogs.forEach(blog => {
        let title = blog.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }
    });
              }
