const advance = document.querySelectorAll('.next-btn');

advance.forEach(button => {
    button.addEventListener('click', function () {
        const current = document.querySelector('.active');
        const nextStep = 'step-' + this.getAttribute('data-next');

        current.classList.remove('active');
        document.getElementById(nextStep).classList.add('active');
    })
})