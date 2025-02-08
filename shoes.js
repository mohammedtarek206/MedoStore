document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    products.forEach((product, index) => {
        product.style.opacity = "0";
        product.style.transform = "translateY(20px)";
        setTimeout(() => {
            product.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
        }, index * 150);
    });

    const reviews = document.getElementById("reviews");
    if (reviews) {
        reviews.style.opacity = "0";
        window.addEventListener("scroll", function () {
            const rect = reviews.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                reviews.style.transition = "opacity 0.5s ease-in-out";
                reviews.style.opacity = "1";
            }
        });
    }
});
