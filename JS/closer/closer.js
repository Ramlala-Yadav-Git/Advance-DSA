

const outer = (a) => {
  let b = 10;

  const inner = () => {
    console.log(a + b, "hi")
    return 5
  }
  return inner;
}
console.log(outer(10)())

// >>>>>>>>>>>> lexical scoping means inner function can access his parent function
// variables and utilities

/* 
A closure is the combination of a function and the 
lexical environment within which that function was declared. 
i.e, It is an inner function that has access to the outer or 
enclosing function’s variables. The closure has three scope chains


Own scope where variables defined between its curly brackets
Outer function’s variables
Global variables


function Welcome(name){
  var greetingInfo = function(message){
   console.log(message+' '+name);
  }
return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); //Output: Welcome John
myFunction('Hello Mr.'); //output: Hello Mr.John

*/