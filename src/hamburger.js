const hamMenu = document.querySelector(".ham-menu--js");
const offScreenMenu = document.querySelector(".off-screen-menu--js");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("-translate-x-96");
});