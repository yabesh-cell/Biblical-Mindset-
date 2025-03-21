// Function to Load Blogs from the Blog Folder
document.addEventListener("DOMContentLoaded", function () {
    loadBlogs();
});

function loadBlogs() {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = ""; // Clear existing list

    // List of uploaded blogs (Manually add your blog filenames here)
    let blogs = [
        { title: "First Blog", filename: "blog1.html" },
        { title: "Second Blog", filename: "blog2.html" }
        // Add more blogs here as you upload them
    ];

    blogs.forEach(blog => {
        let item = document.createElement("li");
        item.innerHTML = `<a href="blog/${blog.filename}">${blog.title}</a>`;
        blogList.appendChild(item);
    });
}
