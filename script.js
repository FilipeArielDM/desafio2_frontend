document.addEventListener('DOMContentLoaded', () => {
    const recursoItems = document.querySelectorAll('.recurso-item img');

    recursoItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('maximizado');
        });
    });
});