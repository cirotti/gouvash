// Animación de estrellas
function animateStars() {
    const stars = document.querySelectorAll('.stars, .stars2, .stars3');
    stars.forEach((star) => {
        star.style.transform = `translateY(${Math.random() * 100}px)`;
    });
    requestAnimationFrame(animateStars);
}

animateStars();

// Animación de título
function animateTitle() {
    const title = document.querySelector('.animated-title');
    title.style.transform = `translateY(${Math.random() * 20}px)`;
    requestAnimationFrame(animateTitle);
}

animateTitle();

// Animación de productos
function animateProducts() {
    const products = document.querySelectorAll('.product');
    products.forEach((product) => {
        product.style.transform = `translateY(${Math.random() * 20}px)`;
    });
    requestAnimationFrame(animateProducts);
}

animateProducts();

// Animación de pie de página
function animateFooter() {
    const footer = document.querySelector('.footer');
    footer.style.transform = `translateY(${Math.random() * 20}px)`;
    requestAnimationFrame(animateFooter);
}

animateFooter();