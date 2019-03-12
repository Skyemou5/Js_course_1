//ternary operators

let firstName = 'John'
let age = 16

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + 'Drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

//same

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

///// switch statement

let job = 'teacher'

switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code')
}

//truthy and falsy values
// falsy: undefined, null, 0, '',NaN - all these will be false in am if else
//truthy: not falsy values

let height = 0;

if (height || height === 0) {
    console.log('defined')
} else {
    console.log('undefined')
}