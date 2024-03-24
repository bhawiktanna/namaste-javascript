

//Scenario 1 begins

// var x = 7;
// function getName() {
//     console.log('Namaste Javascript');
// }
// getName();
// console.log('x->' + x);
// console.log('getName->' + getName);

//Output 

/*
In the Memory Allocation Phase
value of x is undefined
getName() will have actual copy of function code
*/
//Final Output
/*
Namaste Javascript
x->7
getName->function getName() {
    console.log('Namaste Javascript');
}
*/

//Scenario 1 ends

//Scenario 2 begins

// getName();
// console.log('x->' + x);
// console.log('getName->' + getName);
// var x = 7;
// function getName() {
//     console.log('Namaste Javascript');
// }


//Output


//Final Output
/**
 * Namaste Javascript
 * x->undefined
 * getName->function getName() {
 *   console.log('Namaste Javascript');
 * }
 */


//Scenario 2 ends


//Scenario 3 begins

// getName();
// console.log('x->' + x);
// console.log('getName->' + getName);

// function getName() {
//     console.log('Namaste Javascript');
// }

//Final Output
/**
 * Uncaught ReferenceError: x is not defined
 */


//Scenario 3 ends


//Scenario 4 begins

getName();
console.log('x->' + x);
console.log('getName->' + getName);
var x = 7;
var getName = () => {
    console.log('Namaste Javascript');
}

// var getName = function() {
//     console.log('Namaste Javascript');
// }


//Final Output
/** Uncaught TypeError: getName is not a function
 *
 *
 *  Same Output in both the cases because getName in line 83 and 87 are treated as variable not
 * as function so during memory allocation phase getName is being assigned undefined value which throws TypeError
 *
 */


//Scenario 4 ends
