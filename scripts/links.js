const baseURL = "https://omora14.github.io/wdd230/";
const linksURL = "https://omora14.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}
getLinks();

function displayLinks(lessons) {
    const linksList = document.querySelector('.numbered-list');

    lessons.forEach((lesson, index) => {
        const links = lesson.links;

        const lessonListNum = document.createElement('li');
        const linksSpan = document.createElement('span');

        links.forEach((link, index) => {
            const linkA = document.createElement('a');
            linkA.href = link.url;
            linkA.textContent = link.title;

            linksSpan.appendChild(linkA);

            if (index < links.length - 1) {
                const separator = document.createTextNode(' | ');
                linksSpan.appendChild(separator);
            }
        });

        lessonListNum.appendChild(linksSpan);
        linksList.appendChild(lessonListNum);
    });
}
