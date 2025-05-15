document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    console.log("Site loaded and interactive behavior initialized.");
});