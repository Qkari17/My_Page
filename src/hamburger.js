const hamMenu = document.querySelector(".ham-menu--js");

const hamOne = document.querySelector(".ham-one--js");

const hamTwo = document.querySelector(".ham-two--js");

const hamThree = document.querySelector(".ham-three--js");

const offScreenMenu = document.querySelector(".off-screen-menu--js");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("relative");
  hamMenu.classList.toggle("justify-center");
  offScreenMenu.classList.toggle("-translate-x-[50rem]");
  hamOne.classList.toggle("absolute5");
  hamOne.classList.toggle("-rotate-45");
   hamThree.classList.toggle("absolute");
  hamThree.classList.toggle("rotate-45");
  hamTwo.classList.toggle("hidden");
 
});