const url = 'https://omora14.github.io/wdd230/chamber/data/members.json';

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData(url);

const gridButton = document.querySelector("#grid-btn");
const listButton = document.querySelector("#list-btn");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", displayList);

function displayList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const displayMembers = (members, service) => {
    const cards = document.querySelector('article');

    members.forEach((member) => {
        let card = document.createElement('section');
        let nameline = document.createElement('div');

        let icon = document.createElement('img');
        let testspan = document.createElement('span');
        let h2 = document.createElement('h2');

        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');

        h2.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership.textContent = `Membership: ${member.membership}`;

        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', 'business icon');
        icon.setAttribute('class', 'icon');
        nameline.setAttribute('class', 'name');
        website.setAttribute('href', member.website);



        nameline.appendChild(icon);
        nameline.appendChild(h2);

        card.appendChild(nameline);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    })

}