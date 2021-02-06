// 25-3 object use bind to borrow method from another object
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        //To access any property of a object inside any method must need to write this.propertyName 
        const fullName = (this.firstName + " " + this.lastName);
        return fullName;
    },
    getCharge: function(amount){
        // console.log(this);
        this.salary = this.salary - amount;
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

// normalPerson.getCharge(100);
//1st method: Bind is less efficient 
const heroCharge = normalPerson.getCharge.bind(heroPerson); //Bind the previous function for new object
heroCharge(200);
console.log(heroPerson.salary);

console.log(normalPerson.salary)//No effect for the previous main function

const friendlyCharge = normalPerson.getCharge.bind(friendlyPerson); //Bind the previous function for new object
friendlyCharge(200);
console.log(friendlyPerson.salary);
