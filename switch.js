function toggleDarkMode() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var modeText = document.getElementById('modeText');
    var header = document.querySelector('header');

    if (darkModeToggle.checked) {
        document.body.style.backgroundColor = '#333'; // Set body color to dark grey
        header.style.backgroundColor = 'black'; // Change header background color to black
        header.style.color = '#fff'; // Change header text color to white
        modeText.textContent = 'Dark Mode';
    } else {
        document.body.style.backgroundColor = '#a8dbec'; // Restore body color to charcoal grey
        header.style.backgroundColor = '#138fb2'; // Restore header background color
        header.style.color = '#fff'; // Restore header text color
        modeText.textContent = 'Light Mode';
    }
}
