const input = document.querySelector('#chapterInput');
const addButton = document.querySelector('#addButton');
const sortButton = document.querySelector('#sortButton');
const list = document.querySelector('#chapterList');
let chaptersArray = getChapterList() || [];

function renderList() {
    list.innerHTML = '';
    chaptersArray.forEach((chapter) => {
        const listItem = document.createElement('li');
        listItem.textContent = chapter;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            const index = chaptersArray.indexOf(chapter);
            if (index !== -1) {
                chaptersArray.splice(index, 1);
                renderList();
                setChapterList();
            }
        });
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

addButton.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

sortButton.addEventListener('click', () => {
    chaptersArray.sort((a, b) => a.localeCompare(b));
    renderList();
    setChapterList();
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

renderList();
