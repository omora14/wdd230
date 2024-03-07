const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value;

    if (password !== confirmPassword) {
        document.getElementById("formmessage").innerText = "Ooophs, passwords don't match!";
        document.getElementById("formmessage").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}