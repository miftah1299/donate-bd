// toggle history button
document
    .getElementById("btn-toggle-history")
    .addEventListener("click", function () {
        showSectionById("history");
        // change color of button
        document
            .getElementById("btn-toggle-history")
            .classList.add("bg-primary");
        document
            .getElementById("btn-toggle-donation")
            .classList.remove("bg-primary");
        document
            .getElementById("btn-toggle-donation")
            .classList.add("btn-outline");
    });

// toggle donation button
document
    .getElementById("btn-toggle-donation")
    .addEventListener("click", function () {
        showSectionById("donation");

        // change color of button
        document
            .getElementById("btn-toggle-donation")
            .classList.remove("btn-outline");
        document
            .getElementById("btn-toggle-donation")
            .classList.add("bg-primary");
        document
            .getElementById("btn-toggle-history")
            .classList.remove("bg-primary");
        document
            .getElementById("btn-toggle-history")
            .classList.add("btn-outline");
    });

// navbar scroll effect
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.classList.add("bg-opacity-30");
    } else {
        header.classList.remove("bg-opacity-30");
    }
});
