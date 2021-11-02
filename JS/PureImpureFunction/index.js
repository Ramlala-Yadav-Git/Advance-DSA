
/*
A Pure function is a function where the return value is only
determined by its arguments without any side effects. i.e, If
you call a function with the same arguments 'n' number of times
 and 'n' number of places in the application then it will always
 return the same value.
*/

// Impure function
let numArray = [];
let impureAdd = number => numArray.push(number)// always return 1
// ye impure function hai kyuki ye numArray (original) ko change ker rha hai
console.log('impureAdd', impureAdd(7))
console.log(numArray);
// pure function
let pureAdd = number => argNumberArray => argNumberArray.concat([number])
// ye pure function hai kyuki ye original array ko chnage nhi kar rha balki 
// uski copy bna ke de rha 
console.log('pureAdd', pureAdd(7)(numArray))
console.log(numArray);


