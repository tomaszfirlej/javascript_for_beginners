document.addEventListener("DOMContentLoaded", function () {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        colors = ["red", "blue", "yellow"];

    array.forEach(function (item) {
        var elem = document.createElement('div');
        elem.innerText = "element number: " + item;
        elem.style.color = colors[item % 4];
        document.body.appendChild(elem);
    });
    document.body.appendChild(elem);
});