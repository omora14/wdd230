const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

document.querySelector("#testBtn").addEventListener("click", displayDecade);

function displayDecade() {
    const test = document.querySelectorAll(".not-decade");
    [].forEach.call(test, function (section) {
        section.style.display = "none";
    });
}


async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData(url);


const displayProphets = (prophets, service) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let place = document.createElement('p');
        let age = document.createElement('p');
        let portrait = document.createElement('img');

        if (prophet.length <= 10) {
            card.classList.add('not-decade');

        }

        let ord = prophet.order;
        let supscript = "th";
        if (ord == 1) {
            supscript = "st";
        }
        if (ord == 2) {
            supscript = "nd";
        }
        if (ord == 3) {
            supscript = "rd"
        }
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        if (prophet.death == null) {
            prophet.death = new Date();
        }
        let miliSec = (new Date(prophet.death)) - (new Date(prophet.birthdate));
        let year = 1000 * 60 * 60 * 24 * 365;
        let test = Math.trunc(miliSec / year);
        age.textContent = `Age: ${test}`;

        p.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;


        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${ord}${supscript} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(place);
        card.appendChild(age);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}




