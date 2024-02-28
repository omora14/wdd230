function toggleMenu(x) {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("container").classList.toggle("open");

    x.classList.toggle("change");
}