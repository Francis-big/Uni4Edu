const menuBtn = document.getElementById("menu-btn");

const mobileBtn = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("hidden");
});