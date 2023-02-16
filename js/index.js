const refs = {
  body: document.querySelector("body"),
  openBurgerBtn: document.querySelector(".header__burger"),
  menuBurger: document.querySelector(".header__menu"),

  btnCreateAccount: document.querySelector(".content__buttons__create"),
  modalCreate: document.querySelector("#register-modal"),
  closeModalCreate: document.querySelector(".close"),
  lableModalCreate: document.querySelector(".modal-content__form label"),
  inputModalCreate: document.querySelector(".modal-content__form input"),
};

refs.openBurgerBtn.addEventListener("click", addClass);
refs.btnCreateAccount.addEventListener("click", openModal);
refs.closeModalCreate.addEventListener("click", closeModalCreate);

function addClass() {
  refs.body.classList.toggle("lock");

  refs.openBurgerBtn.classList.toggle("active");
  refs.menuBurger.classList.toggle("active");
}

function openModal() {
  refs.body.classList.add("lock");
  refs.modalCreate.style.display = "block";
}
function closeModalCreate() {
  refs.body.classList.remove("lock");
  refs.modalCreate.style.display = "none";
}
