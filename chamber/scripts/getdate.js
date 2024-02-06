document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    var footer = document.querySelector('footer');

    footer.querySelector('p:first-child').innerHTML = '&copy; ' + currentYear + '<br>Owen Morales' + '<br>WDD230 Web Frontend Development';

    var fakeInfo = document.createElement('p');
    fakeInfo.innerHTML = 'info@example.com' + '<br>+1 278 343 4324' + '<br>St Street, NY, 19201';
    fakeInfo.style.float = 'left';
    fakeInfo.style.clear = 'both';
    footer.appendChild(fakeInfo);

    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.createElement('p');
    lastModifiedElement.innerText = 'Last Modified: ' + lastModifiedDate;
    footer.appendChild(lastModifiedElement);
});
