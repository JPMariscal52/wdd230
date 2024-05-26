document.addEventListener("DOMContentLoaded", function() {

    let currentYearElement = document.getElementById("currentYear");
    let currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    let lastModifiedElement = document.getElementById("lastModified");
    let lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;

    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const diffDays = Math.floor((now - lastVisitDate) / oneDay);

        if (diffDays < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${diffDays} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', now);
});