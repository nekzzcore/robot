document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item.has-submenu');

dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        const submenuId = this.dataset.submenu;
        const submenu = document.getElementById(submenuId);
        
        if (submenu) {
            submenu.classList.toggle('active');
            }
        });
    });
});