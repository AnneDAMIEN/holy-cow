const me = require("./information");
console.log(`Hello, my name is ${me.surname} and I study in ${me.campus}`);
console.log(me);

const cowsay = require("cowsay");

console.log(cowsay.say({ 
    text: "Annnnnnnnnne la plus belle ", 
    e: "oO" , 
    T: "U " 
}));