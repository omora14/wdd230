function saveVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
}

function displayVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    const visitCountElement = document.querySelector('.visit-count');
    if (visitCountElement) {
        visitCountElement.textContent = `Page Visits: ${visitCount}`;
    }
}

saveVisitCount();

window.addEventListener('DOMContentLoaded', displayVisitCount);