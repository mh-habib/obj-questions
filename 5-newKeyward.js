//25-6 new keyword, class and object difference
//Class is used to produce similar type of multiple object
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
//Object creation
const heroPerson = new Person('Hero', 'Sakib Khan', 25000);
console.log(heroPerson);

const friendlyPerson = new Person('Abdul', 'Momin', 20000);
console.log(friendlyPerson);

//In Old days new is also used for function (Before es6)
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const OldPerson = new Person('Adu', 'Vai', 1200);
console.log(OldPerson);
