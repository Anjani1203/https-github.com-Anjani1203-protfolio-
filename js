document.addEventListener("DOMContentLoaded", function () {
    // Display the current year in the footer.
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight the navigation link for the visible section.
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (link) {
                            const active =
                                link.getAttribute("href") ===
                                "#" + entry.target.id;

                            link.style.color = active
                                ? "var(--accent)"
                                : "";

                            if (active) {
                                link.setAttribute(
                                    "aria-current",
                                    "location"
                                );
                            } else {
                                link.removeAttribute("aria-current");
                            }
                        });
                    }
                });
            },
            {
                rootMargin: "-20% 0px -65% 0px"
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
});