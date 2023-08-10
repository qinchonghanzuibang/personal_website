document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const destinationElement = targetID === '#about' ? null : document.querySelector(targetID);

        if (destinationElement) {
            const viewportHeight = window.innerHeight;
            const offsetPercentage = 7.5; // You can adjust this percentage to change the offset
            const offset = (viewportHeight * offsetPercentage) / 100;
            const destination = destinationElement.offsetTop - offset;

            window.scrollTo({
                top: destination,
                behavior: 'smooth'
            });
        } else if (targetID === '#about') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
