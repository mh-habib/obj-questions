// 25-2 object method property review
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
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalPerson);  //How to call aa object
console.log(normalPerson.firstName);
console.log(normalPerson.lastName);     //How to call a property from an object
console.log(normalPerson.getFullName());// How to call method from an object
console.log(normalPerson.getCharge(100));// How to call method from an object with argument