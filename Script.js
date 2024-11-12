// Script.js

// Function to show the selected page and highlight the corresponding menu item
function showPage(pageId) {
    // Get all pages and hide them initially
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active'); // Remove 'active' class from all pages
    });

    // Show the selected page by adding the 'active' class
    document.getElementById(pageId).classList.add('active');

    // Get all menu links and remove the 'active' class from each
    const menuLinks = document.querySelectorAll('.sidebar ul li a');
    menuLinks.forEach(link => {
        link.classList.remove('active'); // Reset background for all menu items
    });

    // Add 'active' class to the clicked menu item
    document.querySelector(`.sidebar ul li a[onclick="showPage('${pageId}')"]`).classList.add('active');
}

// Function to toggle between dark and light modes
function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    // Toggle button icon based on mode
    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('light-mode')) {
        modeToggle.textContent = '🌙'; // Moon icon for dark mode
    } else {
        modeToggle.textContent = '🌞'; // Sun icon for light mode
    }
}

// Set default mode to dark and show the home page initially
document.body.classList.add('dark-mode');
showPage('home'); // Initial page
