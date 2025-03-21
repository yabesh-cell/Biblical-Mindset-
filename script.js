document.addEventListener("DOMContentLoaded", function() {
    let blogLinks = document.querySelectorAll(".blog a");

    blogLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.open(link.href, "_blank");
        });
    });
});
