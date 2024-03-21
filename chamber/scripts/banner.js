const header = document.querySelector('header');

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    const bannerContainer = document.createElement('div');
    bannerContainer.style.display = 'grid';
    bannerContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    document.body.insertBefore(bannerContainer, header.nextElementSibling);

    const banner = document.createElement('div');
    banner.innerText = "Join the meet and greet this Wednesday at 7:00";
    bannerContainer.appendChild(banner);

    banner.style.color = '#f7f7f7';
    banner.style.width = '100%';
    banner.style.height = '40px';
    banner.style.backgroundColor = '#c9c19f';
    banner.style.gridColumn = '1 / span 4';
    banner.style.gridRow = '1 / span 1';
    banner.style.textAlign = 'center';
    banner.style.position = 'relative';
    banner.style.fontSize = 'larger';

    const closeButton = document.createElement('span');
    closeButton.innerText = 'x';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-1px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#f7f7f7';
    banner.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        bannerContainer.style.display = 'none';
    });
}
