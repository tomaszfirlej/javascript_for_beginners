document.addEventListener("DOMContentLoaded", function () {

    createItems();
    document.getElementById("deleteButton").addEventListener("click", function(){
        var elementToRemove = document.getElementById("id1");
        document.body.removeChild(elementToRemove);
    });
});


function createItems() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        colors = ["red", "blue"];

    array.forEach(function (item) {

        var elem = document.createElement("div");
        elem.id = "id" + item;
        elem.innerText = "element number: " + item;
        elem.style.color = colors[item % 2];
        elem.style.border = "solid";
        elem.style.margin = "10px";
        elem.style.padding = "10px";
        elem.style.width = "200px";

        var p1 = document.createElement("p");
        p1.innerText = "podElement";
        elem.appendChild(p1);

        var cena = document.createElement("p");
        cena.innerText = "cena";
        elem.appendChild(cena);

        document.body.appendChild(elem);
    });
}