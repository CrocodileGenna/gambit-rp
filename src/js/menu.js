(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-open]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    document.body.classList.toggle("modal-open");
    mobileMenuRef.classList.toggle("is-open");
  });
})();


(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    document.body.classList.toggle("modal-open");
    mobileMenuRef.classList.toggle("is-open");
  });
})();






(() => {
    const openedModalBtn = document.querySelector('[data-modal-opened]');
    const modals = document.querySelector('[data-modal-header]');

    openedModalBtn.addEventListener("click", () => {
        
        modals.classList.toggle("invisible");
    });
})();


(() => {
    const closedModalBtn = document.querySelector('[data-modal-closed]');
    const modals = document.querySelector('[data-modal-header]');

    closedModalBtn.addEventListener("click", () => {
        
        modals.classList.toggle("invisible");
    });
})();