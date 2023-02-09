(() => {
    const refs = {
        openFranchiseMenu: document.querySelector('[data-franchise-open]'),
        openDesctopModal: document.querySelector('[data-desctop-modal]'),
        openMobileModal: document.querySelector('[data-mobile-modal]'),
        closeFranchiseMenu: document.querySelector('[data-franchise-close]'),
        menu: document.querySelector('[data-franchise]'),
    };

    refs.openFranchiseMenu.addEventListener('click', toggleMenu);
    refs.openDesctopModal.addEventListener('click', toggleMenu);
    refs.openMobileModal.addEventListener('click', toggleMenu);
    refs.closeFranchiseMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        document.body.classList.toggle("modal-open");
        refs.menu.classList.toggle('is-hidden');
    }
})();

