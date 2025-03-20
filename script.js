// script.js

document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');

    // Array of blog posts with titles and creation dates
    const blogs = [
        { title: 'The Parables of Jesus', link: 'blog1.html', date: 'March 20, 2025' },
        // Add more blog posts here
    ];

    // Generate HTML for each blog post
    blogs.forEach(blog => {
        const listItem = document.createElement('li');
        listItem.className = 'blog-item';
        listItem.innerHTML = `
            <a href="${blog.link}" class="blog-link">
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-date">Published on ${blog.date}</p>
            </a>
        `;
        blogList.appendChild(listItem);
    });
});

// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
