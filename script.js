document.addEventListener("DOMContentLoaded", () => {

    const pages = [
        "Antalya-old-town.html",
        "Aspendos.html",
        "Clock-Tower.html",
        "Duden-Waterfall.html",
        "Konyaalti-Beach.html",
        "St-Nicholas-Church.html"
    ];

    function goToRandomPage() {
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex];
        window.location.href = randomPage;
    }

    document.getElementById("visit-random-place-btn").addEventListener("click", goToRandomPage);
});
