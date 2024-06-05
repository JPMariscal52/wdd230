document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBannerBtn");

    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = "block";
    }

    closeBannerBtn.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
