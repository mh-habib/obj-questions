// 25-4 difference between bind, call and apply
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        //To access any property of a object inside any method must need to write this.propertyName 
        const fullName = (this.firstName + " " + this.lastName);
        return fullName;
    },
    getCharge: function(amount, tax){
        // console.log(this);
        this.salary = this.salary - amount -tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Sakib',
    salary: 2500
}
const friendlyPerson = {
    firstName: 'Tamim',
    lastName: 'Iqbal',
    salary: 1500
}

//2nd method: Call 
normalPerson.getCharge.call(heroPerson, 500, 20);
normalPerson.getCharge.call(heroPerson, 300, 30);
console.log(heroPerson.salary);

console.log(normalPerson.salary);

//3rd method:Apply
normalPerson.getCharge.apply(friendlyPerson, [500, 20]); //Arguments must be in an array
normalPerson.getCharge.apply(friendlyPerson, [300, 30]);
console.log(friendlyPerson.salary);