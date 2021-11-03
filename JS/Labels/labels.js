
/*
The label statement allows us to name 
loops and blocks in JavaScript. We can
 then use these labels to refer back to the 
 code later. For example, the below code with
  labels avoids printing the numbers when they are same,
*/

loop1: // ye loop 1 ka naam hai
for (let i = 0; i < 3; i++) {
    loop2: // loop 2 ka naame hai
    for (let j = 0; j < 3; j++) {
        if (i == j) {
            continue loop1;  // yaha se loop 1 chalne lagega
            // break;
        }
        console.log("i", i, "j", j)
    }
}

// console.log('loop1', loop1)
// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
console.log(Object.getPrototypeOf('James')); // TypeError: "James" is not an object
// ES2015
console.log(Object.getPrototypeOf('James')); // String.prototy