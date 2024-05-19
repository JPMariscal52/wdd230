document.addEventListener("DOMContentLoaded", function() {
    
    let currentYearElement = document.getElementById("currentYear");

    let currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    let lastModifiedElement = document.getElementById("lastModified");

    let lastModifiedDate = document.lastModified;

    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;
});

