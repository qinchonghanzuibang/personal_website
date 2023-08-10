const offsetPercentage = 7.6505647; // You can adjust this value to change the activation point

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const destinationElement = targetID === '#about' ? null : document.querySelector(targetID);

        if (destinationElement) {
            const offset = (window.innerHeight * offsetPercentage) / 100;
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
