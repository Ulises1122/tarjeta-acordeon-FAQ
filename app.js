document.querySelectorAll('.acordeon-boton').forEach(button => {
    button.addEventListener('click', () => {
        const acordeonContenido = button.nextElementSibling;

        button.classList.toggle('acordeon-boton--active');

        if(button.classList.contains('acordeon-boton--active')) {
            acordeonContenido.style.maxHeight = acordeonContenido.scrollHeight + 'px';
        } else {
            acordeonContenido.style.maxHeight = 0;
        }

    });
});