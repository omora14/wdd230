const container = document.querySelector('header');

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    const banner = document.createElement('div');
    banner.innerText = "🤝 Come join us for the chamber meet and greet, Wed, 7:00pm.";
    container.appendChild(banner);

    banner.style.color = '#f7f7f7';
    banner.style.backgroundColor = '#3a508e';
    banner.style.gridColumn = '1 / span 4';
    banner.style.gridRow = '1 / span 1';
    banner.style.textAlign = 'center';

    const closeButton = document.createElement('span');
    closeButton.innerText = 'x';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#f7f7f7';
    banner.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}
