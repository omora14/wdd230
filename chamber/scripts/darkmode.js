const darkModeToggle = document.getElementById('dark-mode-toggle');
const sectionsToChange = document.querySelectorAll('main section, .discover-container div, .spotlight div, .spot-card div, .grid, .top, fieldset, input, textarea, td, tr, th');

const toggleDarkMode = () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        sectionsToChange.forEach(section => {
            section.style.backgroundColor = 'black';
            section.style.color = 'white';
            section.style.border = '1px solid #808080';
        });
    } else {
        document.body.classList.remove('dark-mode');
        sectionsToChange.forEach(section => {
            section.style.backgroundColor = '';
            section.style.color = '';
            section.style.border = '';
        });
    }
};

darkModeToggle.addEventListener('change', toggleDarkMode);

toggleDarkMode();
