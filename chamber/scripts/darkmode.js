const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

modeButton.addEventListener("change", () => {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle('dark-mode', isDarkMode);
    main.classList.toggle('dark-mode', isDarkMode);
    toggleDarkModeForAside(isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
});

function toggleDarkModeForAside(isDarkMode) {
    const asideElements = document.querySelectorAll("aside .aside");
    asideElements.forEach(aside => {
        aside.classList.toggle('dark-mode', isDarkMode);
    });
}

