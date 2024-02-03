document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy; ' + currentYear + '<br>Owen Morales' + '<br>WDD230 Web Frontend Development' + '<br>info@example.com';


    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;
});
