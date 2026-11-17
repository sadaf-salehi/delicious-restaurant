const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        foodCards.forEach(function (card) {
            const foodCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === foodCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Replay the burger assembly animation
const replayButton = document.getElementById("replayBurger");
const burgerStage = document.getElementById("burgerStage");

if (replayButton && burgerStage) {
    replayButton.addEventListener("click", function () {
        const layers = burgerStage.querySelectorAll(".burger-layer");

        layers.forEach(function (layer) {
            layer.style.animation = "none";
        });

        // Reset the animation before playing it again
        burgerStage.offsetHeight;

        layers.forEach(function (layer) {
            layer.style.animation = "";
        });
    });
}

const burgerSection = document.querySelector(".burger-showcase");

if (burgerSection) {
    const burgerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const layers = burgerSection.querySelectorAll(".burger-layer");

                layers.forEach(function (layer) {
                    layer.style.animation = "none";
                });

                // Reset the animation
                burgerSection.offsetHeight;

                layers.forEach(function (layer) {
                    layer.style.animation = "";
                    layer.style.animation =
                        "burgerAssemble 0.7s ease-out var(--delay, 0s) forwards";
                });

                burgerObserver.unobserve(burgerSection);
            }
        });
    }, { threshold: 0.3 });

    burgerObserver.observe(burgerSection);
}