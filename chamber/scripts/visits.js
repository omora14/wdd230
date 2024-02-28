const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");
const elapsedDaysDisplay = document.querySelector(".elapsed-days");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastVisit = Number(window.localStorage.getItem("lastvisit-ls"));




let today1 = Date.now();
let elapsed = today1 - lastVisit;

let days = Math.round((elapsed) / 86400000);




if (numVisits != 0) {
    visitDisplay.textContent = numVisits;
    elapsedDaysDisplay.textContent = days;

} else {
    visitDisplay.textContent = "This is your first visit";
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);

localStorage.setItem("lastvisit-ls", Date.now());

todayDisplay.textContent = (Date.now());

const currentDate = new Date();

const lastVisitDate = localStorage.getItem('lastVisitDate');

let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

if (!lastVisitDate) {
    document.getElementById('message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const lastVisit = new Date(lastVisitDate);

    const timeDifference = currentDate - lastVisit;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        document.getElementById('message').textContent = 'Back so soon! Awesome!';
    } else {
        const message = daysDifference === 1 ? 'day' : 'days';
        document.getElementById('message').textContent = `You last visited ${daysDifference} ${message} ago.`;
    }
}