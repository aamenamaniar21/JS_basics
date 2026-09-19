// math functions in js

// floor and ceil

let a = 8.9
let b = 8.9

//floor round off for lower value (before decimal)
console.log(Math.floor(a));

//ceil round offs for higher value (after decimal)
console.log(Math.ceil(b));

// abs - absoulute value -> how much distance does the value have from 0 
// simple if we give -minus values it gives +pos value and for +pos its the same
console.log(Math.abs(-3)); // how distance -3 is from 0?

// pow for power of anu number pow(num,power)
console.log(Math.pow(2,3));

// sqrt for square root of any number
console.log(Math.sqrt(25));

console.log(Math.log(1));

//generates random values betwn 0 to 1 where 1 is exclusive
console.log(Math.random());

// riund figueres the value 
console.log(Math.round(56.8)); //gives 57
console.log(Math.round(56.3)); //gives 56

//genterate random numbers between 1 to 99 with round-off values
console.log(Math.round(Math.random() * 100));



