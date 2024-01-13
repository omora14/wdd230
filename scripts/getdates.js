
document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the footer
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy ' + currentYear + '<br>Owen Morales <br><br>Costa Rica <br> <img src="images/costarica.jpg" alt="Costa Rica flag" width="40" height="20">';

    // Get the last modified date and update the second paragraph
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;
});
