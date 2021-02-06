// 25-11 JavaScript Date Time timezone and others
const start = new Date();
console.log(start);
let sum = 0;
for (let i = 0; i < 10000000; i++) {
    sum++;
}
const end = new Date();
console.log(end);
console.log ('Time elapsed: ', end-start);// Total time counting in ms to execute the loop
