let navIcon = document.getElementById("nav-icon-btn");
navIcon.addEventListener("click", function () {
    let navOpen = document.getElementById("nav");
    let body = document.getElementById("body");
    if (navOpen.classList.contains("open")) {
        navOpen.classList.remove("open");
    } else {
        body.classList.add("no-scroll");
        navOpen.classList.add("open");
    }
});
