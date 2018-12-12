document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {

    var form = this,
        inputs = [
            form["fname"],
            form["sname"],
            form["age"],
            form["city"]];


    inputs.forEach(function (input) {
        var isInvalid = false;
        if (isInvalid === false &&input.value === "") {
            e.preventDefault();
            input.focus();
            isInvalid = true;
        }
    });
});