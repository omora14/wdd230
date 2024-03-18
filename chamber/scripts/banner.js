const header = document.querySelector('header');

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    // Create a container for the banner
    const bannerContainer = document.createElement('div');
    bannerContainer.style.display = 'grid';
    bannerContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    document.body.insertBefore(bannerContainer, header.nextElementSibling);

    const banner = document.createElement('div');
    banner.innerText = "🤝 Come join us for the chamber meet and greet, Wed, 7:00pm.";
    bannerContainer.appendChild(banner);

    banner.style.color = '#f7f7f7';
    banner.style.backgroundColor = '#3a508e';
    banner.style.gridColumn = '1 / span 4';
    banner.style.gridRow = '1 / span 1';
    banner.style.textAlign = 'center';
    banner.style.position = 'relative'; // Added this line to make sure position:absolute works

    const closeButton = document.createElement('span');
    closeButton.innerText = 'x';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-3px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#f7f7f7';
    banner.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        bannerContainer.style.display = 'none';
    });
}
