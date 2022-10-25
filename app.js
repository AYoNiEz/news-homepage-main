const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.remove("hidden");
    hamburger.classList.add("hidden");
}
function closeMenu() {
    menu.classList.add("hidden");
    hamburger.classList.remove("hidden");
}