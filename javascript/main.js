document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const destinationElement = targetID === '#about' ? null : document.querySelector(targetID);

        if (destinationElement) {
            const nameElement = document.getElementById('name'); // Replace with the correct ID or class for the "Jonathan Qin" element
            const additionalOffset = 26; // You can adjust this value to change how much higher the scroll position is
            const offset = nameElement ? nameElement.offsetTop - additionalOffset : 0; // Calculate the offset based on the "Jonathan Qin" element and adjust higher
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
