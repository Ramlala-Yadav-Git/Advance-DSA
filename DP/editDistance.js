

let S1 = "abc";
let S2 = "def"

function solve(s1, s2, m, n) {

    let dp = [];
    // making dp
    for (let i = 0; i <= m; i++) {
        let temp = [];
        for (let j = 0; j <= n; j++) {
            temp.push(0)
        }
        dp.push(temp)
    }


    for (let i = 0; i <= m; i++) {  // iterating for first string
        for (let j = 0; j <= n; j++) { //iterator for secod string
            if (i == 0) {
                dp[i][j] = j; // if first string length is 0 then total operation is equal to the length of second string
            }
            else if (j == 0) {
                dp[i][j] = i; // if secod string length is 0 then operation cost will be length of first string
            }
            else if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] // else if both letter are same no operation cost is needed
            }
            else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);// else we will perform addition, substituiton and deletion and take min from them
            }
        }
    }
    return dp[m][n] // at last last will give us ans

}

let x = solve(S1, S2, S1.length, S2.length)
console.log(x)

