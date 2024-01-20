document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy; ' + currentYear + ' Owen Morales';

    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;
});
