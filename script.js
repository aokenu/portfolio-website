// Mobile menu
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    const toggleMenu = () => {
        const open = navLinks.classList.toggle("active");
        menuToggle.querySelector("i").className = open ? "bx bx-x" : "bx bx-menu";
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
        }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.querySelector("i").className = "bx bx-menu";
        });
    });
}

// Highlight the nav link for the section currently in view (home page only)
const sections = document.querySelectorAll("main section[id]");
const sectionLinks = document.querySelectorAll('.nav-link[href^="#"]');

if (sections.length && sectionLinks.length) {
    const setActive = (id) => {
        sectionLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
}
