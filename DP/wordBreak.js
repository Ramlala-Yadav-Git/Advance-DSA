
let word = "masaignskdn";
let dict = ['as', 'mas', 'ai', 'asai'];


function solve(s, dict, dp) {
    if (s in dp) {
        return dp[s]
    }
    else if (s.length == 0) {
        found = true;
        return true;
    }

    for (let key of dict) {
        if (s.indexOf(key) === 0) {
            dp[s] = solve(s.substring(key.length), dict, dp)
        }
    }

    dp[s] = false;
    return dp[s]
}

let found = false
let x = solve(word, dict, {})
console.log(found)
