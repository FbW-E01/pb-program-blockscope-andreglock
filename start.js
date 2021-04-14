let x;
const determiner = -1;

if (determiner >= 0) {
    x = 'Greater or equal to 0';
} else {
    x = 'Less than 0';
}

console.log('1:', x);

let updater;

if (determiner >= 0) {
    updater = 'Greater or equal to 0';
    const message = 'Positive Integer';
} else {
    updater = 'Less than 0';
}

// console.log(message) here outside the block will make a ReferenceError because message is defined only inside the block

console.log('2:', updater);

// A ternary has only two options and one line of code, an if statement can have multiple options when combined with 'else if'.

// Example
let y;

determiner >= 0 ? console.log(y = '1 in ternary: Greater or equal to 0') : console.log(y = '1 in ternary: Less than 0'); //this ternary does the same as the example in the question one, but it harder to read