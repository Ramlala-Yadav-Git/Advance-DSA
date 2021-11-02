let arr = [4, 3, 2, 4]

function check(arr, r, c, m) {
    if (r == 0) {
        return
    }
    if (c < r) {
        if (arr[c] >= arr[m]) {
            check(arr, r, c + 1, c)
        }
        else {
            check(arr, r, c + 1, m)
        }
    }
    else {
        let temp = arr[m];
        arr[m] = arr[r - 1]
        arr[r - 1] = temp;
        check(arr, r - 1, 0, 0)
    }
}

let x = check(arr, arr.length, 0, 0)
console.log('x', arr)