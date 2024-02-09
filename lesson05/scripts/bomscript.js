const input = document.querySelector('#chapterInput');
const addButton = document.querySelector('#addButton');
const sortButton = document.querySelector('#sortButton');
const list = document.querySelector('#chapterList');
let chapters = [];

function renderList() {
    list.innerHTML = '';
    chapters.forEach((chapter) => {
        const listItem = document.createElement('li');
        listItem.textContent = chapter;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            const index = chapters.indexOf(chapter);
            if (index !== -1) {
                chapters.splice(index, 1);
                renderList();
            }
        });
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

document.getElementById("chapterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const chapterText = input.value.trim();
    if (chapterText !== '') {
        chapters.push(chapterText);
        renderList();
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});

sortButton.addEventListener('click', () => {
    chapters.sort((a, b) => a.localeCompare(b));
    renderList();
});
