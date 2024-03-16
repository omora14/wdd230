const url = 'data/members.json';

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlightMembers(data.members);
}

getMemberData(url);

const displaySpotlightMembers = (members) => {
    const spotlightCards = document.querySelector('article');

    let displayCount = 0;
    let displayed = [];

    while (displayCount < 3) {
        let featuredIndex = Math.floor(Math.random() * members.length);

        let level = members[featuredIndex].level;

        let isFound = displayed.includes(featuredIndex);

        if (level <= 2 && !isFound) {
            displayCount += 1;
            displayed.push(featuredIndex);
            displayFeaturedMember(featuredIndex);
        }
    }

    function displayFeaturedMember(index) {
        let spotlightCard = document.createElement('div');
        let h2 = document.createElement('h2');
        let icon = document.createElement('img');
        let spacer = document.createElement('hr');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        h2.innerHTML = members[index].name;
        icon.setAttribute('src', members[index].icon);
        icon.setAttribute('alt', 'spotlight business');
        icon.setAttribute('class', 'spotlight-icon');
        address.innerHTML = members[index].address;
        phone.innerHTML = members[index].phone;
        website.innerHTML = members[index].website;
        website.setAttribute('href', members[index].website);

        spotlightCard.setAttribute('class', 'spot-card');

        spotlightCard.appendChild(h2);
        spotlightCard.appendChild(icon);
        spotlightCard.appendChild(spacer);
        spotlightCard.appendChild(address);
        spotlightCard.appendChild(phone);
        spotlightCard.appendChild(website);

        spotlightCards.appendChild(spotlightCard);
    }
};
