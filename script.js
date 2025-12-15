document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');

    // Only prevent default for anchor links (#something)
    if (href.startsWith('#')) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {


    const images = document.querySelectorAll(".journal-card img");
    const overlay = document.getElementById("imageOverlay");
    const popupImage = document.getElementById("popupImage");
    const closeBtn = document.getElementById("closeBtn");

    images.forEach(img => {
        img.addEventListener("click", () => {
            popupImage.src = img.src;
            overlay.classList.add("active");
        });
    });

    function closePopup() {
        overlay.classList.remove("active");
        setTimeout(() => popupImage.src = "", 300);
    }

    overlay.addEventListener("click", e => {
        if (e.target !== popupImage) closePopup();
    });

    closeBtn.addEventListener("click", closePopup);

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closePopup();
    });


    const cards = document.querySelectorAll(".journal-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
});

