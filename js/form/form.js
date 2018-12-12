document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
    var formValid = isFormValid(this);
    if (!formValid) {
        e.preventDefault();
    }
});

function isFormValid(form) {
    var inputs = form.getElementsByClassName("required"),
        isValid = true;

    Array.from(inputs).forEach(function (input) {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = ""
        }
    });
    return isValid;
}

test