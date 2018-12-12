
//2
console.log(this);

document.addEventListener("DOMContentLoaded", function () {

    //1
    var person = {
        name: "John",
        surname: "Doe",
        age: 11,
        whatsMyAge: function () {
            return this.age;
        }
    };

    person.whatsMyAge();

    //3
    function someFunction(){
        return this;
    }

    //4
    document.getElementById("id1").addEventListener("click", function (){
       var x = this;
    });

    //4
    var x = this;
    console.log(x);

});