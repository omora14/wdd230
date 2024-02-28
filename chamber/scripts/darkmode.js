const darkModeToggle = document.getElementById('dark-mode-toggle');
const sectionsToChange = document.querySelectorAll('main section, .discover-container, .spotlight-card');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.style.backgroundColor = 'black';
        sectionsToChange.forEach(section => {
            section.style.backgroundColor = 'black';
            section.style.color = 'white';
            section.style.border = '1px solid #808080';
        });
    } else {
        document.body.style.backgroundColor = 'white';
        sectionsToChange.forEach(section => {
            section.style.backgroundColor = 'white';
            section.style.color = 'black';
            section.style.border = 'none';
        });
    }
});
