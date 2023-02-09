
(() => {
    const refs = {
        openContactsMenu: document.querySelector('[data-contacts-open]'),
        closeContactsMenu: document.querySelector('[data-contacts-close]'),
        menu: document.querySelector('[data-contacts]'),
    };
    refs.openContactsMenu.addEventListener('click', toggleMenu);
    refs.closeContactsMenu.addEventListener('click', toggleMenu);
    function toggleMenu() {
        document.body.classList.toggle("modal-open");
        refs.menu.classList.toggle('is-hidden');
    }
})();