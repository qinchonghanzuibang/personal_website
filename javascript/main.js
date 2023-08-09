document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const destinationElement = document.querySelector(targetID);

        if (destinationElement) {
            const offset = 95; // You can change this value to adjust the destination
            const destination = destinationElement.offsetTop - offset;

            window.scrollTo({
                top: destination,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop -95;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
