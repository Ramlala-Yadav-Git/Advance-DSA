
let arr = [1, 2, 3]

function permute(arr, idx, n) {
    if (idx == n) {
        console.log(arr);
        return;
    }
    for (let i = idx; i < n; i++) {
        swap(arr, i, idx)
        permute(arr, idx + 1, n)
        swap(arr, i, idx)

    }

}
permute(arr, 0, arr.length)

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}