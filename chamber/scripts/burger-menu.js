const mainnav = document.querySelector("#menu");
const burger = document.querySelector(".navigation");

mainnav.addEventListener("click", () => {
    burger.classList.toggle("open");
    mainnav.classList.toggle("open");
});
