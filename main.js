// //ternary operators

// let firstName = 'John'
// let age = 16

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + 'Drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// //game stuff
// let game1t1 = 89;
// let game2t1 = 120;
// let game3t1 = 103;

// let game1t2 = 116;
// let game2t2 = 94;
// let game3t2 = 123;

// let teamOneAverage = (game1t1 + game2t1 + game3t1) / 3;
// let teamTwoAverage = (game1t2 + game2t2 + game3t2) / 3;

// function whoWins() {
//     if (teamOneAverage > teamTwoAverage) {
//         console.log("team one wins!")
//     } else {
//         console.log("Team two wins!")
//     }
//     if (teamOneAverage === teamTwoAverage) {
//         console.log("It's a tie!")
//     }
// }

// whoWins()

// let names = ['john', 'jane', 'john']

// let years = new Array(1990, 1969, 1948)

// names[5] = 'mary'

// names.push('blue')

// console.log(names)

// console.log(names.indexOf('john'))

// function tipCalc(amt) {
//     switch (amt) {
//         case 48:
//             return amt * 0.2;
//         case 124:
//             return amt * 0.15;
//         case 268:
//             return amt * 0.5;
//     }

// }

// console.log(tipCalc(48))

//---------objects-------------//
//object literal
// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['dog', 'cat'],
//     job: 'teacher',
//     isMarried: false
// }
// console.log(john)
//change value
// john.job = 'designer'
//     // new object syntax
// let jane = new Object()
// jane.name = 'Jane'


//object methods

// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['dog', 'cat'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         return 2018 - this.birthYear
//     }
// }

// console.log(john.calcAge)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }