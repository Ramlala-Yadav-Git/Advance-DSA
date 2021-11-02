/*
Memoization is a programming technique which attempts to
increase a function’s performance by caching its previously
 computed results.Each time a memoized function is called,
 its parameters are used to index the cache.If the data is present,
  then it can be returned, without executing the entire function.
   Otherwise the function is executed and then the result is added
   to the cache.Let's take an example of adding function with memoization,


*/

// Meaning
/*
Ager value phle se calculated hai to use cache se use krlo 
usko dobara calculate krne ki jaroorat nhi hai

Ager nahi to phir use calculate kro aur phir use cache memory me add krlo
baad me jaroorat padne par use kar lena

isse performance improve hoti hai
*/


const memo = () => {
    let cache = {}; // cache create kar rhe
    return (value) => {
        if (value in cache) { // ager phle se calulated hai to ye chalega
            console.log("value checking  exist or not");
            return cache[value]
        }
        else { // nhi to ye chalega
            console.log("Result ko calculate kar rhe");
            let res = value + 20;
            cache[value] = res;
            return res
        };
    }
}

let add = memo()
console.log(add(20));// phli barr result calculate karega 
console.log(add(20)); // res return krega kyunki exist karta hai phle se