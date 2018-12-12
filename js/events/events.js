
//1 default
console.log(this);

document.addEventListener("DOMContentLoaded", function () {

    //2 method
    var person = {
        name: "John",
        surname: "Doe",
        age: 11,
        whatsMyAge: function () {
            console.log(this);
            return this.age;
        }
    };
    person.whatsMyAge();

    //3 function
    function someFunction(){
        console.log(this);
        return this;
    }
    someFunction();

    //4 event

});