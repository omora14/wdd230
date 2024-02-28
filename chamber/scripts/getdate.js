document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    ;

    const copyrightYear = document.querySelector("#copyright");
    copyrightYear.textContent = `© ${new Date().getFullYear()} | Owen Morales | Costa Rica`;

    const lastModifiedDate = document.lastModified;
    const secondP = document.getElementById("lastModified");
    secondP.textContent = `Last Modified: ${lastModifiedDate}`;
});