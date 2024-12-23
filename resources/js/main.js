
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}



// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});



const heroButton = document.querySelector('.hero-button');

heroButton.addEventListener('mouseover', () => {
heroButton.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
});

heroButton.addEventListener('mouseout', () => {
heroButton.style.boxShadow = 'none';
});

heroButton.addEventListener('click', () => {
heroButton.style.backgroundColor = '#click-color'; // Optional click feedback color
setTimeout(() => {
    heroButton.style.backgroundColor = ''; // Revert to original color after click
}, 200);
});




// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}
