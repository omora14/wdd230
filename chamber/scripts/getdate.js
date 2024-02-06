document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const firstP = document.querySelector("footer p:first-of-type");
    firstP.innerHTML = `&copy ${year} 
 Owen Morales <br>WDD230 Web Frontend Development <br><br>info@example.com <br>+1 324 343 3434`;

    const lastModifiedDate = document.lastModified;
    const secondP = document.getElementById("lastModified");
    secondP.textContent = `Last Modified: ${lastModifiedDate}`;
});