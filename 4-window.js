//25-5 window, global variable, global scope
//Window: Window is javaScript running environment  
//All global JavaScript objects, functions, and variables automatically become members of the window object.
var name = "karim"; //Name is a global variable
function add (num1, num2){
    var result = num1 + num2; //result is local variable
    //But if we forget to add var keyword then it will be global  
    console.log(name);
    return result;
}
var output = add(5, 3);
console.log(output);
console.log(name);