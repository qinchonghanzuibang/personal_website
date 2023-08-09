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
