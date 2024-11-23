// Theme Toggle
function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    // Toggle button icon based on mode
    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('light-mode')) {
        modeToggle.textContent = '🌞'; // Moon icon for light mode
    } else {
        modeToggle.textContent = '🌙'; // Sun icon for dark mode
    }
}

// Set default mode to dark and show the home page initially
document.body.classList.add('light-mode');

// DateTime Display
function updateDateTime() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    document.getElementById('timeText').textContent = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('dateText').textContent = now.toLocaleDateString('en-US', dateOptions);
  }
  setInterval(updateDateTime, 1000); // Update every second

// Page Navigation
const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all menu items and pages
        menuItems.forEach(i => i.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked menu item and corresponding page
        item.classList.add('active');
        const pageId = item.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
    });
});
