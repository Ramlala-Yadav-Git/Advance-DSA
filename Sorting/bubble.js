let arr = [4, 3, 2, 4]

function check(arr, r, c) {

    if (r < 0) {
        return
    }
    if (c < r) {


        if (arr[c] >= arr[c + 1]) {
            let temp = arr[c];
            arr[c] = arr[c + 1];
            arr[c + 1] = temp;
        }

        check(arr, r, c + 1)
    }
    else {
        check(arr, r - 1, 0)
    }
}

let x = check(arr, arr.length, 0)
console.log('x', arr)