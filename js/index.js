const refs = {
  body: document.querySelector("body"),
  openBurgerBtn: document.querySelector(".header__burger"),
  menuBurger: document.querySelector(".header__menu"),

  btnCreateAccount: document.querySelector(".content__buttons__create"),
  modalCreate: document.querySelector("#register-modal"),
  closeModalCreate: document.querySelector(".close"),
  lableModalCreate: document.querySelector(".modal-content__form label"),

  btnJoin: document.querySelector(".footer__button"),
  modalJoin: document.querySelector(".modal-join"),
  closeJoin: document.querySelector(".close-join"),
};

refs.openBurgerBtn.addEventListener("click", addClass);
refs.btnCreateAccount.addEventListener("click", openModalCreate);
refs.closeModalCreate.addEventListener("click", closeModalCreate);
refs.btnJoin.addEventListener("click", openModalJoin);
refs.closeJoin.addEventListener("click", closeModalJoin);

// menu
function addClass() {
  refs.body.classList.toggle("lock");

  refs.openBurgerBtn.classList.toggle("active");
  refs.menuBurger.classList.toggle("active");
}

// modal create
function openModalCreate() {
  refs.body.classList.add("lock");
  refs.modalCreate.style.display = "block";
}
function closeModalCreate() {
  refs.body.classList.remove("lock");
  refs.modalCreate.style.display = "none";
}

// modal join
function openModalJoin() {
  refs.body.classList.add("lock");
  refs.modalJoin.style.display = "block";
}
function closeModalJoin() {
  refs.body.classList.remove("lock");
  refs.modalJoin.style.display = "none";
}
