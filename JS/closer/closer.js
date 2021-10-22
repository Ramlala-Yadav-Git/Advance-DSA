

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
// variables ans utilities