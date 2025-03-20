// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// Open Blog Page When Clicked
document.addEventListener("DOMContentLoaded", function () {
    const blogLinks = document.querySelectorAll(".blog-link");
    blogLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const blogFile = this.getAttribute("href");
            window.location.href = blogFile;
        });
    });
});
