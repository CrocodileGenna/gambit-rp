const refs = {
  openBtn: document.querySelector(".header__burger"),
  menu: document.querySelector(".header__menu"),
  body: document.querySelector("body"),
};

refs.openBtn.addEventListener("click", addClass);

function addClass() {
  refs.openBtn.classList.toggle("active");
  refs.menu.classList.toggle("active");
  refs.body.classList.toggle("lock");
}
