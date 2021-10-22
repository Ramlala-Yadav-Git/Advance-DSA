let data = [1, 2, 3, 2, 5, 8, 7, 9, 7]

function reverse(arr, n, i) {

    if (n >= i) {
        return arr
    }
    else {
        let temp = arr[i];
        arr[i] = arr[n]
        arr[n] = temp
        return reverse(arr, n + 1, i - 1)
    }
}

let x = reverse(data, 0, data.length - 1)
console.log(x)