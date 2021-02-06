//25-9 Asynchronous Javascript setTimeout, setInterval
//Normally JavaScript warks in sync way.
function doSomething(){
    console.log(3333);
}
console.log(222);
doSomething();
//setTimeout() is used to execute the task at the end of execution
//Or we can also setInterval to delay certain time by argument
setTimeout(doSomething);
setTimeout(doSomething, 1000);
setTimeout(() => { //By anonymous function
    console.log('See you letter')
},2000)
console.log(444);
console.log(555);


//setInterval() this function is used to do something frequently after a defined interval//
setInterval(function(){
    console.log('Automatic after interval');
}, 3000) //After 2000ms = 2Sec
