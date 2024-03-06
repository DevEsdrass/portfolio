document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    const enviarButton = document.querySelector('#form-contato button');
    if (enviarButton) {
        enviarButton.addEventListener('click', smoothScroll);
    }
});
