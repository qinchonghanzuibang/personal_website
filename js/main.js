document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        let destination;

        switch (targetID) {
            case '#about':
                destination = 0; // Set the destination for the "About" section
                break;
            case '#experience':
                destination = 480; // Set the destination for the "Experience" section
                break;
            case '#projects':
                destination = 2000; // Set the destination for the "Projects" section
                break;
            default:
                destination = 0;
        }

        window.scrollTo({
            top: destination,
            behavior: 'smooth'
        });
    });
});