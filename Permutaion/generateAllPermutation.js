
const input = [1, 2, 3]

const permutation = (arr, l, r) => {
    if (l == r) {
        console.log(arr)
        return
    }

    for (let i = l; i <= r; i++) {

        swap(arr, l, i)
        permutation(arr, l + 1, r)
        swap(arr, l, i)
    }



}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}

permutation(input, 0, input.length - 1)