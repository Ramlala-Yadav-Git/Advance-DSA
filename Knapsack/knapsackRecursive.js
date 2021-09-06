let v = [60, 100, 120];
let weight = [10, 20, 30];
let wb = 50;
let n = v.length;
// you have to find the max value we can get 
function knapsack(wt, val, w, n) {

    if (n == 0 || w == 0) {

        return 0
    }

    if (wt[n - 1] > w) {
        return knapsack(wt, val, w, n - 1)
    }

    else {

        return max((val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1)), knapsack(wt, val, w, n - 1))
    }


}

function max(a, b) {
    if (a > b) {
        return a
    }
    return b
}

let r = knapsack(weight, v, wb, n)
console.log(r);